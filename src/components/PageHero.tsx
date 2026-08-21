import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Crumb = { label: string; to?: string };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  image: string;
  imageAlt: string;
  breadcrumbs: Crumb[];
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, image, imageAlt, breadcrumbs, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0">
        <img src={image} alt={imageAlt} className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/92 via-navy-900/85 to-navy-900/65" />
      </div>
      <div className="relative container-px pt-10 pb-12 lg:pt-14 lg:pb-16">
        <Reveal>
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex flex-wrap items-center gap-1.5 text-navy-300">
              {breadcrumbs.map((c, i) => {
                const last = i === breadcrumbs.length - 1;
                return (
                  <li key={i} className="flex items-center gap-1.5">
                    {c.to && !last ? (
                      <Link to={c.to} className="hover:text-gold-300">{c.label}</Link>
                ) : (
                  <span className={last ? 'text-white' : ''}>{c.label}</span>
                )}
                    {!last && <ChevronRight className="h-3.5 w-3.5 text-navy-400" />}
                  </li>
                );
              })}
            </ol>
          </nav>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-6 max-w-2xl">
            {eyebrow && <span className="eyebrow text-gold-300">{eyebrow}</span>}
            <h1 className="mt-3 text-4xl font-600 leading-[1.1] sm:text-5xl">{title}</h1>
            {description && <p className="mt-4 max-w-xl text-lg leading-relaxed text-navy-200">{description}</p>}
            {children && <div className="mt-7 flex flex-col gap-3 sm:flex-row">{children}</div>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
