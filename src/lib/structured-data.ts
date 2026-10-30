import { site } from '../config/site';
import { t, pathFor, type Lang, type PageKey } from '../i18n';
import { legalDoc } from '../legal';

/**
 * Schema.org graph. Only verified, approved facts are included. Stable @id values let
 * search engines connect the Organization, WebSite and WebPage entities across languages.
 * FAQPage text is taken from the same dictionary entries that render the visible FAQ.
 */
export function buildJsonLd(opts: { origin: string; lang: Lang; page: PageKey }) {
  const { origin, lang, page } = opts;
  const dict = t(lang);
  const orgId = `${origin}/#organization`;
  const siteId = `${origin}/#website`;
  const pageUrl = `${origin}${pathFor(page, lang)}`;
  const pageId = `${pageUrl}#webpage`;

  const address: Record<string, string> = {
    '@type': 'PostalAddress',
    addressLocality: site.registeredLocality,
    addressCountry: site.country.code,
  };
  if (site.publicContact.streetAddress) address.streetAddress = site.publicContact.streetAddress;
  if (site.publicContact.postalCode) address.postalCode = site.publicContact.postalCode;

  const organization: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': orgId,
    name: site.brand,
    legalName: site.legalName,
    url: `${origin}/`,
    description: t('en').about.fact,
    address,
    vatID: site.vat,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'KvK (Netherlands Chamber of Commerce)',
      value: site.kvk,
    },
    areaServed: [
      { '@type': 'Place', name: 'Amsterdam-Rotterdam-Antwerp (ARA)' },
      { '@type': 'Place', name: 'Northwest Europe' },
    ],
    knowsAbout: [
      'Commercial intermediation in physical energy',
      'Physical energy trading',
      'Petroleum procurement',
      'Counterparty qualification',
      ...t('en').products.items.filter((p) => p.key !== 'other').map((p) => p.name),
      'ARA market',
    ],
    email: site.emails.general,
    contactPoint: (['general', 'trading', 'finance'] as const).map((role) => ({
      '@type': 'ContactPoint',
      contactType: t('en').contact.direct[role],
      email: site.emails[role],
    })),
  };
  organization.logo = {
    '@type': 'ImageObject',
    url: `${origin}${site.logo.full.src}`,
    width: site.logo.full.width,
    height: site.logo.full.height,
  };

  const webPage: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': pageId,
    url: pageUrl,
    name: page === 'home' ? dict.meta.title : legalDoc(page, lang).metaTitle,
    description: page === 'home' ? dict.meta.description : legalDoc(page, lang).metaDescription,
    inLanguage: lang,
    isPartOf: { '@id': siteId },
    about: { '@id': orgId },
    publisher: { '@id': orgId },
  };

  const graph: Record<string, unknown>[] = [
    organization,
    {
      '@type': 'WebSite',
      '@id': siteId,
      url: `${origin}/`,
      name: site.brand,
      inLanguage: ['en', 'nl'],
      publisher: { '@id': orgId },
    },
    webPage,
  ];

  if (page === 'home') {
    webPage.primaryImageOfPage = { '@type': 'ImageObject', url: `${origin}/og/og-${lang}.png` };
    graph.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      inLanguage: lang,
      isPartOf: { '@id': pageId },
      mainEntity: dict.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

/** Serialise for a <script type="application/ld+json"> block, safe against `</script>` breakout. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
