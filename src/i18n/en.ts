/**
 * English copy (primary language). The Dutch file (nl.ts) must implement the same shape;
 * TypeScript enforces this through the `Dictionary` type.
 *
 * Copy rules (client answers, 2026-10): primary focus is commercial intermediation; Valtrax
 * may also take part in direct purchase and resale, including back-to-back, where agreed per
 * transaction. Never claim owned inventory, terminals or refineries, guaranteed availability
 * or delivery, producer/mandate/licensed status, or automated counterparty screening.
 */

/** Confirmed product list; order and keys follow productKeys in src/config/site.ts. */
const products = [
  {
    key: 'en590',
    name: 'EN590 10 PPM / ULSD',
    text: 'Diesel to the European EN 590 standard with a maximum sulphur content of 10 ppm (ultra-low sulphur diesel), for road transport, industrial and distribution use.',
  },
  {
    key: 'jet-a1',
    name: 'Jet A-1',
    text: 'Kerosene-type aviation turbine fuel for aviation fuel buyers and distributors.',
  },
  {
    key: 'lpfo',
    name: 'LPFO (Low Pour Fuel Oil)',
    text: 'Residual fuel oil with a low pour point, for industrial and energy-sector buyers.',
  },
  {
    key: 'd6',
    name: 'D6 Fuel Oil',
    text: 'Heavy residual fuel oil, handled against the specification agreed for each transaction.',
  },
  {
    key: 'lpg',
    name: 'LPG',
    text: 'Liquefied petroleum gas, such as propane, butane and mixtures, depending on specification, volume and delivery point.',
  },
  {
    key: 'lng',
    name: 'LNG / natural gas',
    text: 'Liquefied natural gas and natural gas, depending on delivery point, volume profile and contract structure.',
  },
  {
    key: 'other',
    name: 'Other refined petroleum products and middle distillates',
    text: 'Further refined petroleum products and middle distillates, such as gasoil grades, considered case by case for a defined requirement.',
  },
];
const productNames = products.map((p) => p.name);
const listProducts = `${productNames.slice(0, -1).join(', ')} and ${productNames.at(-1)!.toLowerCase()}`;

