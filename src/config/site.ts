/**
 * Verified, publicly approved company facts. Everything rendered on the site and in
 * structured data about the company's identity comes from here.
 *
 * Facts that are still pending owner approval (public e-mail, street address, final
 * domain) are deliberately NOT stored here — see docs/OWNER-REVIEW.md. Add them only
 * once approved; components render them automatically when present.
 */
export const site = {
  brand: 'Valtrax Energy',
  legalName: 'Northbridge Trading B.V.',
  country: { code: 'NL', en: 'The Netherlands', nl: 'Nederland' },
  registeredLocality: 'Zwijndrecht',
  kvk: '42053415',
  /** Origin is set via SITE_URL in astro.config.mjs; this is read from Astro.site at render time. */
  indexable: __SITE_INDEXABLE__,
  /**
   * Public contact details. Leave `undefined` until approved for publication.
   * Candidates from the Client Information Sheet are listed in docs/OWNER-REVIEW.md.
   */
  publicContact: {
    email: undefined as string | undefined,
    streetAddress: undefined as string | undefined,
    postalCode: undefined as string | undefined,
  },
  /** Logo: set to a file under /public once the supplied logo is approved (see README). */
  logo: undefined as { src: string; width: number; height: number } | undefined,
} as const;

/** Product options — must match the public product section (company profile list). */
export const productKeys = ['en590', 'middle-distillates', 'jet-a1', 'lng', 'other'] as const;
export type ProductKey = (typeof productKeys)[number];

export const enquiryTypes = ['buyer', 'supplier', 'other'] as const;
export type EnquiryType = (typeof enquiryTypes)[number];

export const deliveryBases = ['fob', 'cif', 'terminal', 'open'] as const;
export type DeliveryBasis = (typeof deliveryBases)[number];

export const volumeUnits = ['mt', 'm3', 'bbl', 'mmbtu', 'other'] as const;
export type VolumeUnit = (typeof volumeUnits)[number];

export const sectionIds = ['about', 'expertise', 'products', 'markets', 'process', 'contact'] as const;
