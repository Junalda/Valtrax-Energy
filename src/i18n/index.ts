import { en, type Dictionary } from './en';
import { nl } from './nl';

export const languages = ['en', 'nl'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

const dictionaries: Record<Lang, Dictionary> = { en, nl };

export function t(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Logical pages that exist in every language. */
export type PageKey = SitePageKey | LegalPageKey;
/** Content pages of the multi-page site; 'start' is the complete one-page overview. */
export type SitePageKey = 'home' | 'start' | 'about' | 'products' | 'process' | 'contact';
export type ContentPageKey = Exclude<SitePageKey, 'home' | 'start'>;
export const contentPages: ContentPageKey[] = ['about', 'products', 'process', 'contact'];
export type LegalPageKey = 'terms' | 'privacy' | 'cookies';
export const legalPages: LegalPageKey[] = ['terms', 'privacy', 'cookies'];

const paths: Record<PageKey, Record<Lang, string>> = {
  home: { en: '/', nl: '/nl/' },
  start: { en: '/start/', nl: '/nl/start/' },
  about: { en: '/about/', nl: '/nl/about/' },
  products: { en: '/products/', nl: '/nl/products/' },
  process: { en: '/process/', nl: '/nl/process/' },
  contact: { en: '/contact/', nl: '/nl/contact/' },
  terms: { en: '/terms/', nl: '/nl/terms/' },
  privacy: { en: '/privacy/', nl: '/nl/privacy/' },
  cookies: { en: '/cookies/', nl: '/nl/cookies/' },
};

export function pathFor(page: PageKey, lang: Lang): string {
  return paths[page][lang];
}

export function allPages(): PageKey[] {
  return Object.keys(paths) as PageKey[];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'nl' : 'en';
}

export type { Dictionary };
