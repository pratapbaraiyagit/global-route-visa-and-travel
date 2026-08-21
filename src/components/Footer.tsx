import { Link } from 'react-router-dom';
import { Globe2, Mail, MapPin, Phone, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { footerNav, siteConfig } from '@/config/site';

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-px py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 text-gold-400">
                <Globe2 className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-600 text-white">GlobalRoute</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-400">
                  Visa & Travel
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
              {siteConfig.tagline} We provide expert visa consultancy, travel planning and transport
              solutions for individuals, families and businesses.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-3 hover:text-white">
                <Phone className="h-4 w-4 text-gold-400" /> {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="h-4 w-4 text-gold-400" /> {siteConfig.email}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> {siteConfig.addressLine}
              </p>
              <p className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold-400" /> {siteConfig.hours}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">{Object.entries(footerNav).map(([heading, links], idx) => (<div key={heading} style={{ '--i': idx } as React.CSSProperties} className="stagger"><h3 className="text-sm font-semibold uppercase tracking-wider text-white">{heading}</h3><ul className="mt-4 space-y-2.5 text-sm">{links.map((link) => (<li key={link.label}><Link to={link.to} className="text-navy-300 transition-colors duration-200 hover:text-gold-400 hover:translate-x-1 inline-block">{link.label}</Link></li>))}</ul></div>))}</div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-6 sm:flex-row">
          <p className="text-xs text-navy-400">
            © {year} {siteConfig.name}. Demo website for portfolio purposes. All content is fictional.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-navy-200 transition hover:bg-gold-400 hover:text-navy-950"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-navy-400">
          <Link to="/privacy-policy" className="hover:text-gold-400">Privacy Policy</Link>
          <span className="text-navy-700">•</span>
          <Link to="/terms" className="hover:text-gold-400">Terms & Conditions</Link>
          <span className="text-navy-700">•</span>
          <Link to="/disclaimer" className="hover:text-gold-400">Disclaimer</Link>
          <span className="text-navy-700">•</span>
          <Link to="/contact" className="inline-flex items-center gap-1 hover:text-gold-400">
            Contact <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
