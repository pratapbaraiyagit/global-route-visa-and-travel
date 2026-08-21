import { type ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = 'center', light = false, className = '' }: Props) {
  return (
    <Reveal className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <span className={light ? 'eyebrow text-gold-300' : 'eyebrow'}>
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 text-3xl font-600 leading-tight sm:text-4xl ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-navy-200' : 'text-navy-600'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
