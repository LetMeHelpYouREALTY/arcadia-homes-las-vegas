/**
 * Test: /api/leads/capture Route Handler
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { POST } from './route';

describe('POST /api/leads/capture', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.restoreAllMocks();
    process.env = { ...originalEnv };
    delete process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    delete process.env.TURNSTILE_SECRET_KEY;
    process.env.FOLLOW_UP_BOSS_API_KEY = 'test-fub-key';
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('returns 400 for empty JSON body', async () => {
    const request = new Request('http://localhost:3000/api/leads/capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{}',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toContain('required');
  });

  it('returns 503 when FOLLOW_UP_BOSS_API_KEY is missing', async () => {
    delete process.env.FOLLOW_UP_BOSS_API_KEY;

    const request = new Request('http://localhost:3000/api/leads/capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(503);
    expect(data.error).toContain('702) 500-0337');
  });

  it('returns 200 for honeypot without calling Follow Up Boss', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    const request = new Request('http://localhost:3000/api/leads/capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: 'Bot',
        lastName: 'User',
        email: 'bot@example.com',
        company: 'Acme Inc',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('posts a standard Follow Up Boss event for valid data', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      status: 201,
      ok: true,
    });
    vi.stubGlobal('fetch', fetchMock);

    const request = new Request(
      'http://localhost:3000/api/leads/capture?utm_source=google',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          referer: 'https://www.arcadiahomeslasvegas.com/contact',
        },
        body: JSON.stringify({
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane@example.com',
          phone: '7025551234',
          message: 'Interested in Arcadia homes',
          source: 'contact-page',
          formType: 'contact',
          sourceUrl: 'https://www.arcadiahomeslasvegas.com/contact',
        }),
      }
    );

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('https://api.followupboss.com/v1/events');
    expect(options.method).toBe('POST');

    const headers = options.headers as Record<string, string>;
    expect(headers.Authorization).toMatch(/^Basic /);
    expect(headers['X-System']).toBe('arcadiahomeslasvegas.com');
    expect(headers.Authorization).not.toContain('test-fub-key');

    const body = JSON.parse(options.body as string);
    expect(body.source).toBe('arcadiahomeslasvegas.com');
    expect(body.system).toBe('arcadiahomeslasvegas.com');
    expect(body.type).toBe('General Inquiry');
    expect(body.sourceUrl).toBe('https://www.arcadiahomeslasvegas.com/contact');
    expect(body.person.emails).toEqual([{ value: 'jane@example.com' }]);
    expect(body.person.phones).toEqual([{ value: '7025551234' }]);
    expect(body.person.tags).toEqual(
      expect.arrayContaining(['arcadiahomeslasvegas.com', 'contact-page', 'utm_source:google'])
    );
  });

  it('maps home valuation forms to Seller Inquiry', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ status: 200, ok: true });
    vi.stubGlobal('fetch', fetchMock);

    const request = new Request('http://localhost:3000/api/leads/capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: 'Seller',
        lastName: 'One',
        email: 'seller@example.com',
        formType: 'home-valuation',
      }),
    });

    await POST(request);

    const body = JSON.parse(
      (fetchMock.mock.calls[0][1] as RequestInit).body as string
    );
    expect(body.type).toBe('Seller Inquiry');
  });

  it('returns 502 when Follow Up Boss rejects the event', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        status: 500,
        ok: false,
      })
    );

    const request = new Request('http://localhost:3000/api/leads/capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(502);
    expect(data.error).toContain('702) 500-0337');
  });
});
