/**
 * English copy (primary language). The Dutch file (nl.ts) must implement the same shape;
 * TypeScript enforces this through the `Dictionary` type.
 *
 * Copy rules: describe Valtrax as an intermediary. No ownership of refineries, terminals,
 * storage, vessels or inventory; no guaranteed supply, exclusive mandates, volumes,
 * track record, certifications, clients or partnerships.
 */
export const en = {
  lang: 'en',
  locale: 'en_GB',
  meta: {
    title: 'Valtrax Energy | Physical Energy Sourcing & Commercial Intermediation',
    description:
      'Netherlands-based independent energy intermediary connecting qualified buyers with relevant physical supply of EN590, middle distillates, Jet A-1 and LNG, with a focus on the ARA market.',
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
    eyebrow: 'Independent energy intermediary',
    title: 'Physical Energy Sourcing & Commercial Intermediation',
    lead:
      'Connecting qualified demand with relevant physical supply through disciplined sourcing, counterparty qualification and commercial coordination.',
    role:
      'We work between buyers and suppliers of refined products and gas. We do not produce, store or hold the product ourselves.',
    primary: 'Discuss your requirements',
    secondary: 'Explore our expertise',
    strap: ['Netherlands-based', 'ARA market focus', 'International reach'],
    chartLabel: 'Rotterdam · ARA',
    chartCaption: 'Market focus: Amsterdam–Rotterdam–Antwerp and Northwest Europe',
  },
  about: {
    eyebrow: 'About',
    title: 'An intermediary between qualified demand and physical supply',
    body: [
      'Valtrax Energy works on the commercial side of physical energy trade. We take a defined requirement from a buyer or procurement team, identify supply that is relevant to it and help both sides arrive at a workable commercial basis.',
      'Our counterparties include procurement teams, physical commodity traders, fuel distributors and importers, industrial and maritime fuel consumers, and suppliers, allocation holders and refinery-side counterparties.',
      'The value we add lies in preparation and discipline: clarifying specifications and terms early, qualifying counterparties before they are introduced, and keeping the process coordinated so that time is spent on opportunities that can realistically proceed.',
    ],
    factTitle: 'In brief',
    fact:
      'Valtrax Energy is a Netherlands-based independent energy intermediary that connects qualified buyers and procurement organisations with relevant physical supply. Operating under Northbridge Trading B.V., the company focuses on physical energy sourcing, commercial alignment and transaction coordination, with particular attention to the ARA market and international trading hubs.',
    facts: [
      { term: 'Trading name', value: 'Valtrax Energy' },
      { term: 'Legal entity', value: 'Northbridge Trading B.V.' },
      { term: 'Registered in', value: 'Zwijndrecht, the Netherlands' },
      { term: 'Chamber of Commerce (KvK)', value: '42053415' },
      { term: 'Role', value: 'Independent intermediary, not a producer, refiner or storage operator' },
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
      'We work on refined petroleum products and gas for which a qualified buyer or supplier has a defined requirement.',
    items: [
      {
        key: 'en590',
        name: 'EN590 / ULSD',
        text: 'Diesel to the European EN 590 standard and ultra-low sulphur diesel for road transport, industrial and distribution use.',
      },
      {
        key: 'middle-distillates',
        name: 'Middle distillates',
        text: 'Gasoil and related distillate grades, sourced against the specification required by the buyer.',
      },
      {
        key: 'jet-a1',
        name: 'Jet A-1',
        text: 'Aviation turbine fuel for qualified aviation fuel buyers and distributors.',
      },
      {
        key: 'lng',
        name: 'LNG / natural gas',
        text: 'Liquefied natural gas and natural gas, depending on delivery point, volume profile and contract structure.',
      },
      {
        key: 'other',
        name: 'Other refined products and energy commodities',
        text: 'Further refined petroleum products and energy commodities, considered case by case for a qualified requirement.',
      },
    ],
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
      'We do not publish inventory, prices or availability. Indicative terms are discussed only once a requirement and the counterparties involved have been qualified.',
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
        a: 'Valtrax Energy is an independent energy intermediary based in the Netherlands. It connects qualified buyers and procurement organisations with relevant physical supply, and supports counterparty qualification, commercial alignment and transaction coordination.',
      },
      {
        q: 'Which products does Valtrax Energy focus on?',
        a: 'The focus is on EN590 / ULSD, middle distillates, Jet A-1 and LNG / natural gas. Other refined petroleum products and energy commodities are considered when there is a qualified requirement.',
      },
      {
        q: 'Which markets does Valtrax Energy cover?',
        a: 'The main focus is the ARA region (Amsterdam–Rotterdam–Antwerp) and Northwest Europe. Valtrax Energy also follows international hubs such as Houston, Antwerp, Jurong and Fujairah and considers international opportunities.',
      },
      {
        q: 'Does Valtrax Energy own refineries or storage facilities?',
        a: 'No. Valtrax Energy is an intermediary. It does not own refineries, terminals, storage facilities, vessels or product inventory, and does not act as a producer.',
      },
      {
        q: 'What information is needed for an enquiry?',
        a: 'Your company details, the product and specification, the indicative volume, the delivery destination and the preferred delivery basis, such as FOB, CIF or terminal-based. Banking details, passports or proof of funds are not requested through this website.',
      },
      {
        q: 'How are potential counterparties assessed?',
        a: 'Each opportunity is assessed individually. Valtrax Energy reviews the company’s identity and registration, its role in the transaction and the consistency of the proposed procedure before introducing parties to each other.',
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
    consent: 'By submitting this form you acknowledge that your details are processed to handle your enquiry, as described in our',
    privacyLink: 'privacy notice',
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
      success: 'Thank you. Your enquiry has been received and will be reviewed. We respond to qualified enquiries by email.',
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
    privacy: 'Privacy notice',
    navTitle: 'Sections',
    rights: 'All rights reserved.',
    disclaimer:
      'Information on this website is general in nature and does not constitute an offer, a commitment to supply or financial advice.',
  },
  privacy: {
    metaTitle: 'Privacy notice | Valtrax Energy',
    metaDescription:
      'How Valtrax Energy (Northbridge Trading B.V.) processes personal data submitted through the website enquiry form.',
    title: 'Privacy notice',
    updatedLabel: 'Last updated',
    back: 'Back to the homepage',
    sections: [
      {
        h: 'Who is responsible',
        p: [
          'This website is operated by Northbridge Trading B.V., trading as Valtrax Energy, registered with the Netherlands Chamber of Commerce (KvK) under number 42053415 in Zwijndrecht, the Netherlands. Northbridge Trading B.V. is the controller for the personal data described in this notice.',
        ],
      },
      {
        h: 'What we collect',
        p: [
          'We only process personal data that you provide through the enquiry form: your name, company, business email address, country, enquiry type, product, your message and, if you choose to provide them, volume, delivery destination, preferred delivery basis and telephone number.',
          'The website does not use analytics, advertising or tracking cookies, and does not load third-party tracking scripts.',
        ],
      },
      {
        h: 'Why we use it',
        p: [
          'We use your details to assess and respond to your enquiry and, where relevant, to take steps towards a possible business relationship at your request. The legal basis is our legitimate interest in responding to business enquiries and, where applicable, steps taken at your request prior to entering into a contract (Article 6(1)(f) and 6(1)(b) GDPR).',
        ],
      },
      {
        h: 'Who receives it',
        p: [
          'Your enquiry is delivered by email to Valtrax Energy. To do this we use service providers acting on our behalf: our website hosting provider (Vercel Inc.) and a transactional email delivery service (Resend). These providers may process data outside the European Economic Area; where that happens, transfers are subject to appropriate safeguards such as the European Commission’s standard contractual clauses.',
          'We do not sell your data and do not share it with potential counterparties without your agreement.',
        ],
      },
      {
        h: 'How long we keep it',
        p: [
          'We keep enquiry data only for as long as necessary to handle your enquiry and any resulting business contact, unless a longer period is required by law.',
        ],
      },
      {
        h: 'Security and abuse prevention',
        p: [
          'Form submissions are sent over an encrypted connection. To protect the form against abuse, your IP address is used briefly to limit repeated submissions; it is not stored with your enquiry. Technical logs do not contain the content of your message.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'You have the right to request access to, correction or deletion of your personal data, to object to its processing and to request restriction or data portability. You can make such a request by replying to our correspondence or by submitting it through the enquiry form.',
          'You also have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).',
        ],
      },
    ],
  },
  notFound: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved.',
    back: 'Go to the homepage',
  },
};

export type Dictionary = typeof en;
