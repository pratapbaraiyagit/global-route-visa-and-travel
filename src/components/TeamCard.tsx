import { type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Props = {
  name: string;
  role: string;
  image: string;
  bio: string;
  icon?: LucideIcon;
  className?: string;
};

export function TeamCard({ name, role, image, bio, className = '' }: Props) {
  return (
    <Reveal className={className}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-serif text-lg font-600 text-navy-900">{name}</h3>
          <p className="text-sm font-medium text-gold-600">{role}</p>
          <p className="mt-2 text-sm leading-relaxed text-navy-600">{bio}</p>
        </div>
      </article>
    </Reveal>
  );
}
