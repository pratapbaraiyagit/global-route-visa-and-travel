import { Link } from 'react-router-dom';

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-navy-300">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {item.to && !isLast ? (
                <Link to={item.to} className="hover:text-gold-400 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-navy-700 font-medium' : ''}>{item.label}</span>
              )}
              {!isLast && <span className="text-navy-200">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
