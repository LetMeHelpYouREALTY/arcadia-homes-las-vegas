import {
  AMENITIES_PAGE_FAQS,
  CURATED_NEARBY_PLACES,
} from "@/lib/amenities/arcadia-community";
import { formatCuratedAddress } from "@/lib/amenities/curated-place-utils";
import { agentInfo } from "@/lib/site-config";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function AmenitiesWrittenContent() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section aria-labelledby="dining-near-arcadia">
        <h2 id="dining-near-arcadia" className="text-2xl font-bold text-slate-900 mb-4">
          Dining &amp; Cafes Near Arcadia
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Arcadia buyers in Grand Park Village are minutes from{" "}
          <strong>Downtown Summerlin</strong> (1980 Festival Plaza Drive, Las Vegas, NV 89135),
          Summerlin West&apos;s open-air hub for restaurants, coffee, and casual dining. Additional
          options line West Charleston Boulevard and nearby Summerlin retail centers.
        </p>
      </section>

      <section aria-labelledby="parks-recreation-arcadia">
        <h2 id="parks-recreation-arcadia" className="text-2xl font-bold text-slate-900 mb-4">
          Parks &amp; Recreation
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The master-planned <strong>Grand Park</strong> in Summerlin West is developing in phases
          adjacent to Grand Park Village. <strong>Exploration Peak Park</strong> (9700 South Buffalo
          Drive, Las Vegas, NV 89178) is a Clark County regional park with trails and Exploration
          Peak. For regional outdoor recreation,{" "}
          <strong>Red Rock Canyon National Conservation Area</strong> (1000 Scenic Loop Drive, Blue
          Diamond, NV 89005) is a short drive west.
        </p>
      </section>

      <section aria-labelledby="golf-arcadia">
        <h2 id="golf-arcadia" className="text-2xl font-bold text-slate-900 mb-4">
          Golf Near Summerlin West
        </h2>
        <p className="text-slate-700 leading-relaxed">
          <strong>TPC Las Vegas</strong> (9851 Canyon Run Drive, Las Vegas, NV 89144) and other
          Summerlin-area courses are within a few miles of Arcadia, supporting an active outdoor
          lifestyle without a long commute.
        </p>
      </section>

      <section aria-labelledby="healthcare-arcadia">
        <h2 id="healthcare-arcadia" className="text-2xl font-bold text-slate-900 mb-4">
          Healthcare &amp; Pharmacies
        </h2>
        <p className="text-slate-700 leading-relaxed">
          <strong>Summerlin Hospital Medical Center</strong> (657 North Town Center Drive, Las Vegas,
          NV 89144) is a major full-service hospital serving Summerlin. Retail pharmacies are
          available at grocery and drugstore locations throughout Summerlin West and along Charleston
          Boulevard.
        </p>
      </section>

      <section aria-labelledby="shopping-arcadia">
        <h2 id="shopping-arcadia" className="text-2xl font-bold text-slate-900 mb-4">
          Shopping &amp; Daily Errands
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Beyond Downtown Summerlin, residents reach grocers such as Whole Foods Market at 2475 South
          Town Center Drive and Smith&apos;s Food and Drug at 9851 West Charleston Boulevard, plus
          big-box retail along Charleston Boulevard and in surrounding Summerlin villages.
        </p>
      </section>

      <section aria-labelledby="schools-arcadia">
        <h2 id="schools-arcadia" className="text-2xl font-bold text-slate-900 mb-4">
          Schools (Clark County)
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Arcadia is in the Clark County School District. Nearby public schools include{" "}
          <strong>Ernest Becker Middle School</strong> (9700 West Maule Avenue, Las Vegas, NV 89148)
          and <strong>Palo Verde High School</strong> (333 South Pavilion Center Drive, Las Vegas,
          NV 89144). Confirm school zoning for a specific lot with CCSD before you buy.
        </p>
      </section>

      <section aria-labelledby="commute-arcadia">
        <h2 id="commute-arcadia" className="text-2xl font-bold text-slate-900 mb-4">
          Commute &amp; Key Destinations (Approximate)
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Las Vegas Strip:</strong> roughly 18–22 miles; about 25–40 minutes by car in
            typical traffic (approximate).
          </li>
          <li>
            <strong>Harry Reid International Airport:</strong> roughly 20–25 miles; about 30–45
            minutes by car (approximate).
          </li>
          <li>
            <strong>Downtown Summerlin:</strong> a few miles east within Summerlin West for
            shopping and dining.
          </li>
          <li>
            <strong>Red Rock Canyon:</strong> short drive west on Charleston Boulevard / SR 159.
          </li>
        </ul>
      </section>

      <section aria-labelledby="featured-places-list">
        <h2 id="featured-places-list" className="text-2xl font-bold text-slate-900 mb-4">
          Featured Nearby Places
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {CURATED_NEARBY_PLACES.map((place) => (
            <li
              key={place.name}
              className="rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-sm"
            >
              <p className="font-semibold text-slate-900">{place.name}</p>
              <p className="text-slate-600 mt-1">{formatCuratedAddress(place)}</p>
              {place.note && <p className="text-slate-500 mt-2">{place.note}</p>}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="amenities-faq">
        <h2 id="amenities-faq" className="text-2xl font-bold text-slate-900 mb-6">
          Nearby Amenities FAQ
        </h2>
        <div className="space-y-4">
          {AMENITIES_PAGE_FAQS.map((faq) => (
            <div key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="rounded-2xl bg-blue-600 text-white p-8 md:p-10 text-center"
        aria-labelledby="amenities-cta"
      >
        <h2 id="amenities-cta" className="text-2xl md:text-3xl font-bold mb-3">
          Your Arcadia &amp; Summerlin West REALTOR®
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Dr. Jan Duffy helps buyers compare floor plans, register for new construction, and
          understand what daily life looks like around Grand Park Village.
        </p>
        <a
          href={agentInfo.phoneTel}
          className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors"
        >
          <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
          Call {agentInfo.phone}
        </a>
        <p className="mt-4 text-sm text-blue-200">
          {agentInfo.name} · License {agentInfo.license} · {agentInfo.brokerage}
        </p>
        <p className="mt-2 text-sm text-blue-200">
          <Link href="/contact" className="underline hover:text-white">
            Contact form
          </Link>
          {" · "}
          <a href={`mailto:${agentInfo.email}`} className="underline hover:text-white">
            {agentInfo.email}
          </a>
        </p>
      </section>
    </div>
  );
}
