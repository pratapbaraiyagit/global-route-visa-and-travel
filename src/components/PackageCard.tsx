import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Tag } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Props = {
  to: string;
  image: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  highlights: string[];
  className?: string;
};

export function PackageCard({ to, image, title, destination, duration, price, highlights, className = '' }: Props) {
  return (
    <Reveal className={className}>
      <Link
        to={to}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={`${title} — ${destination}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
          <span className="absolute right-3 top-3 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-navy-950 shadow">
            <Tag className="mr-1 inline h-3 w-3" />From {price}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-3 text-xs font-medium text-navy-500">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-gold-500" /> {destination}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-gold-500" /> {duration}
            </span>
          </div>
          <h3 className="mt-2 font-serif text-lg font-600 text-navy-900">{title}</h3>
          <ul className="mt-3 flex-1 space-y-1.5 text-sm text-navy-600">
            {highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                {h}
              </li>
            ))}
          </ul>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors group-hover:text-gold-600">
            View Package
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
