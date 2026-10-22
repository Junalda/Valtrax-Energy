/**
 * Company facts used on the site, in the legal pages and in structured data.
 * Single source of truth: change company details here only.
 * Address, e-mail and VAT number were supplied for publication with the legal pages.
 */
export const site = {
  brand: 'Valtrax Energy',
  legalName: 'Northbridge Trading B.V.',
  country: { code: 'NL', en: 'The Netherlands', nl: 'Nederland' },
  registeredLocality: 'Zwijndrecht',
  kvk: '42053415',
  vat: 'NL869493334B01',
  /** Public website address as stated in the legal pages (deployment origin comes from SITE_URL). */
  website: 'https://valtraxenergy.com',
  /** Origin is set via SITE_URL in astro.config.mjs; this is read from Astro.site at render time. */
  indexable: __SITE_INDEXABLE__,
  /** Public contact details (footer, legal pages, structured data). */
  publicContact: {
    email: 'Thom@valtraxenergy.com' as string | undefined,
    streetAddress: 'Stationsweg 41' as string | undefined,
    postalCode: '3331 LR' as string | undefined,
  },
  /**
   * Logo assets generated from brand/valtrax-logo-original.png by tools/build_logo_assets.py.
   * Dimensions are the intrinsic pixel sizes (used for width/height attributes).
   */
  logo: {
    /** Horizontal lockup for light backgrounds (header). */
    lockup: { src: '/brand/valtrax-lockup.webp', width: 750, height: 168 },
    /** Same lockup with navy reversed to white, for navy backgrounds (footer). */
    lockupLight: { src: '/brand/valtrax-lockup-light.webp', width: 750, height: 168 },
    /** Lockups including the OIL TRADING tagline, used from tablet width upwards. */
    lockupTagline: { src: '/brand/valtrax-lockup-tagline.webp', width: 994, height: 192 },
    lockupTaglineLight: { src: '/brand/valtrax-lockup-tagline-light.webp', width: 994, height: 192 },
    /** Full stacked logo as supplied (structured data). */
    full: { src: '/brand/valtrax-logo.png', width: 960, height: 620 },
  },
} as const;

/** Product options. Must match the public product section (company profile list). */
export const productKeys = ['en590', 'middle-distillates', 'jet-a1', 'lng', 'other'] as const;
export type ProductKey = (typeof productKeys)[number];

export const enquiryTypes = ['buyer', 'supplier', 'other'] as const;
export type EnquiryType = (typeof enquiryTypes)[number];

export const deliveryBases = ['fob', 'cif', 'terminal', 'open'] as const;
export type DeliveryBasis = (typeof deliveryBases)[number];

export const volumeUnits = ['mt', 'm3', 'bbl', 'mmbtu', 'other'] as const;
export type VolumeUnit = (typeof volumeUnits)[number];

export const sectionIds = ['about', 'expertise', 'products', 'markets', 'process', 'contact'] as const;
