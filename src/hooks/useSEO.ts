import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description?: string;
  image?: string;
  path?: string;
};

const BASE_TITLE = 'GlobalRoute Visa & Travel';

export function useSEO({ title, description, image, path }: SEOProps) {
  useEffect(() => {
    const fullTitle = title === BASE_TITLE ? title : `${title} — ${BASE_TITLE}`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      setMeta('description', description);
      setMeta('og:description', description, 'property');
      setMeta('twitter:description', description);
    }
    setMeta('og:title', fullTitle, 'property');
    setMeta('twitter:title', fullTitle);
    if (image) {
      setMeta('og:image', image, 'property');
      setMeta('twitter:image', image);
    }
    setMeta('og:type', 'website', 'property');
    if (path) setMeta('og:url', `${window.location.origin}${path}`, 'property');
  }, [title, description, image, path]);
}
