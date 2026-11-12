import type { Dictionary } from './en';

/** Dutch copy. Same structure as en.ts; keep both files in step. Formal address (u/uw) throughout. */

/** Confirmed product list; order and keys follow productKeys in src/config/site.ts. */
const products = [
  {
    key: 'en590',
    name: 'EN590 10 PPM / ULSD',
    text: 'Diesel volgens de Europese norm EN 590 met een zwavelgehalte van maximaal 10 ppm (ultra-zwavelarme diesel), voor wegtransport, industrie en distributie.',
  },
  {
    key: 'jet-a1',
    name: 'Jet A-1',
    text: 'Vliegtuigbrandstof op kerosinebasis voor afnemers en distributeurs van luchtvaartbrandstof.',
  },
  {
    key: 'lpfo',
    name: 'LPFO (Low Pour Fuel Oil)',
    text: 'Residuale stookolie met een laag vloeipunt, voor afnemers in de industrie en de energiesector.',
  },
  {
    key: 'd6',
    name: 'D6 Fuel Oil',
    text: 'Zware residuale stookolie, geleverd volgens de specificatie die per transactie wordt overeengekomen.',
  },
  {
    key: 'lpg',
    name: 'LPG',
    text: 'Vloeibaar gemaakt petroleumgas, zoals propaan, butaan en mengsels, afhankelijk van specificatie, volume en leveringspunt.',
  },
  {
    key: 'lng',
    name: 'LNG / aardgas',
    text: 'Vloeibaar aardgas en aardgas, afhankelijk van leveringspunt, volumeprofiel en contractstructuur.',
  },
  {
    key: 'other',
    name: 'Overige geraffineerde aardolieproducten en middeldestillaten',
    text: 'Andere geraffineerde aardolieproducten en middeldestillaten, zoals gasoliekwaliteiten, per geval beoordeeld bij een concrete behoefte.',
  },
];
const productNames = products.map((p) => p.name);
const listProducts = `${productNames.slice(0, -1).join(', ')} en ${productNames.at(-1)!.toLowerCase()}`;

