import { Link } from 'react-router-dom';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Props = {
  to: string;
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function ServiceCard({ to, icon: Icon, title, description, className = '' }: Props) {
  return (
    <Reveal className={className}>
      <Link
        to={to}
        className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-200 hover:shadow-card"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-gold-100 group-hover:text-gold-700">
          <Icon className="h-6 w-6" strokeWidth={1.8} />
        </span>
        <h3 className="mt-4 text-lg font-600 text-navy-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors group-hover:text-gold-600">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  );
}
