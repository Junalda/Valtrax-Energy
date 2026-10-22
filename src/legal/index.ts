import type { Lang, LegalPageKey } from '../i18n';
import type { LegalDoc } from './types';
import { legalEn } from './en';
import { legalNl } from './nl';

const docs: Record<Lang, Record<LegalPageKey, LegalDoc>> = { en: legalEn, nl: legalNl };

export function legalDoc(page: LegalPageKey, lang: Lang): LegalDoc {
  return docs[lang][page];
}

export { countDrafts } from './types';
export type { LegalDoc, Block, Section } from './types';