export const nl: Dictionary = {
  lang: 'nl',
  locale: 'nl_NL',
  meta: {
    title: 'Valtrax Energy | Fysieke energie-inkoop en commerciële bemiddeling',
    description:
      'Valtrax Energy brengt professionele kopers en verkopers van fysieke energieproducten samen, zoals EN590 10 PPM, Jet A-1, stookolie, LPG en LNG. Gevestigd in Nederland, met de focus op de ARA-markt.',
    ogAlt: 'Valtrax Energy: fysieke energie-inkoop en commerciële bemiddeling',
  },
  skipLink: 'Direct naar de inhoud',
  nav: {
    label: 'Hoofdnavigatie',
    about: 'Over ons',
    expertise: 'Expertise',
    products: 'Producten',
    markets: 'Markten',
    process: 'Werkwijze',
    contact: 'Contact',
    cta: 'Aanvraag indienen',
    menuOpen: 'Menu',
    menuClose: 'Sluiten',
    menuLabel: 'Navigatiemenu openen',
    home: 'Valtrax Energy, home',
  },
  langSwitch: {
    label: 'Taal',
    current: 'Nederlands (huidige taal)',
    other: 'English',
    otherShort: 'EN',
    currentShort: 'NL',
  },
  hero: {
    eyebrow: 'Commerciële bemiddeling in fysieke energie',
    title: 'Fysieke energie-inkoop en commerciële bemiddeling',
    subtitle: 'Wij verbinden gekwalificeerde kopers met relevant fysiek aanbod.',
    lead:
      'Valtrax Energy verbindt gekwalificeerde kopers en leveranciers op internationale energiemarkten, met een gedisciplineerde sourcing-aanpak, kwalificatie van tegenpartijen en professionele commerciële coördinatie.',
    focus:
      'Wij richten ons op geraffineerde aardolieproducten en gas, brengen passende tegenpartijen samen en faciliteren gestructureerde commerciële gesprekken.',
    role:
      'Onze primaire focus ligt op commerciële bemiddeling. Als dat voor een specifieke transactie is overeengekomen, kunnen wij producten ook zelf inkopen en doorverkopen, ook op back-to-backbasis.',
    primary: 'Bespreek uw behoefte',
    secondary: 'Bekijk onze expertise',
    strap: ['Gevestigd in Nederland', 'Focus op de ARA-markt', 'Internationaal bereik'],
    chartLabel: 'Rotterdam · ARA',
    chartCaption: 'Marktfocus: Amsterdam–Rotterdam–Antwerpen en Noordwest-Europa',
  },
  about: {
    eyebrow: 'Over ons',
    title: 'Wij brengen professionele kopers en verkopers van fysieke energie samen',
    body: [
      'Valtrax Energy brengt professionele kopers en verkopers van fysieke energieproducten bij elkaar. Onze primaire focus ligt op commerciële bemiddeling: wij nemen een concrete behoefte van een koper of inkoopafdeling als uitgangspunt, zoeken aanbod dat daarbij past en helpen beide partijen tot een werkbare commerciële basis te komen. Afhankelijk van de transactie en de overeengekomen contractuele afspraken kunnen wij ook rechtstreeks deelnemen aan de aan- en verkoop van producten, waaronder back-to-backtransacties.',
      'Onze tegenpartijen zijn onder meer inkoopafdelingen, fysieke grondstoffenhandelaren, brandstofdistributeurs en importeurs, industriële en maritieme brandstofgebruikers, en leveranciers, allocatiehouders en partijen aan de raffinaderijzijde.',
      'Onze toegevoegde waarde zit in voorbereiding en discipline: specificaties en voorwaarden vroeg helder krijgen, tegenpartijen kwalificeren voordat zij worden voorgesteld en het proces gecoördineerd houden, zodat de aandacht uitgaat naar kansen die realistisch doorgang kunnen vinden.',
    ],
    factTitle: 'In het kort',
    fact:
      'Valtrax Energy is een Nederlands bedrijf dat professionele kopers en verkopers van fysieke energieproducten bij elkaar brengt. Het bedrijf opereert onder Northbridge Trading B.V. en richt zich primair op commerciële bemiddeling. Afhankelijk van de transactie en de overeengekomen contractuele afspraken kan het ook rechtstreeks deelnemen aan de aan- en verkoop van producten, waaronder back-to-backtransacties. De marktfocus ligt op de ARA-regio en internationale handelsknooppunten.',
    facts: [
      { term: 'Handelsnaam', value: 'Valtrax Energy' },
      { term: 'Rechtspersoon', value: 'Northbridge Trading B.V.' },
      { term: 'Statutair gevestigd', value: 'Zwijndrecht, Nederland' },
      { term: 'KvK-nummer', value: '42053415' },
      { term: 'Rol', value: 'Primair commerciële bemiddeling; rechtstreekse aan- en verkoop, ook back-to-back, als dat per transactie is overeengekomen' },
    ],
    audienceTitle: 'Met wie wij werken',
    audiences: [
      'Inkoopafdelingen en gekwalificeerde kopers',
      'Fysieke grondstoffenhandelaren',
      'Brandstofdistributeurs en importeurs',
      'Industriële en maritieme brandstofgebruikers',
      'Leveranciers, allocatiehouders en partijen aan de raffinaderijzijde',
    ],
  },
  expertise: {
    eyebrow: 'Expertise',
    title: 'Wat het werk inhoudt',
    intro:
      'Bemiddeling heeft alleen waarde als die concreet is. Dit zijn de activiteiten achter elk onderdeel van onze rol.',
    items: [
      {
        title: 'Fysieke energie-inkoop',
        text: 'Een concrete behoefte koppelen aan aanbod dat daarbij past.',
        points: [
          'Een behoefte vertalen naar productspecificatie, hoeveelheid, timing en leveringsbasis',
          'Relevante partijen aan de aanbodzijde benaderen voor het product en de route',
          'Indicatieve aanbiedingen toetsen aan de oorspronkelijke behoefte',
        ],
      },
      {
        title: 'Kwalificatie van tegenpartijen',
        text: 'Vaststellen wie de andere partij is voordat partijen worden voorgesteld.',
        points: [
          'Identiteit en registratiegegevens van het bedrijf verifiëren',
          'De opgegeven rol in de keten beoordelen: eindgebruiker, distributeur, handelaar of leverancier',
          'Nagaan of de gevraagde procedure en documentatie consistent zijn',
        ],
      },
      {
        title: 'Commerciële afstemming',
        text: 'De verwachtingen van koper en verkoper op één commerciële basis brengen.',
        points: [
          'Leveringsvoorwaarden, inspectie, hoeveelheidstoleranties en betalingsstructuur verduidelijken',
          'Openstaande punten tussen partijen vroegtijdig signaleren',
          'De uitwisseling van aanbiedingen en conceptvoorwaarden ondersteunen',
        ],
      },
      {
        title: 'Transactiecoördinatie',
        text: 'De afgesproken stappen tussen de betrokken partijen in beweging houden.',
        points: [
          'De documentstroom en de volgorde van afgesproken stappen coördineren',
          'De communicatie tussen koper, verkoper en hun vertegenwoordigers onderhouden',
          'Openstaande acties opvolgen totdat partijen afronden of besluiten niet verder te gaan',
        ],
      },
      {
        title: 'Marktinformatie',
        text: 'Context die tegenpartijen helpt weloverwogen beslissingen te nemen.',
        points: [
          'Productstromen en ontwikkelingen in de ARA-regio en Noordwest-Europa volgen',
          'Activiteit op internationale knooppunten volgen die relevant zijn voor een behoefte',
          'Praktische inzichten delen over logistiek en leveringsopties',
        ],
      },
    ],
  },
  products: {
    eyebrow: 'Producten',
    title: 'Productfocus',
    intro:
      'Wij werken aan fysieke energieproducten waarvoor een professionele koper of verkoper een concrete behoefte heeft.',
    items: products,
    dependsTitle: 'Waar inkoop van afhangt',
    dependsIntro: 'Of en hoe een product kan worden ingekocht, beoordelen wij per behoefte, op basis van:',
    depends: [
      'Productspecificatie',
      'Volume en leveringsschema',
      'Herkomst',
      'Bestemming',
      'Leveringsbasis',
      'Kwalificatie van de tegenpartij',
    ],
    note:
      'Dat een product hier wordt genoemd, betekent niet dat het op voorraad of beschikbaar is. Wij publiceren geen prijzen of beschikbaarheid: specificaties, hoeveelheden, beschikbaarheid, levering en commerciële voorwaarden worden per transactie afzonderlijk bevestigd.',
  },
  markets: {
    eyebrow: 'Markten en logistiek',
    title: 'Geworteld in ARA, actief op internationale knooppunten',
    intro:
      'Onze belangrijkste focus ligt op de regio Amsterdam–Rotterdam–Antwerpen (ARA) en Noordwest-Europa, een van de belangrijkste knooppunten ter wereld voor geraffineerde producten. Waar een behoefte daarom vraagt, kijken wij ook naar internationale kansen.',
    primaryTitle: 'ARA / Rotterdam en Noordwest-Europa',
    primaryText:
      'De haven van Rotterdam en het bredere ARA-cluster combineren raffinage, import, opslag en blending met distributie over binnenwater en kust in heel Noordwest-Europa. Onze nabijheid tot deze markt bepaalt mede hoe wij aanbod, logistiek en leveringsopties beoordelen.',
    hubsTitle: 'Internationale knooppunten',
    hubsIntro: 'Gebieden van marktactiviteit en netwerkfocus:',
    hubs: [
      { name: 'Houston', region: 'Amerikaanse Golfkust', coords: '29,76° N · 95,37° W' },
      { name: 'Antwerpen', region: 'ARA, België', coords: '51,22° N · 4,40° O' },
      { name: 'Jurong', region: 'Singapore', coords: '1,27° N · 103,70° O' },
      { name: 'Fujairah', region: 'Verenigde Arabische Emiraten', coords: '25,12° N · 56,33° O' },
    ],
    hubsNote:
      'Dit zijn markten die wij volgen en waarin wij actief zijn. Het zijn geen kantoorlocaties, en Valtrax Energy bezit geen terminals, opslag of schepen op deze of andere locaties.',
    basisTitle: 'Leveringsbasis',
    basisIntro:
      'De transactiestructuur hangt af van de grondstof, de procedure van de leverancier en de commerciële voorwaarden die partijen overeenkomen. Mogelijke structuren zijn:',
    basis: [
      { term: 'FOB', text: 'Free on board: de koper regelt het transport vanaf de overeengekomen laadhaven.' },
      { term: 'CIF', text: 'Cost, insurance and freight: de verkoper regelt transport en verzekering tot de loshaven.' },
      { term: 'Terminalgebaseerd', text: 'Afspraken binnen een terminal van derden, zoals in-tank- of ex-tank-overdrachten.' },
    ],
  },
  process: {
    eyebrow: 'Werkwijze',
    title: 'Hoe wij een kans behandelen',
    intro:
      'Elke kans wordt afzonderlijk beoordeeld. De onderstaande fasen beschrijven onze werkwijze; ze zijn geen garantie dat een transactie tot stand komt.',
    steps: [
      {
        title: 'De behoefte begrijpen',
        text: 'Eerst leggen wij product, specificatie, volume, timing, bestemming en gewenste leveringsbasis vast.',
      },
      {
        title: 'Relevant aanbod of relevante vraag vinden',
        text: 'Wij zoeken tegenpartijen waarvan de positie werkelijk aansluit op de behoefte, in plaats van die breed te verspreiden.',
      },
      {
        title: 'Tegenpartijen kwalificeren',
        text: 'Identiteit, rol en de voorgestelde procedure worden beoordeeld voordat partijen aan elkaar worden voorgesteld.',
      },
      {
        title: 'De commerciële structuur afstemmen',
        text: 'Leveringsvoorwaarden, inspectie, betalingsstructuur en documentatie worden op één lijn gebracht.',
      },
      {
        title: 'De transactie coördineren',
        text: 'Wij ondersteunen de communicatie en de volgorde van afgesproken stappen totdat partijen afronden of besluiten niet verder te gaan.',
      },
    ],
  },
  audiences: {
    eyebrow: 'Samenwerken',
    title: 'Twee kanten van dezelfde transactie',
    buyers: {
      title: 'Voor kopers en inkoopafdelingen',
      text: 'U heeft een concrete behoefte en zoekt toegang tot relevant aanbod, aangedragen door een partij die haar voorbereiding heeft gedaan.',
      points: [
        'Een heldere briefing: specificatie, volume, bestemming en leveringsbasis',
        'Aanbodopties getoetst aan die briefing',
        'Kwalificatie van de leverende partij vóór de introductie',
        'Coördinatie tot en met de overeengekomen commerciële voorwaarden',
      ],
      cta: 'Aanvraag als koper indienen',
    },
    suppliers: {
      title: 'Voor leveranciers en partijen aan de aanbodzijde',
      text: 'U beschikt over product of een allocatie en wilt gekwalificeerde vraag bereiken zonder tijd te besteden aan aanvragen die geen doorgang kunnen vinden.',
      points: [
        'Introducties bij kopers van wie de behoefte is verduidelijkt',
        'Identiteit en rol van de koper beoordeeld vóór het contact',
        'Respect voor uw procedure en documentatie-eisen',
        'Eén aanspreekpunt voor de commerciële coördinatie',
      ],
      cta: 'Aanvraag als leverancier indienen',
    },
  },
  faq: {
    eyebrow: 'Veelgestelde vragen',
    title: 'Veelgestelde vragen',
    items: [
      {
        q: 'Wat doet Valtrax Energy?',
        a: 'Valtrax Energy is een Nederlands bedrijf dat professionele kopers en verkopers van fysieke energieproducten bij elkaar brengt. De primaire focus ligt op commerciële bemiddeling, waaronder de kwalificatie van tegenpartijen, commerciële afstemming en transactiecoördinatie. Afhankelijk van de transactie en de overeengekomen contractuele afspraken kan het bedrijf ook rechtstreeks deelnemen aan de aan- en verkoop van producten, waaronder back-to-backtransacties.',
      },
      {
        q: 'Op welke producten richt Valtrax Energy zich?',
        a: `De focus ligt op ${listProducts}. Dat een product wordt genoemd, betekent niet dat het beschikbaar is; specificaties, hoeveelheden en beschikbaarheid worden per transactie bevestigd.`,
      },
      {
        q: 'Op welke markten is Valtrax Energy actief?',
        a: 'De belangrijkste focus ligt op de ARA-regio (Amsterdam–Rotterdam–Antwerpen) en Noordwest-Europa. Daarnaast volgt Valtrax Energy internationale knooppunten zoals Houston, Antwerpen, Jurong en Fujairah en overweegt het internationale kansen.',
      },
      {
        q: 'Bezit Valtrax Energy raffinaderijen, terminals of opslagfaciliteiten?',
        a: 'Nee. Valtrax Energy bezit geen raffinaderijen, terminals of opslagfaciliteiten en is geen producent. Als het bedrijf rechtstreeks deelneemt aan een aan- en verkoop, worden het product, de levering en de eigendomsoverdracht geregeld in de contracten voor die transactie.',
      },
      {
        q: 'Welke informatie is nodig voor een aanvraag?',
        a: 'Uw bedrijfsgegevens, het product en de specificatie, het indicatieve volume, de leveringsbestemming en de gewenste leveringsbasis, zoals FOB, CIF of terminalgebaseerd. Via deze website worden geen bankgegevens, paspoorten of bewijs van financiële middelen gevraagd.',
      },
      {
        q: 'Hoe worden mogelijke tegenpartijen beoordeeld?',
        a: 'Elke kans wordt afzonderlijk beoordeeld. Valtrax Energy beoordeelt de identiteit en registratie van het bedrijf, zijn rol in de transactie en de consistentie van de voorgestelde procedure voordat partijen aan elkaar worden voorgesteld. Deze controles worden handmatig uitgevoerd.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Bespreek uw behoefte aan fysieke energie',
    intro:
      'Vertel ons over uw behoefte of aanbodpositie. Met een precieze briefing kunnen wij snel beoordelen of en hoe wij kunnen helpen.',
    checklistTitle: 'Een bruikbare aanvraag bevat',
    checklist: [
      'Product en specificatie',
      'Indicatief volume en leveringsperiode',
      'Herkomst of leveringsbestemming',
      'Gewenste leveringsbasis',
      'De rol van uw bedrijf in de transactie',
    ],
    notRequested:
      'Stuur via dit formulier geen bankgegevens, paspoorten, bewijs van financiële middelen of andere KYC-documenten. Als documentatie later nodig is, spreken wij met u een geschikt kanaal af.',
    directTitle: 'Contact per e-mail',
    direct: { general: 'Algemene vragen', trading: 'Handel', finance: 'Financiën' },
  },
  form: {
    legend: 'Aanvraagformulier',
    requiredNote: 'Velden met een * zijn verplicht.',
    fields: {
      name: 'Volledige naam',
      company: 'Bedrijf',
      email: 'Zakelijk e-mailadres',
      country: 'Land',
      enquiryType: 'Type aanvraag',
      product: 'Product',
      message: 'Bericht / behoefte',
      messageHint: 'Specificatie, timing, uw rol in de transactie en verder alles wat relevant is.',
      tradeDetails: 'Handelsgegevens (optioneel)',
      tradeDetailsHint: 'Vul deze in als ze al bekend zijn.',
      volume: 'Volume',
      unit: 'Eenheid',
      destination: 'Leveringsbestemming',
      basis: 'Gewenste leveringsbasis',
      phone: 'Telefoon',
      honeypot: 'Laat dit veld leeg',
    },
    choose: 'Maak een keuze',
    enquiryTypes: { buyer: 'Koper / inkoop', supplier: 'Leverancier / verkoper', other: 'Overig' },
    deliveryBases: { fob: 'FOB', cif: 'CIF', terminal: 'Terminalgebaseerd', open: 'Open / nader te bespreken' },
    units: { mt: 'Metrische ton (MT)', m3: 'Kubieke meter (m³)', bbl: 'Vaten (bbl)', mmbtu: 'MMBtu', other: 'Anders' },
    notice: {
      before: 'Wij gebruiken de gegevens die u verstrekt om uw aanvraag te beantwoorden. Lees onze',
      link: 'privacyverklaring',
      after: 'voor meer informatie over hoe wij met uw persoonsgegevens omgaan.',
    },
    submit: 'Aanvraag verzenden',
    sending: 'Bezig met verzenden…',
    errorsSummary: 'Corrigeer de gemarkeerde velden.',
    validation: {
      required: 'Dit veld is verplicht.',
      email: 'Vul een geldig zakelijk e-mailadres in, bijvoorbeeld naam@bedrijf.nl.',
      tooLong: 'Deze invoer is te lang.',
      tooShort: 'Geef iets meer toelichting (minimaal 20 tekens).',
      invalid: 'Controleer deze invoer.',
    },
    status: {
      success: 'Dank u. Uw aanvraag is verzonden. Wij reageren per e-mail op gekwalificeerde aanvragen.',
      unavailable:
        'Het aanvraagformulier is tijdelijk niet beschikbaar en uw bericht is niet verzonden. Probeer het later opnieuw.',
      error: 'Uw aanvraag kon door een technisch probleem niet worden verzonden. Probeer het over enkele minuten opnieuw.',
      rateLimited: 'Te veel aanvragen in korte tijd. Wacht enkele minuten en probeer het opnieuw.',
      invalid: 'Enkele velden vragen aandacht. Controleer het formulier en probeer het opnieuw.',
      tooFast: 'Het formulier werd te snel verzonden. Wacht even en probeer het opnieuw.',
      network: 'Er kon geen verbinding worden gemaakt. Controleer uw internetverbinding en probeer het opnieuw.',
    },
    noJsBack: 'Terug naar de website',
  },
  footer: {
    tagline: 'Fysieke energie-inkoop en commerciële bemiddeling.',
    tradingName: 'Valtrax Energy is een handelsnaam van Northbridge Trading B.V.',
    registration: 'Nederland · KvK 42053415',
    legalTitle: 'Juridisch',
    terms: 'Algemene voorwaarden',
    privacy: 'Privacyverklaring',
    cookies: 'Cookiebeleid',
    vat: 'Btw',
    navTitle: 'Onderdelen',
    rights: 'Alle rechten voorbehouden.',
    disclaimer:
      'De informatie op deze website is algemeen van aard. Zij vormt geen bindend aanbod, geen garantie van beschikbaarheid en geen leveringsverplichting, en is geen financieel advies.',
  },
  legal: {
    lastUpdated: 'Laatst bijgewerkt',
    toc: 'Op deze pagina',
    print: 'Deze pagina afdrukken',
    back: 'Terug naar de homepage',
    related: 'Gerelateerde documenten',
    draftBanner:
      'Concept. De gemarkeerde onderdelen op deze pagina moeten nog door Valtrax Energy worden bevestigd. Deze pagina is nog niet klaar voor publicatie.',
    draftLabel: 'Nog te bevestigen',
    inline: { terms: 'algemene voorwaarden', privacy: 'privacyverklaring', cookies: 'cookiebeleid', ap: 'Autoriteit Persoonsgegevens' },
    companyDetails: 'Bedrijfsgegevens',
    company: {
      legalName: 'Rechtspersoon',
      tradingName: 'Handelsnaam',
      address: 'Adres',
      kvk: 'KvK-nummer',
      vat: 'Btw-identificatienummer',
      email: 'E-mail',
      website: 'Website',
    },
  },
  pages: {
    readMore: 'Lees meer',
    home: 'Home',
    start: {
      nav: 'EN590 kopen of leveren',
    },
    about: {
      title: 'Over Valtrax Energy',
      metaTitle: 'Over ons | Valtrax Energy',
      metaDescription:
        'Valtrax Energy brengt professionele kopers en verkopers van fysieke energieproducten bij elkaar. Onze primaire focus ligt op commerciële bemiddeling, met de ARA-regio en internationale handelsknooppunten als marktfocus.',
    },
    products: {
      title: 'Producten',
      metaTitle: 'Producten | Valtrax Energy',
      metaDescription:
        'Wij werken aan fysieke energieproducten waarvoor een professionele koper of verkoper een concrete behoefte heeft: EN590 10 PPM / ULSD, Jet A-1, LPFO, D6 Fuel Oil, LPG en LNG.',
    },
    process: {
      title: 'Markten en werkwijze',
      metaTitle: 'Markten en werkwijze | Valtrax Energy',
      metaDescription:
        'Onze belangrijkste focus ligt op de regio Amsterdam–Rotterdam–Antwerpen (ARA) en Noordwest-Europa. Elke kans wordt afzonderlijk beoordeeld.',
    },
    contact: {
      title: 'Contact',
      metaTitle: 'Contact | Valtrax Energy',
      metaDescription:
        'Vertel ons over uw behoefte of aanbodpositie. Met een precieze briefing kunnen wij snel beoordelen of en hoe wij kunnen helpen.',
    },
  },
  start: {
    metaTitle: 'EN590 kopen of leveren in de ARA-regio | Valtrax Energy',
    metaDescription:
      'Valtrax Energy brengt zakelijke kopers en leveranciers van EN590-diesel in de regio Amsterdam–Rotterdam–Antwerpen samen. Deel een concrete behoefte of aanbodkans.',
    hero: {
      eyebrow: 'Fysieke energie-inkoop en commerciële bemiddeling',
      title: 'Wij verbinden kopers en leveranciers van EN590 in de ARA-regio',
      lead: 'Valtrax Energy is een onafhankelijke bemiddelaar in fysieke energieproducten. Wij koppelen een concrete behoefte aan een passende tegenpartij en helpen de commerciële voorwaarden aan beide kanten op elkaar af te stemmen.',
      prompt: 'Kies uw route:',
      buy: 'Ik wil kopen',
      supply: 'Ik ben leverancier',
      trust: 'Valtrax Energy is een handelsnaam van Northbridge Trading B.V., gevestigd in Zwijndrecht (KvK 42053415).',
      facts: [
        { term: 'Productfocus', value: 'EN590 10 PPM-diesel (ULSD)' },
        { term: 'Markt', value: 'Amsterdam, Rotterdam en Antwerpen (ARA)' },
        { term: 'Onze rol', value: 'Bemiddelaar, zonder eigen raffinaderij, opslag of voorraad' },
      ],
    },
    value: {
      eyebrow: 'Wat wij doen',
      title: 'Een gerichte koppeling tussen concrete vraag en passend aanbod',
      buyers: {
        title: 'Voor kopers',
        lead: 'U heeft een concrete behoefte en zoekt passend aanbod.',
        points: [
          'Wij vertalen uw behoefte naar gerichte sourcing.',
          'Wij zoeken potentiële leveranciers die aansluiten op uw specificatie, volume, locatie en leveringsvoorwaarden.',
          'Wij ondersteunen de eerste commerciële afstemming en de introductie.',
        ],
      },
      suppliers: {
        title: 'Voor leveranciers',
        lead: 'U heeft product of een allocatie en wilt kopers met een concrete behoefte bereiken.',
        points: [
          'Wij brengen u in contact met potentiële kopers met een concrete behoefte.',
          'U krijgt vroeg inzicht in productvereisten, volume en bestemming.',
          'Wij helpen vaststellen of er een werkbare commerciële match is.',
        ],
      },
      note: 'Elke kans wordt afzonderlijk beoordeeld. Een match of transactie is nooit gegarandeerd.',
    },
    person: {
      eyebrow: 'Met wie u samenwerkt',
      title: 'Eén aanspreekpunt, een geregistreerd Nederlands bedrijf',
      name: 'Thom van Welie',
      role: 'Aanspreekpunt, Valtrax Energy',
      text: 'Thom van Welie is uw aanspreekpunt bij Valtrax Energy. Hij beoordeelt binnenkomende behoeften en aanbodkansen, bespreekt de commerciële details met u en coördineert de introductie bij een passende tegenpartij.',
      companyTitle: 'Het bedrijf achter Valtrax Energy',
    },
    steps: {
      eyebrow: 'Zo werkt het',
      title: 'In drie stappen van aanvraag naar introductie',
      items: [
        {
          title: 'Deel uw behoefte of aanbodkans',
          text: 'Gebruik het formulier op deze pagina. Product, volume, locatie en timing zijn genoeg om te beginnen.',
        },
        {
          title: 'Wij beoordelen de commerciële match',
          text: 'Wij bekijken specificatie, volume, locatie, timing en leveringsvoorwaarden, en vragen wat nog ontbreekt.',
        },
        {
          title: 'Kennismaking met een passende tegenpartij en vervolgstappen',
          text: 'Is er een match, dan introduceren wij de passende tegenpartij en ondersteunen wij de eerste commerciële gesprekken.',
        },
      ],
      note: 'Beschikbaarheid, documentatie, voorwaarden en de uiteindelijke overeenkomst worden per transactie beoordeeld en afgesproken.',
    },
    form: {
      eyebrow: 'Aanvraag',
      title: 'Deel uw behoefte of aanbodkans',
      intro: 'Kies uw route. Wij vragen alleen wat nodig is voor een eerste beoordeling.',
      legend: 'Aanvraagformulier startpagina',
      roleLegend: 'Uw route',
      roles: {
        buyer: { label: 'Ik wil kopen', hint: 'U heeft een inkoopbehoefte.' },
        supplier: { label: 'Ik ben leverancier', hint: 'U heeft product of een allocatie aan te bieden.' },
      },
      choosePrompt: 'Kies hierboven een route om de bijbehorende vragen te zien.',
      companyLegend: 'U en uw bedrijf',
      buyerLegend: 'Uw inkoopbehoefte',
      supplierLegend: 'Uw aanbodkans',
      requiredNote: 'Velden met een * zijn verplicht.',
      optional: 'optioneel',
      selectPlaceholder: 'Kies',
      fields: {
        name: 'Volledige naam',
        company: 'Bedrijf',
        email: 'Zakelijk e-mailadres',
        companyWebsite: 'Website van het bedrijf',
        country: 'Land',
        product: 'Product',
        buyerVolume: 'Gewenst volume',
        supplierVolume: 'Beschikbaar of indicatief volume',
        unit: 'Eenheid',
        buyerFrequency: 'Eenmalig of terugkerend',
        buyerLocation: 'Gewenste leveringslocatie',
        supplierLocation: 'Laad- of leveringslocatie',
        buyerTiming: 'Gewenste timing',
        supplierPeriod: 'Beschikbaarheidsperiode',
        supplierRole: 'Uw rol',
        buyerNotes: 'Specificatie en leveringsbasis',
        supplierNotes: 'Productspecificatie en voorwaarden',
      },
      hints: {
        companyWebsite: 'Bijvoorbeeld bedrijf.nl.',
        volume: 'Een getal of bandbreedte per levering of per maand.',
        buyerLocation: 'Haven, terminal of regio, bijvoorbeeld Rotterdam.',
        supplierLocation: 'Haven, terminal of regio waar het product wordt geladen of geleverd.',
        buyerTiming: 'Bijvoorbeeld een leveringsperiode of startdatum.',
        supplierPeriod: 'Bijvoorbeeld een laadperiode of contractperiode.',
        buyerNotes: 'Indien bekend: specificatie, leveringsbasis (zoals FOB, CIF of in-tank) en wat verder van belang is.',
        supplierNotes: 'Specificatie, leveringsbasis en de belangrijkste commerciële voorwaarden, voor zover u die nu kunt delen.',
      },
      frequencies: { 'one-off': 'Eenmalig', recurring: 'Terugkerend' },
      supplierRoles: {
        direct: 'Directe leverancier',
        representative: 'Bevoegde vertegenwoordiger',
        other: 'Andere rol',
      },
      notRequested:
        'Stuur via dit formulier geen proof of funds, bankgegevens of vertrouwelijke handelsdocumenten mee. Zijn er later documenten nodig, dan spreken wij met u een geschikt kanaal af.',
      submit: {
        buyer: 'Inkoopbehoefte versturen',
        supplier: 'Aanbodkans versturen',
        none: 'Aanvraag versturen',
      },
      sending: 'Bezig met versturen…',
      success: {
        buyer:
          'Dank u wel. Uw inkoopbehoefte is naar Valtrax Energy verstuurd. Wij beoordelen deze en nemen per e-mail contact met u op als er een mogelijke match is of als wij meer informatie nodig hebben.',
        supplier:
          'Dank u wel. Uw aanbodkans is naar Valtrax Energy verstuurd. Wij beoordelen deze en nemen per e-mail contact met u op als er een mogelijke match is of als wij meer informatie nodig hebben.',
      },
      successNext: 'Uw gegevens worden niet zonder uw toestemming met een tegenpartij gedeeld.',
      another: 'Nog een aanvraag versturen',
    },
    faq: {
      eyebrow: 'Veelgestelde vragen',
      title: 'Korte antwoorden',
      items: [
        {
          q: 'Is Valtrax de directe leverancier?',
          a: 'Nee. Valtrax Energy heeft geen eigen raffinaderij, opslag of fysieke voorraad. Wij treden op als bemiddelaar tussen kopers en leveranciers. Wordt een transactie anders ingericht, bijvoorbeeld back-to-back, dan wordt dat voor die transactie schriftelijk afgesproken.',
        },
        {
          q: 'Op welke producten en locaties richt u zich?',
          a: 'Onze eerste focus is EN590 10 PPM-diesel (ULSD) in de regio Amsterdam–Rotterdam–Antwerpen (ARA). Daarnaast bekijken wij Jet A-1 en andere geraffineerde aardolieproducten en gas, per geval en voor een concrete behoefte.',
        },
        {
          q: 'Welke informatie is nodig om te beginnen?',
          a: 'Uw bedrijfsgegevens, het product, het volume, de locatie en zo mogelijk de timing. Specificatie en leveringsbasis helpen als u die al weet. Proof of funds, bankgegevens of vertrouwelijke documenten zijn in deze fase niet nodig.',
        },
        {
          q: 'Wat gebeurt er nadat ik een aanvraag heb verstuurd?',
          a: 'Wij beoordelen uw aanvraag en nemen per e-mail contact met u op als er een mogelijke match is of als wij meer informatie nodig hebben. Uw gegevens worden niet zonder uw toestemming met een tegenpartij gedeeld.',
        },
        {
          q: 'Hoe worden vergoedingen afgesproken?',
          a: 'Vergoeding en voorwaarden worden vooraf per samenwerking of transactie afgestemd. Commissie, betalingstermijn en valuta worden schriftelijk vastgelegd.',
        },
      ],
    },
    closing: {
      title: 'Klaar om een concrete behoefte of aanbodpositie te bespreken?',
      text: 'Kies uw route en deel de belangrijkste gegevens. Wij beoordelen elke aanvraag afzonderlijk.',
      contactTitle: 'Liever per e-mail?',
      legalTitle: 'Juridische informatie',
    },
  },
  notFound: {
    title: 'Pagina niet gevonden',
    text: 'De pagina die u zoekt bestaat niet of is verplaatst.',
    back: 'Naar de homepage',
  },
};
