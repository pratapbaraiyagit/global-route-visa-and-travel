import { Star, Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Props = {
  name: string;
  country: string;
  service: string;
  rating: number;
  review: string;
  className?: string;
};

export function TestimonialCard({ name, country, service, rating, review, className = '' }: Props) {
  return (
    <Reveal className={className}>
      <figure className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
        <Quote className="h-7 w-7 text-gold-300" />
        <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
          {review}
        </blockquote>
        <div className="mt-4 flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? 'fill-gold-400 text-gold-400' : 'text-navy-200'}`}
            />
          ))}
        </div>
        <figcaption className="mt-3 border-t border-navy-100 pt-3">
          <p className="text-sm font-600 text-navy-900">{name}</p>
          <p className="text-xs text-navy-500">
            {country} · {service}
          </p>
        </figcaption>
      </figure>
    </Reveal>
  );
}
