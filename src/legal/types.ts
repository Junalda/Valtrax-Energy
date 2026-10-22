/**
 * Content model for the legal pages (terms, privacy, cookies).
 *
 * Inline syntax inside any text string (rendered by LegalText.astro):
 *   {company} {brand} {address} {kvk} {vat} {website}  company facts from src/config/site.ts
 *   {email}                                             mailto link to the public e-mail address
 *   {link:terms} {link:privacy} {link:cookies}          link to that page in the current language
 *   {ap}                                                link to the Dutch Data Protection Authority
 *   [[...]]                                             DRAFT placeholder: information or a decision
 *                                                       still needed before publication
 *
 * A page containing any [[...]] placeholder is a draft: it shows a draft banner and the
 * production (indexable) build refuses to publish it. See README "Legal pages".
 */
export type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; caption: string; head: string[]; rows: string[][] }
  | { type: 'company' };

export interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

export interface LegalDoc {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  /** Actual revision date of the text (ISO yyyy-mm-dd). */
  updated: string;
  sections: Section[];
}

/** Number of unresolved [[...]] placeholders in a document. */
export function countDrafts(doc: LegalDoc): number {
  return (JSON.stringify(doc).match(/\[\[/g) ?? []).length;
}
