import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Props = {
  to: string;
  image: string;
  country: string;
  visaTypes: string[];
  description: string;
  className?: string;
};

export function DestinationCard({ to, image, country, visaTypes, description, className = '' }: Props) {
  return (
    <Reveal className={className}>
      <Link
        to={to}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={`${country} destination`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
          <h3 className="absolute bottom-3 left-4 font-serif text-xl font-600 text-white drop-shadow">
            {country}
          </h3>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex flex-wrap gap-1.5">
            {visaTypes.slice(0, 3).map((v) => (
              <span key={v} className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-medium text-navy-700">
                {v}
              </span>
            ))}
          </div>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">{description}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors group-hover:text-gold-600">
            Explore
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
