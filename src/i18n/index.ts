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
export type PageKey = 'home' | 'privacy';

const paths: Record<PageKey, Record<Lang, string>> = {
  home: { en: '/', nl: '/nl/' },
  privacy: { en: '/privacy/', nl: '/nl/privacy/' },
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
