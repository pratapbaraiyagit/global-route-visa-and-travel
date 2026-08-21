import { type ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  image: string;
  imageAlt: string;
  children?: ReactNode;
  align?: 'left' | 'center';
  size?: 'sm' | 'md' | 'lg';
};

export function HeroSection({ eyebrow, title, description, image, imageAlt, children, align = 'left', size = 'md' }: Props) {
  const pad = size === 'lg' ? 'pt-16 pb-20 lg:pt-24 lg:pb-28' : size === 'sm' ? 'pt-12 pb-14 lg:pt-16 lg:pb-18' : 'pt-14 pb-16 lg:pt-20 lg:pb-24';
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0">
        <img src={image} alt={imageAlt} className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/80 to-navy-900/60" />
      </div>
      <div className={`relative container-px ${pad}`}>
        <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
          {eyebrow && (
            <Reveal>
              <span className="eyebrow text-gold-300">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal delay={80}>
            <h1 className="mt-3 text-4xl font-600 leading-[1.1] sm:text-5xl lg:text-6xl">{title}</h1>
          </Reveal>
          {description && (
            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-200">{description}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={240}>
              <div className={`mt-8 flex flex-col gap-3 sm:flex-row ${align === 'center' ? 'justify-center' : ''}`}>
                {children}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
