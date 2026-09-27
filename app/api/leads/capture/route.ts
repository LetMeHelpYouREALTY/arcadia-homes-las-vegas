/**
 * Lead Capture API — sends inquiries to Follow Up Boss via /v1/events
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  leadFormLimiter,
  getClientId,
  checkRateLimit,
  getRateLimitHeaders,
} from '@/lib/rate-limit';

const SITE_SOURCE = 'arcadiahomeslasvegas.com';

export interface LeadCaptureRequest {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  source?: string;
  formName?: string;
  formType?: 'contact' | 'property-search' | 'home-valuation' | 'newsletter';
  sourceUrl?: string;
  stage?: string;
  tags?: string[];
  message?: string;
  propertyType?: string;
  priceMin?: number;
  priceMax?: number;
  bedrooms?: number;
  bathrooms?: number;
  neighborhoods?: string[];
  timeline?: string;
  financing?: string;
  preApproved?: boolean;
  turnstileToken?: string;
  company?: string;
  website?: string;
  customFields?: Record<string, unknown>;
}

async function verifyTurnstileToken(token: string): Promise<boolean> {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.warn('TURNSTILE_SECRET_KEY not configured - skipping verification');
    return true;
  }

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const data = (await response.json()) as { success?: boolean };
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

function resolveEventType(data: LeadCaptureRequest): string {
  switch (data.formType) {
    case 'home-valuation':
      return 'Seller Inquiry';
    case 'property-search':
      return 'Property Inquiry';
    case 'newsletter':
      return 'Registration';
    case 'contact':
      return 'General Inquiry';
    default:
      break;
  }

  const src = (data.source || '').toLowerCase();
  if (src.includes('valuation') || src.includes('seller') || src.includes('home-value')) {
    return 'Seller Inquiry';
  }
  if (src.includes('property') || src.includes('listing')) {
    return 'Property Inquiry';
  }
  if (src.includes('newsletter') || src.includes('guide') || src.includes('signup')) {
    return 'Registration';
  }

  return 'General Inquiry';
}

function parsePersonName(data: LeadCaptureRequest): {
  firstName: string;
  lastName: string;
} {
  if (data.firstName || data.lastName) {
    return {
      firstName: (data.firstName || '').trim(),
      lastName: (data.lastName || '').trim(),
    };
  }

  const full = (data.name || '').trim();
  if (!full) {
    return { firstName: '', lastName: '' };
  }

  const parts = full.split(/\s+/);
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: '' };
  }

  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' '),
  };
}

function buildMarketingContext(request: NextRequest): {
  tags: string[];
  descriptionParts: string[];
} {
  const tags: string[] = [];
  const descriptionParts: string[] = [];

  const url = new URL(request.url);
  const utmSource = url.searchParams.get('utm_source');
  const utmMedium = url.searchParams.get('utm_medium');
  const utmCampaign = url.searchParams.get('utm_campaign');

  if (utmSource) {
    tags.push(`utm_source:${utmSource}`);
    descriptionParts.push(`utm_source=${utmSource}`);
  }
  if (utmMedium) {
    tags.push(`utm_medium:${utmMedium}`);
    descriptionParts.push(`utm_medium=${utmMedium}`);
  }
  if (utmCampaign) {
    tags.push(`utm_campaign:${utmCampaign}`);
    descriptionParts.push(`utm_campaign=${utmCampaign}`);
  }

  const referrer = request.headers.get('referer');
  if (referrer) {
    try {
      const refUrl = new URL(referrer);
      if (!refUrl.hostname.includes(SITE_SOURCE)) {
        tags.push(`referrer:${refUrl.hostname}`);
        descriptionParts.push(`referrer=${refUrl.hostname}`);
      }
    } catch {
      // ignore invalid referer
    }
  }

  return { tags, descriptionParts };
}

function buildFieldSummary(data: LeadCaptureRequest): string {
  const lines: string[] = [];

  if (data.propertyType) lines.push(`Property type: ${data.propertyType}`);
  if (data.priceMin != null || data.priceMax != null) {
    const min = data.priceMin != null ? `$${data.priceMin.toLocaleString()}` : 'Any';
    const max = data.priceMax != null ? `$${data.priceMax.toLocaleString()}` : 'Any';
    lines.push(`Price range: ${min} - ${max}`);
  }
  if (data.bedrooms != null) lines.push(`Bedrooms: ${data.bedrooms}+`);
  if (data.bathrooms != null) lines.push(`Bathrooms: ${data.bathrooms}+`);
  if (data.neighborhoods?.length) {
    lines.push(`Areas: ${data.neighborhoods.join(', ')}`);
  }
  if (data.timeline) lines.push(`Timeline: ${data.timeline}`);
  if (data.financing) lines.push(`Financing: ${data.financing}`);
  if (data.preApproved != null) {
    lines.push(`Pre-approved: ${data.preApproved ? 'Yes' : 'No'}`);
  }
  if (data.stage) lines.push(`Stage hint: ${data.stage}`);

  return lines.join('\n');
}

function buildFubEventPayload(
  data: LeadCaptureRequest,
  request: NextRequest
): Record<string, unknown> {
  const { firstName, lastName } = parsePersonName(data);
  const formName = data.formName || data.source || 'Lead Capture Form';
  const marketing = buildMarketingContext(request);
  const fieldSummary = buildFieldSummary(data);
  const sourceUrl =
    data.sourceUrl?.trim() ||
    request.headers.get('referer') ||
    `https://${SITE_SOURCE}`;

  const messageParts: string[] = [];
  if (data.message?.trim()) {
    messageParts.push(data.message.trim());
  }
  if (fieldSummary) {
    messageParts.push(fieldSummary);
  }

  const descriptionParts = [formName, sourceUrl, ...marketing.descriptionParts];

  const tags = [
    SITE_SOURCE,
    formName,
    ...marketing.tags,
    ...(data.tags || []),
  ].filter((tag, index, arr) => tag && arr.indexOf(tag) === index);

  const person: Record<string, unknown> = {
    firstName,
    lastName,
    tags,
  };

  if (data.email?.trim()) {
    person.emails = [{ value: data.email.trim() }];
  }
  if (data.phone?.trim()) {
    person.phones = [{ value: data.phone.trim() }];
  }

  return {
    source: SITE_SOURCE,
    system: SITE_SOURCE,
    type: resolveEventType(data),
    message: messageParts.join('\n\n') || `New inquiry from ${formName}`,
    description: descriptionParts.join(' | '),
    sourceUrl,
    person,
  };
}

async function sendFollowUpBossEvent(
  payload: Record<string, unknown>
): Promise<{ ok: true } | { ok: false; status?: number }> {
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;
  if (!apiKey) {
    console.error(
      'FOLLOW_UP_BOSS_API_KEY is not configured; cannot send lead to Follow Up Boss'
    );
    return { ok: false };
  }

  const headers: Record<string, string> = {
    Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`,
    'Content-Type': 'application/json',
    'X-System': SITE_SOURCE,
  };

  const systemKey =
    process.env.FOLLOW_UP_BOSS_SYSTEM_KEY || process.env.FUB_SYSTEM_KEY;
  if (systemKey) {
    headers['X-System-Key'] = systemKey;
  }

  try {
    const response = await fetch('https://api.followupboss.com/v1/events', {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    if (response.status === 200 || response.status === 201 || response.status === 204) {
      return { ok: true };
    }

    console.error(`Follow Up Boss events API returned HTTP ${response.status}`);
    return { ok: false, status: response.status };
  } catch (error) {
    console.error('Follow Up Boss events API request failed:', error);
    return { ok: false };
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as LeadCaptureRequest;

    const clientId = getClientId(request);
    const rateLimit = await checkRateLimit(leadFormLimiter, clientId);

    if (!rateLimit.success) {
      const resetDate = new Date(rateLimit.reset);
      const minutesUntilReset = Math.ceil((rateLimit.reset - Date.now()) / 60000);

      return NextResponse.json(
        {
          error: `Too many submissions. Please try again in ${minutesUntilReset} minute${minutesUntilReset > 1 ? 's' : ''}.`,
          retryAfter: resetDate.toISOString(),
        },
        {
          status: 429,
          headers: getRateLimitHeaders(rateLimit),
        }
      );
    }

    if (
      (data.company && data.company.trim() !== '') ||
      (data.website && data.website.trim() !== '')
    ) {
      return NextResponse.json(
        { success: true },
        { headers: getRateLimitHeaders(rateLimit) }
      );
    }

    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && process.env.TURNSTILE_SECRET_KEY) {
      if (!data.turnstileToken) {
        return NextResponse.json(
          { error: 'CAPTCHA verification required' },
          { status: 400 }
        );
      }

      const isValid = await verifyTurnstileToken(data.turnstileToken);
      if (!isValid) {
        return NextResponse.json(
          { error: 'CAPTCHA verification failed. Please try again.' },
          { status: 403 }
        );
      }
    }

    if (!data.email?.trim() && !data.phone?.trim()) {
      return NextResponse.json(
        { error: 'Email or phone is required' },
        { status: 400 }
      );
    }

    if (!data.firstName?.trim() && !data.lastName?.trim() && !data.name?.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!process.env.FOLLOW_UP_BOSS_API_KEY) {
      console.error(
        'FOLLOW_UP_BOSS_API_KEY is not configured; cannot send lead to Follow Up Boss'
      );
      return NextResponse.json(
        { error: 'Lead capture is temporarily unavailable. Please call or text Dr. Jan Duffy at (702) 500-0337.' },
        { status: 503, headers: getRateLimitHeaders(rateLimit) }
      );
    }

    const payload = buildFubEventPayload(data, request);
    const fubResult = await sendFollowUpBossEvent(payload);

    if (!fubResult.ok) {
      return NextResponse.json(
        {
          error:
            'Sorry, something went wrong sending your message. Please call or text Dr. Jan Duffy at (702) 500-0337.',
        },
        { status: 502, headers: getRateLimitHeaders(rateLimit) }
      );
    }

    return NextResponse.json(
      { success: true },
      { headers: getRateLimitHeaders(rateLimit) }
    );
  } catch (error) {
    console.error('[Lead Capture] Error:', error);
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
