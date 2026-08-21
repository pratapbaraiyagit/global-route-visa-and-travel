import { Link } from 'react-router-dom';
import { ArrowRight, MessagesSquare } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Props = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export function CTASection({
  title = 'Need Help With Your Application?',
  description = 'Talk to a visa consultant today. The first consultation is free, with no obligation to proceed.',
  primaryLabel = 'Talk to a Visa Consultant',
  primaryTo = '/free-consultation',
  secondaryLabel = 'WhatsApp Us',
  secondaryTo = '/contact',
}: Props) {
  return (
    <section className="container-px py-16 lg:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 bg-[length:200%_200%] px-6 py-12 text-center animate-gradient sm:px-12 lg:py-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brand-sky/10 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow text-gold-300">We are here to help</span>
            <h2 className="mt-3 text-3xl font-600 text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-navy-200">{description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to={primaryTo} className="btn-primary w-full sm:w-auto">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to={secondaryTo} className="btn-ghost-light w-full sm:w-auto">
                <MessagesSquare className="h-4 w-4" />
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
