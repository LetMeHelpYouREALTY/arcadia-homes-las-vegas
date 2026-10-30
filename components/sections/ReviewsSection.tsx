"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";

export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
  date?: string;
}

// Real Google reviews only (FTC 16 CFR 465): first name + last initial, no stock photos.
// Source: Google Business Profile "Centennial Hills Real Estate | Homes by Dr. Jan Duffy".
export const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Janis B.",
    location: "Google review · Centennial Hills",
    rating: 5,
    text: "She is always ready to help you with your property. Five stars. Thank you Jan Duffy!",
    date: "2024-10-19",
  },
];

// Aggregate rating stats
export const aggregateRating = {
  ratingValue: 5.0,
  reviewCount: 50,
  bestRating: 5,
  worstRating: 1,
};

interface ReviewsSectionProps {
  /** Custom reviews to display */
  reviews?: Review[];
  /** Custom title */
  title?: string;
  /** Custom subtitle */
  subtitle?: string;
  /** Google Business Profile URL */
  googleReviewsUrl?: string;
  /** Custom class name */
  className?: string;
}

export default function ReviewsSection({
  reviews = defaultReviews,
  title = "What Our Clients Say",
  subtitle = "Real reviews from Dr. Jan Duffy's Google Business profiles",
  googleReviewsUrl = "https://www.google.com/maps/search/?api=1&query=Centennial+Hills+Real+Estate+Homes+by+Dr.+Jan+Duffy",
  className = "",
}: ReviewsSectionProps) {
  return (
    <section className={`py-16 md:py-24 bg-slate-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
          {/* Aggregate Rating Display */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(aggregateRating.ratingValue)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-slate-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-slate-900">
              {aggregateRating.ratingValue.toFixed(1)}
            </span>
            <span className="text-slate-600">
              average client rating
            </span>
          </div>
        </div>

        <div className={`grid grid-cols-1 gap-8 mx-auto ${reviews.length === 1 ? "max-w-xl" : reviews.length === 2 ? "md:grid-cols-2 max-w-4xl" : "md:grid-cols-3 max-w-6xl"}`}>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  {review.image ? (
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-700 text-xl font-semibold">{review.name[0]}</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900" itemProp="author">
                    {review.name}
                  </h3>
                  <p className="text-sm text-slate-600">{review.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={review.rating.toString()} />
                <meta itemProp="bestRating" content="5" />
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300"
                    }`}
                  />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-100" />
                <p className="text-slate-700 relative z-10 pl-4" itemProp="reviewBody">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            See Dr. Jan's reviews on Google
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

/**
 * Helper to convert reviews to schema format for ReviewSchema component
 * Use with: <ReviewSchema reviews={getReviewSchemaData(reviews)} aggregateRating={aggregateRating} />
 */
export function getReviewSchemaData(reviews: Review[]) {
  return reviews.map((review) => ({
    author: review.name,
    rating: review.rating,
    text: review.text,
    date: review.date,
  }));
}
