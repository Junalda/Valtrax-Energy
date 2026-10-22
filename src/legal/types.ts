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
 * Unresolved items are NOT written into public text. They go into `review` (internal, never
 * rendered). A document with review items or [[...]] markers blocks the production
 * (indexable) build. See README "Legal pages".
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
  /** Internal publication blockers (legal review, provider checks). Never rendered. */
  review: string[];
}

/** Number of visible [[...]] placeholders in a document's public text. */
export function countDrafts(doc: LegalDoc): number {
  const texts = doc.sections.flatMap((section) =>
    section.blocks.flatMap((block) =>
      block.type === 'p' ? [block.text] : block.type === 'list' ? block.items : block.type === 'table' ? block.rows.flat() : [],
    ),
  );
  return texts.reduce((n, text) => n + (text.match(/\[\[/g) ?? []).length, 0);
}

/** Everything that must be resolved before the document may be published. */
export function publicationBlockers(doc: LegalDoc): number {
  return countDrafts(doc) + doc.review.length;
}
