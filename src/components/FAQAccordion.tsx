import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Item = { q: string; a: string };

export function FAQAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-navy-50/50"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-navy-900 sm:text-base">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-gold-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-navy-600">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
