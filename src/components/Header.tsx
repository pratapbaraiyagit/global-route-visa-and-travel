import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Globe2, Menu, X, Phone } from 'lucide-react';
import { mainNav, siteConfig } from '@/config/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-soft' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <div className="container-px">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5" aria-label={siteConfig.name}>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-800 text-gold-400 lg:h-10 lg:w-10">
              <Globe2 className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={2.2} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-lg font-600 tracking-tight text-navy-900 lg:text-xl">
                GlobalRoute
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-600 lg:text-[11px]">
                Visa & Travel
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {mainNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-navy-900' : 'text-navy-600 hover:text-navy-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gold-400" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900"
            >
              <Phone className="h-4 w-4 text-gold-500" />
              {siteConfig.phone}
            </a>
            <Link to="/free-consultation" className="btn-primary">
              Get Free Consultation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 transition hover:bg-navy-50 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 top-16 z-30 bg-navy-950/40 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-16 z-40 origin-top bg-white shadow-lift transition-all duration-300 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="container-px py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {mainNav.map((item, i) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  style={{ '--i': i } as React.CSSProperties}
                  className={({ isActive }) =>
                    `stagger flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-navy-50 text-navy-900'
                        : 'text-navy-700 hover:bg-navy-50/60 hover:translate-x-1'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3 border-t border-navy-100 pt-4">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-2 px-4 text-sm font-medium text-navy-700"
              >
                <Phone className="h-4 w-4 text-gold-500" />
                {siteConfig.phone}
              </a>
              <Link to="/free-consultation" className="btn-primary w-full">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