export const en = {
  lang: 'en',
  locale: 'en_GB',
  meta: {
    title: 'Valtrax Energy | Physical Energy Sourcing & Commercial Intermediation',
    description:
      'Valtrax Energy connects professional buyers and sellers of physical energy products such as EN590 10 PPM, Jet A-1, fuel oil, LPG and LNG. Netherlands-based, with a focus on the ARA market.',
    ogAlt: 'Valtrax Energy: physical energy sourcing and commercial intermediation',
  },
  skipLink: 'Skip to main content',
  nav: {
    label: 'Main navigation',
    about: 'About',
    expertise: 'Expertise',
    products: 'Products',
    markets: 'Markets',
    process: 'Process',
    contact: 'Contact',
    cta: 'Submit an enquiry',
    menuOpen: 'Menu',
    menuClose: 'Close',
    menuLabel: 'Open navigation menu',
    home: 'Valtrax Energy, home',
  },
  langSwitch: {
    label: 'Language',
    current: 'English (current language)',
    other: 'Nederlands',
    otherShort: 'NL',
    currentShort: 'EN',
  },
  hero: {
    eyebrow: 'Commercial intermediation in physical energy',
    title: 'Physical Energy Sourcing & Commercial Intermediation',
    subtitle: 'Connecting Qualified Buyers with Relevant Physical Supply.',
    lead:
      'Valtrax Energy connects qualified buyers and suppliers across international energy markets through disciplined sourcing, counterparty qualification and professional commercial coordination.',
    focus:
      'We focus on refined petroleum products and gas, helping bring suitable counterparties together and facilitating structured commercial discussions.',
    role:
      'Our primary focus is commercial intermediation. Where agreed for a specific transaction, we may also buy and resell products ourselves, including on a back-to-back basis.',
    primary: 'Discuss your requirements',
    secondary: 'Explore our expertise',
    strap: ['Netherlands-based', 'ARA market focus', 'International reach'],
    chartLabel: 'Rotterdam · ARA',
    chartCaption: 'Market focus: Amsterdam–Rotterdam–Antwerp and Northwest Europe',
  },
  about: {
    eyebrow: 'About',
    title: 'Connecting professional buyers and sellers of physical energy',
    body: [
      'Valtrax Energy connects professional buyers and sellers of physical energy products. Our primary focus is commercial intermediation: we take a defined requirement from a buyer or procurement team, identify supply that is relevant to it and help both sides arrive at a workable commercial basis. Depending on the transaction and the agreed contractual arrangements, we may also participate directly in the purchase and resale of products, including back-to-back transactions.',
      'Our counterparties include procurement teams, physical commodity traders, fuel distributors and importers, industrial and maritime fuel consumers, and suppliers, allocation holders and refinery-side counterparties.',
      'The value we add lies in preparation and discipline: clarifying specifications and terms early, qualifying counterparties before they are introduced, and keeping the process coordinated so that time is spent on opportunities that can realistically proceed.',
    ],
    factTitle: 'In brief',
    fact:
      'Valtrax Energy is a Netherlands-based company that connects professional buyers and sellers of physical energy products. Operating under Northbridge Trading B.V., its primary focus is commercial intermediation. Depending on the transaction and the agreed contractual arrangements, it may also participate directly in the purchase and resale of products, including back-to-back transactions. Its market focus is the ARA region and international trading hubs.',
    facts: [
      { term: 'Trading name', value: 'Valtrax Energy' },
      { term: 'Legal entity', value: 'Northbridge Trading B.V.' },
      { term: 'Registered in', value: 'Zwijndrecht, the Netherlands' },
      { term: 'Chamber of Commerce (KvK)', value: '42053415' },
      { term: 'Role', value: 'Primarily commercial intermediation; direct purchase and resale, including back-to-back, where agreed per transaction' },
    ],
    audienceTitle: 'Who we work with',
    audiences: [
      'Procurement teams and qualified buyers',
      'Physical commodity traders',
      'Fuel distributors and importers',
      'Industrial and maritime fuel consumers',
      'Suppliers, allocation holders and refinery-side counterparties',
    ],
  },
  expertise: {
    eyebrow: 'Expertise',
    title: 'What the work involves',
    intro:
      'Intermediation is only useful when it is specific. These are the activities behind each part of our role.',
    items: [
      {
        title: 'Physical energy sourcing',
        text: 'Matching a defined requirement with supply that fits it.',
        points: [
          'Translating a requirement into product specification, quantity, timing and delivery basis',
          'Approaching relevant supply-side counterparties for the product and route',
          'Comparing indicative offers against the original requirement',
        ],
      },
      {
        title: 'Counterparty qualification',
        text: 'Establishing who is on the other side before parties are introduced.',
        points: [
          'Verifying company identity and registration details',
          'Reviewing the stated role in the chain: end-user, distributor, trader or supplier',
          'Checking that the requested procedure and documentation are consistent',
        ],
      },
      {
        title: 'Commercial alignment',
        text: 'Bringing buyer and seller expectations onto the same commercial basis.',
        points: [
          'Clarifying delivery terms, inspection, quantity tolerances and payment structure',
          'Identifying open points between the parties at an early stage',
          'Supporting the exchange of offers and draft terms',
        ],
      },
      {
        title: 'Transaction coordination',
        text: 'Keeping the agreed steps moving between the parties involved.',
        points: [
          'Coordinating documentation flow and the sequence of agreed steps',
          'Maintaining communication between buyer, seller and their representatives',
          'Following up on open actions until the parties conclude or decide not to proceed',
        ],
      },
      {
        title: 'Market intelligence',
        text: 'Context that helps counterparties make informed decisions.',
        points: [
          'Following product flows and developments in the ARA region and Northwest Europe',
          'Observing activity at international hubs relevant to a requirement',
          'Sharing practical observations on logistics and delivery options',
        ],
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Product focus',
    intro:
      'We work on physical energy products for which a professional buyer or seller has a defined requirement.',
    items: products,
    dependsTitle: 'What sourcing depends on',
    dependsIntro: 'Whether and how a product can be sourced is assessed for each requirement, based on:',
    depends: [
      'Product specification',
      'Volume and delivery schedule',
      'Origin',
      'Destination',
      'Delivery basis',
      'Counterparty qualification',
    ],
    note:
      'Listing a product does not mean that it is in stock or available. We do not publish prices or availability: specifications, quantities, availability, delivery and commercial terms are confirmed separately for each transaction.',
  },
  markets: {
    eyebrow: 'Markets & logistics',
    title: 'Rooted in ARA, active across international hubs',
    intro:
      'Our main focus is the Amsterdam–Rotterdam–Antwerp (ARA) region and Northwest Europe, one of the world’s principal hubs for refined products. We also look at international opportunities where a requirement calls for them.',
    primaryTitle: 'ARA / Rotterdam and Northwest Europe',
    primaryText:
      'The Port of Rotterdam and the wider ARA cluster combine refining, import, storage and blending activity with inland and coastal distribution across Northwest Europe. Our proximity to this market informs how we assess supply, logistics and delivery options.',
    hubsTitle: 'International hubs',
    hubsIntro: 'Areas of market activity and network focus:',
    hubs: [
      { name: 'Houston', region: 'US Gulf Coast', coords: '29.76° N · 95.37° W' },
      { name: 'Antwerp', region: 'ARA, Belgium', coords: '51.22° N · 4.40° E' },
      { name: 'Jurong', region: 'Singapore', coords: '1.27° N · 103.70° E' },
      { name: 'Fujairah', region: 'United Arab Emirates', coords: '25.12° N · 56.33° E' },
    ],
    hubsNote:
      'These are markets we follow and work in. They are not office locations, and Valtrax Energy does not own terminals, storage or vessels at these or any other locations.',
    basisTitle: 'Delivery basis',
    basisIntro:
      'Transaction structures depend on the commodity, the supplier’s procedure and the commercial terms agreed between the parties. They may include:',
    basis: [
      { term: 'FOB', text: 'Free on board: the buyer arranges shipment from the agreed loading port.' },
      { term: 'CIF', text: 'Cost, insurance and freight: the seller arranges shipment and insurance to the destination port.' },
      { term: 'Terminal-based', text: 'Arrangements within a third-party terminal, such as in-tank or ex-tank transfers.' },
    ],
  },
  process: {
    eyebrow: 'Process',
    title: 'How an opportunity is handled',
    intro:
      'Every opportunity is assessed on its own merits. The stages below describe how we work; they are not a guarantee that a transaction will be concluded.',
    steps: [
      {
        title: 'Understand the requirement',
        text: 'Product, specification, volume, timing, destination and preferred delivery basis are established first.',
      },
      {
        title: 'Identify relevant supply or demand',
        text: 'We look for counterparties whose position genuinely fits the requirement, rather than circulating it widely.',
      },
      {
        title: 'Qualify counterparties',
        text: 'Identity, role and the proposed procedure are reviewed before parties are introduced to each other.',
      },
      {
        title: 'Align the commercial structure',
        text: 'Delivery terms, inspection, payment structure and documentation are brought onto a common basis.',
      },
      {
        title: 'Coordinate the transaction',
        text: 'We support communication and the sequence of agreed steps until the parties conclude or decide not to proceed.',
      },
    ],
  },
  audiences: {
    eyebrow: 'Working with us',
    title: 'Two sides of the same transaction',
    buyers: {
      title: 'For buyers and procurement teams',
      text: 'You have a defined requirement and want access to relevant supply, presented by a counterparty that has done its preparation.',
      points: [
        'A clear brief: specification, volume, destination and delivery basis',
        'Supply options assessed against that brief',
        'Qualification of the supply-side counterparty before introduction',
        'Coordination through to the agreed commercial terms',
      ],
      cta: 'Submit a buyer enquiry',
    },
    suppliers: {
      title: 'For suppliers and supply-side counterparties',
      text: 'You hold product or an allocation and want to reach qualified demand without spending time on enquiries that cannot proceed.',
      points: [
        'Introductions to buyers whose requirement has been clarified',
        'Buyer identity and role reviewed before contact',
        'Respect for your procedure and documentation requirements',
        'A single point of coordination on the commercial side',
      ],
      cta: 'Submit a supplier enquiry',
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        q: 'What does Valtrax Energy do?',
        a: 'Valtrax Energy is a Netherlands-based company that connects professional buyers and sellers of physical energy products. Its primary focus is commercial intermediation, including counterparty qualification, commercial alignment and transaction coordination. Depending on the transaction and the agreed contractual arrangements, it may also participate directly in the purchase and resale of products, including back-to-back transactions.',
      },
      {
        q: 'Which products does Valtrax Energy focus on?',
        a: `The focus is on ${listProducts}. Listing a product does not mean that it is available; specifications, quantities and availability are confirmed per transaction.`,
      },
      {
        q: 'Which markets does Valtrax Energy cover?',
        a: 'The main focus is the ARA region (Amsterdam–Rotterdam–Antwerp) and Northwest Europe. Valtrax Energy also follows international hubs such as Houston, Antwerp, Jurong and Fujairah and considers international opportunities.',
      },
      {
        q: 'Does Valtrax Energy own refineries, terminals or storage facilities?',
        a: 'No. Valtrax Energy does not own refineries, terminals or storage facilities and is not a producer. Where it participates directly in a purchase and resale, the product, delivery and transfer of ownership are arranged in the contracts for that transaction.',
      },
      {
        q: 'What information is needed for an enquiry?',
        a: 'Your company details, the product and specification, the indicative volume, the delivery destination and the preferred delivery basis, such as FOB, CIF or terminal-based. Banking details, passports or proof of funds are not requested through this website.',
      },
      {
        q: 'How are potential counterparties assessed?',
        a: 'Each opportunity is assessed individually. Valtrax Energy reviews the company’s identity and registration, its role in the transaction and the consistency of the proposed procedure before introducing parties to each other. These checks are carried out manually.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Discuss your physical energy requirements',
    intro:
      'Tell us about your requirement or supply position. A precise brief helps us assess quickly whether and how we can assist.',
    checklistTitle: 'A useful enquiry includes',
    checklist: [
      'Product and specification',
      'Indicative volume and delivery period',
      'Origin or delivery destination',
      'Preferred delivery basis',
      'Your company’s role in the transaction',
    ],
    notRequested:
      'Please do not send banking details, passports, proof of funds or other KYC documents through this form. If documentation is needed at a later stage, we will agree a suitable channel with you.',
    directTitle: 'Contact by email',
    direct: { general: 'General enquiries', trading: 'Trading', finance: 'Finance' },
  },
  form: {
    legend: 'Enquiry form',
    requiredNote: 'Fields marked * are required.',
    fields: {
      name: 'Full name',
      company: 'Company',
      email: 'Business email',
      country: 'Country',
      enquiryType: 'Enquiry type',
      product: 'Product',
      message: 'Message / requirements',
      messageHint: 'Specification, timing, your role in the transaction and anything else relevant.',
      tradeDetails: 'Trade details (optional)',
      tradeDetailsHint: 'Add these if already known.',
      volume: 'Volume',
      unit: 'Unit',
      destination: 'Delivery destination',
      basis: 'Preferred delivery basis',
      phone: 'Telephone',
      honeypot: 'Leave this field empty',
    },
    choose: 'Please select',
    enquiryTypes: { buyer: 'Buyer / procurement', supplier: 'Supplier / seller', other: 'Other' },
    deliveryBases: { fob: 'FOB', cif: 'CIF', terminal: 'Terminal-based', open: 'Open / to be discussed' },
    units: { mt: 'Metric tonnes (MT)', m3: 'Cubic metres (m³)', bbl: 'Barrels (bbl)', mmbtu: 'MMBtu', other: 'Other' },
    // Notice under the form (text supplied by the owner; no consent checkbox).
    notice: {
      before: 'We use the information you submit to respond to your enquiry. Read our',
      link: 'Privacy Policy',
      after: 'for details about how we handle your personal data.',
    },
    submit: 'Send enquiry',
    sending: 'Sending…',
    errorsSummary: 'Please correct the highlighted fields.',
    validation: {
      required: 'This field is required.',
      email: 'Enter a valid business email address, for example name@company.com.',
      tooLong: 'This entry is too long.',
      tooShort: 'Please add a little more detail (at least 20 characters).',
      invalid: 'Please check this entry.',
    },
    status: {
      success: 'Thank you. Your enquiry has been sent. We respond to qualified enquiries by email.',
      unavailable:
        'The enquiry form is temporarily unavailable, and your message has not been sent. Please try again later.',
      error: 'Your enquiry could not be sent because of a technical problem. Please try again in a few minutes.',
      rateLimited: 'Too many submissions in a short period. Please wait a few minutes and try again.',
      invalid: 'Some fields need attention. Please review the form and try again.',
      tooFast: 'The form was submitted too quickly. Please wait a moment and try again.',
      network: 'No connection could be made. Check your internet connection and try again.',
    },
    noJsBack: 'Return to the website',
  },
  footer: {
    tagline: 'Physical energy sourcing and commercial intermediation.',
    tradingName: 'Valtrax Energy is a trading name of Northbridge Trading B.V.',
    registration: 'The Netherlands · KvK 42053415',
    legalTitle: 'Legal',
    terms: 'Terms and Conditions',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    vat: 'VAT',
    navTitle: 'Sections',
    rights: 'All rights reserved.',
    disclaimer:
      'Information on this website is general in nature. It does not constitute a binding offer, a guarantee of availability or a delivery obligation, and is not financial advice.',
  },
  legal: {
    lastUpdated: 'Last updated',
    toc: 'On this page',
    print: 'Print this page',
    back: 'Back to the homepage',
    related: 'Related documents',
    draftBanner:
      'Draft. Items marked on this page still have to be confirmed by Valtrax Energy. This page is not yet ready for publication.',
    draftLabel: 'To be confirmed',
    /** Link labels used inside running legal text. */
    inline: { terms: 'Terms and Conditions', privacy: 'Privacy Policy', cookies: 'Cookie Policy', ap: 'Autoriteit Persoonsgegevens' },
    companyDetails: 'Company details',
    company: {
      legalName: 'Legal entity',
      tradingName: 'Trading name',
      address: 'Address',
      kvk: 'Chamber of Commerce (KvK)',
      vat: 'VAT identification number',
      email: 'Email',
      website: 'Website',
    },
  },
  notFound: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved.',
    back: 'Go to the homepage',
  },
};

export type Dictionary = typeof en;
