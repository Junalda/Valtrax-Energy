import type { LegalDoc } from './types';
import type { LegalPageKey } from '../i18n';
import { legalEn } from './en';

/**
 * Dutch legal texts. Same structure and meaning as en.ts; formal address (u/uw).
 * The internal review lists are shared with the English version.
 */
const UPDATED = '2026-10-30';

export const legalNl: Record<LegalPageKey, LegalDoc> = {
  terms: {
    metaTitle: 'Algemene voorwaarden | Valtrax Energy',
    metaDescription:
      'Voorwaarden voor het gebruik van de website van Valtrax Energy en voor aanvragen via de website, van Northbridge Trading B.V.',
    title: 'Algemene voorwaarden',
    intro:
      'Deze voorwaarden gelden voor het gebruik van deze website en het indienen van aanvragen. Commerciële transacties worden geregeld in afzonderlijke schriftelijke overeenkomsten.',
    updated: UPDATED,
    sections: [
      {
        id: 'company',
        title: '1. Wie wij zijn',
        blocks: [
          {
            type: 'p',
            text: 'Deze website wordt beheerd door {company}, handelend onder de naam {brand} ("Valtrax Energy", "wij", "ons").',
          },
          { type: 'company' },
        ],
      },
      {
        id: 'scope',
        title: '2. Toepassingsgebied',
        blocks: [
          {
            type: 'p',
            text: 'Deze voorwaarden gelden voor het gebruik van deze website en voor aanvragen die via de website worden ingediend. Zij vormen geen handels-, bemiddelings- of leveringsovereenkomst.',
          },
          {
            type: 'p',
            text: 'Voor commerciële transacties is een afzonderlijke schriftelijke overeenkomst nodig. Commerciële voorwaarden gelden voor een transactie alleen als zij in die overeenkomst zijn opgenomen of daarin uitdrukkelijk van toepassing zijn verklaard. Het bezoeken van deze website betekent niet dat u commerciële voorwaarden aanvaardt.',
          },
        ],
      },
      {
        id: 'activities',
        title: '3. Onze activiteiten en rol',
        blocks: [
          {
            type: 'p',
            text: 'Valtrax Energy brengt professionele kopers en verkopers van fysieke energieproducten bij elkaar. Onze primaire focus ligt op commerciële bemiddeling. Afhankelijk van de transactie en de overeengekomen contractuele afspraken kunnen wij ook rechtstreeks deelnemen aan de aan- en verkoop van producten, waaronder back-to-backtransacties.',
          },
          {
            type: 'p',
            text: 'Onze rol, bevoegdheid, verantwoordelijkheden en dienstverlening worden per transactie schriftelijk overeengekomen. Valtrax Energy treedt alleen op als verkoper, leverancier, eigenaar van de goederen of gemachtigd mandaathouder als de schriftelijke overeenkomst voor die transactie dat uitdrukkelijk bepaalt.',
          },
        ],
      },
      {
        id: 'website-information',
        title: '4. Informatie op de website en aanvragen',
        blocks: [
          {
            type: 'p',
            text: 'Deze website is informatief. De inhoud ervan vormt op zichzelf geen bindend aanbod, geen garantie van beschikbaarheid en geen leveringsverplichting. Vermelde producten zijn algemene informatie en betekenen niet dat een product op voorraad of beschikbaar is.',
          },
          {
            type: 'p',
            text: 'Het indienen van een aanvraag via het contactformulier leidt niet tot een koop-, leverings-, bemiddelings-, agentuur- of andere overeenkomst en verplicht geen van beide partijen om een transactie aan te gaan.',
          },
        ],
      },
      {
        id: 'transactions',
        title: '5. Transactieovereenkomsten',
        blocks: [
          {
            type: 'p',
            text: 'Productspecificaties, hoeveelheden, prijzen, levering, betaling, eigendomsoverdracht, commissies en alle andere transactievoorwaarden worden per transactie afzonderlijk overeengekomen en schriftelijk vastgelegd. Deze websitevoorwaarden vervangen geen transactiedocumenten.',
          },
        ],
      },
      {
        id: 'payment',
        title: '6. Betaling en commissie',
        blocks: [
          {
            type: 'list',
            items: [
              'Bemiddeling: een eventuele commissie, de eventuele verdeling daarvan tussen partijen, de betalingstermijn en de valuta worden per opdracht schriftelijk overeengekomen.',
              'Rechtstreekse aan- en verkoop: de prijs en de betalingsvoorwaarden worden vastgelegd in de betreffende koop- of verkoopovereenkomst.',
            ],
          },
          {
            type: 'p',
            text: 'Uit deze websitevoorwaarden volgen geen betalings- of commissieverplichtingen.',
          },
        ],
      },
      {
        id: 'termination',
        title: '7. Beëindiging en annulering',
        blocks: [
          {
            type: 'p',
            text: 'Beëindiging, annulering en een eventueel recht op commissie worden geregeld in de betreffende schriftelijke overeenkomst. Deze websitevoorwaarden leggen geen annuleringskosten op.',
          },
        ],
      },
      {
        id: 'commercial-information',
        title: '8. Commerciële informatie',
        blocks: [
          {
            type: 'p',
            text: 'Wij gaan zorgvuldig om met commerciële informatie die met ons wordt gedeeld. Wij delen die informatie alleen met anderen als dat voor de betreffende zaak noodzakelijk en passend is, met inachtneming van de toepasselijke wetgeving en een eventuele geheimhoudings- of non-circumventionovereenkomst (NDA of NCNDA) met de betrokken partijen.',
          },
          {
            type: 'p',
            text: 'Het gebruik van deze website of het indienen van een aanvraag leidt op zichzelf niet tot een NDA of NCNDA. Waar geheimhoudingsverplichtingen nodig zijn, worden die afzonderlijk schriftelijk overeengekomen.',
          },
        ],
      },
      {
        id: 'counterparties',
        title: '9. Gegevens van tegenpartijen en verificatie',
        blocks: [
          {
            type: 'p',
            text: 'Geef bij het indienen van een aanvraag juiste informatie en zorg ervoor dat u bevoegd bent om op te treden namens de organisatie die u vertegenwoordigt.',
          },
          {
            type: 'p',
            text: 'Voordat een transactie doorgaat, kan deze onderworpen zijn aan passende controles van tegenpartijen en aan toepasselijke handelsbeperkingen, zoals sancties en exportcontroles. Valtrax Energy kan besluiten een aanvraag of transactie niet voort te zetten.',
          },
          {
            type: 'p',
            text: 'Stuur via het contactformulier geen paspoorten, bankafschriften, bewijs van financiële middelen of andere gevoelige due-diligencedocumenten. Als zulke documenten later nodig zijn, spreken wij met u een geschikte en veilige manier af om ze uit te wisselen.',
          },
        ],
      },
      {
        id: 'accuracy',
        title: '10. Juistheid, beschikbaarheid en aansprakelijkheid',
        blocks: [
          {
            type: 'p',
            text: 'Wij besteden redelijke zorg aan de juistheid en actualiteit van de informatie op deze website. Toch kan de informatie fouten bevatten of verouderd raken, en wij kunnen haar op elk moment wijzigen. Wij streven ernaar de website beschikbaar te houden, maar kunnen geen ononderbroken of foutloze toegang garanderen.',
          },
          {
            type: 'p',
            text: 'Beslissingen over een transactie horen te berusten op de schriftelijke overeenkomst en bevestigingen voor die transactie, niet alleen op algemene informatie op de website. Niets in deze voorwaarden beperkt of sluit aansprakelijkheid uit waar dat op grond van dwingend recht niet is toegestaan.',
          },
        ],
      },
      {
        id: 'third-party-links',
        title: '11. Links naar andere websites',
        blocks: [
          {
            type: 'p',
            text: 'Deze website kan links bevatten naar websites van derden. Die websites worden beheerd door hun eigen aanbieders, en hun eigen voorwaarden en privacyverklaringen zijn van toepassing. Wij hebben geen invloed op de inhoud ervan, maar als u een onjuiste of ongepaste link ziet, horen wij dat graag.',
          },
        ],
      },
      {
        id: 'intellectual-property',
        title: '12. Intellectueel eigendom',
        blocks: [
          {
            type: 'p',
            text: 'De teksten, de naam en het logo van Valtrax Energy en het ontwerp van deze website worden gebruikt door {company}. U mag pagina’s bekijken, downloaden en afdrukken voor uw eigen zakelijke doeleinden, zoals het beoordelen van een mogelijke samenwerking met ons. Elke andere verveelvoudiging, openbaarmaking of commercieel gebruik vereist onze voorafgaande schriftelijke toestemming.',
          },
          {
            type: 'p',
            text: 'Sommige onderdelen van deze website worden gebruikt onder licentie van derden, zoals de lettertypen Inter en Source Serif 4, die onder de SIL Open Font License vallen. Deze onderdelen blijven eigendom van hun respectieve rechthebbenden.',
          },
        ],
      },
      {
        id: 'privacy',
        title: '13. Privacy en cookies',
        blocks: [
          {
            type: 'p',
            text: 'In onze {link:privacy} leest u hoe wij omgaan met persoonsgegevens die via deze website worden verstrekt. Ons {link:cookies} beschrijft welke cookies en vergelijkbare technieken deze website gebruikt.',
          },
        ],
      },
      {
        id: 'law',
        title: '14. Toepasselijk recht en bevoegde rechter',
        blocks: [
          {
            type: 'p',
            text: 'Op deze voorwaarden en het gebruik van deze website is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Rotterdam, tenzij dwingend recht anders bepaalt. Overeenkomsten voor afzonderlijke transacties kunnen andere bepalingen over toepasselijk recht en geschillenbeslechting bevatten.',
          },
        ],
      },
      {
        id: 'language',
        title: '15. Taal',
        blocks: [
          {
            type: 'p',
            text: 'Deze voorwaarden zijn beschikbaar in het Engels en het Nederlands. Engels is onze voorkeurstaal voor internationale communicatie. Beide versies hebben dezelfde inhoud.',
          },
        ],
      },
      {
        id: 'contact',
        title: '16. Vragen, klachten en wijzigingen',
        blocks: [
          {
            type: 'p',
            text: 'Heeft u vragen of een klacht over deze website of deze voorwaarden, neem dan contact met ons op via {email}.',
          },
          {
            type: 'p',
            text: 'Wij kunnen deze voorwaarden wijzigen. De datum bovenaan deze pagina geeft aan wanneer zij voor het laatst zijn gewijzigd.',
          },
        ],
      },
    ],
    review: legalEn.terms.review,
  },

  privacy: {
    metaTitle: 'Privacyverklaring | Valtrax Energy',
    metaDescription:
      'Hoe Northbridge Trading B.V., handelend onder de naam Valtrax Energy, omgaat met persoonsgegevens die via het aanvraagformulier op de website worden verstrekt.',
    title: 'Privacyverklaring',
    intro:
      'In deze verklaring leggen wij uit hoe wij met persoonsgegevens omgaan wanneer u deze website bezoekt of ons een aanvraag stuurt, en welke rechten u heeft.',
    updated: UPDATED,
    sections: [
      {
        id: 'controller',
        title: '1. Wie is verantwoordelijk',
        blocks: [
          {
            type: 'p',
            text: '{company}, handelend onder de naam {brand}, is de verwerkingsverantwoordelijke voor de verwerkingen in deze verklaring: aanvragen via deze website en de zakelijke correspondentie die daaruit voortvloeit.',
          },
          { type: 'company' },
          {
            type: 'p',
            text: 'Voor vragen over deze verklaring of over uw persoonsgegevens kunt u contact met ons opnemen via {email}.',
          },
        ],
      },
      {
        id: 'data',
        title: '2. Welke persoonsgegevens wij verwerken',
        blocks: [
          {
            type: 'p',
            text: 'Aanvraagformulier. Wanneer u een aanvraag verstuurt, ontvangen wij de volgende gegevens:',
          },
          {
            type: 'list',
            items: [
              'Verplicht: volledige naam, bedrijf, zakelijk e-mailadres, land, type aanvraag (koper, leverancier of overig), product en uw bericht.',
              'Optioneel: telefoonnummer, volume en eenheid, leveringsbestemming en gewenste leveringsbasis.',
            ],
          },
          {
            type: 'p',
            text: 'Wij vragen om de verplichte velden omdat wij ze nodig hebben om u te antwoorden: uw naam en bedrijf laten zien met wie wij te maken hebben, met uw e-mailadres kunnen wij reageren, en uw land, type aanvraag, product en bericht helpen ons uw verzoek te begrijpen en te beoordelen. De optionele velden helpen ons een verzoek sneller te beoordelen; u kunt ze leeg laten.',
          },
          {
            type: 'p',
            text: 'Het formulier verstuurt ook de taal van de pagina, het tijdstip waarop u het formulier opende en een verborgen veld dat leeg hoort te blijven. Deze gebruiken wij alleen om het formulier te verwerken en om geautomatiseerde spam te herkennen.',
          },
          {
            type: 'p',
            text: 'Technische gegevens. Wanneer u de website bezoekt, stuurt uw browser automatisch technische informatie naar onze hostingprovider, zoals uw IP-adres, de opgevraagde pagina, het tijdstip en browsergegevens. Dit is nodig om de website aan u te tonen. Onze hostingprovider legt zulke verzoekgegevens vast in haar logbestanden en bewaart ze gedurende een beperkte periode.',
          },
          {
            type: 'p',
            text: 'Bezoekersstatistieken. Wij gebruiken Vercel Web Analytics en Vercel Speed Insights om te zien hoe de website wordt gebruikt en hoe snel pagina’s laden. Wanneer een pagina laadt, stuurt een script dat vanaf ons eigen domein wordt geladen onze hostingprovider Vercel de bezochte pagina, de verwijzende website, het type browser, besturingssysteem en apparaat, en metingen van de laadsnelheid. Vercel leidt het land af uit uw IP-adres. Deze diensten plaatsen geen cookies en slaan geen informatie op in uw browser. In ons dashboard zien wij alleen totalen en gemiddelden, geen individuele bezoekers.',
          },
          {
            type: 'p',
            text: 'Wanneer u het formulier verstuurt, wordt uw IP-adres gebruikt om herhaalde inzendingen te beperken. Het wordt alleen in het werkgeheugen van de server bewaard, niet bij uw aanvraag of in onze logbestanden opgeslagen, en binnen 10 minuten verwijderd. Onze eigen serverlogs bevatten alleen de uitkomst van een inzending (bijvoorbeeld verzonden of geweigerd), het type aanvraag, de productcategorie en de taal van de pagina, niet uw naam, e-mailadres of bericht.',
          },
          {
            type: 'p',
            text: 'Correspondentie. Als wij reageren en contact houden, verwerken wij ook de inhoud van de correspondentie en de contactgegevens die daarin worden uitgewisseld.',
          },
          {
            type: 'p',
            text: 'Neem in uw aanvraag geen bijzondere persoonsgegevens, identiteitsbewijzen, bankafschriften of andere gevoelige documenten op.',
          },
        ],
      },
      {
        id: 'purposes',
        title: '3. Doelen, grondslagen en bewaartermijnen',
        blocks: [
          {
            type: 'table',
            caption: 'Overzicht van verwerkingen',
            head: ['Activiteit en doel', 'Persoonsgegevens', 'Grondslag', 'Bewaartermijn'],
            rows: [
              [
                'Uw aanvraag beoordelen en beantwoorden',
                'Gegevens uit het aanvraagformulier en correspondentie',
                'Ons gerechtvaardigd belang bij het beantwoorden en opvolgen van zakelijke aanvragen van professionele partijen (art. 6 lid 1 sub f AVG). Neemt u namens uzelf contact op om stappen te zetten naar een overeenkomst met ons, dan is de grondslag het nemen van die stappen op uw verzoek (art. 6 lid 1 sub b AVG).',
                'Als er geen zakelijke relatie volgt: verwijderd zes maanden na het laatste inhoudelijke contact, tenzij een langere termijn gerechtvaardigd is, bijvoorbeeld vanwege een geschil, of wettelijk verplicht is.',
              ],
              [
                'Onderhouden van een zakelijke relatie met de organisatie die u vertegenwoordigt',
                'Contactgegevens van contactpersonen en correspondentie',
                'Ons gerechtvaardigd belang bij het onderhouden van zakelijke contacten en het coördineren van gesprekken met professionele partijen (art. 6 lid 1 sub f AVG), of de uitvoering van een overeenkomst met u (art. 6 lid 1 sub b AVG) als u zelf de contractpartij bent.',
                'Zolang dat voor het doel van de zakelijke relatie nodig is.',
              ],
              [
                'Beschermen van het aanvraagformulier tegen spam en misbruik',
                'IP-adres, tijdstip waarop het formulier werd geopend, verborgen spamveld',
                'Ons gerechtvaardigd belang bij een veilige en bruikbare website en een veilig formulier (art. 6 lid 1 sub f AVG).',
                'Het IP-adres staat alleen in het werkgeheugen en wordt binnen 10 minuten verwijderd; de overige gegevens worden niet afzonderlijk bewaard.',
              ],
              [
                'Meten van bezoek en laadsnelheid (Vercel Web Analytics en Speed Insights)',
                'Bezochte pagina, verwijzende website, browser, besturingssysteem, type apparaat, land (afgeleid uit het IP-adres) en metingen van de laadtijd',
                'Ons gerechtvaardigd belang bij inzicht in het gebruik van de website en een snelle website (art. 6 lid 1 sub f AVG).',
                'Bij Vercel, gedurende de bewaartermijn van de statistiekdiensten in ons abonnement; wij bekijken alleen geaggregeerde cijfers.',
              ],
              [
                'Tonen en beveiligen van de website',
                'Technische verzoekgegevens, zoals IP-adres en browsergegevens',
                'Ons gerechtvaardigd belang bij een betrouwbare en veilige website (art. 6 lid 1 sub f AVG).',
                'Gedurende een beperkte periode in de logbestanden van onze hostingprovider.',
              ],
              [
                'Voldoen aan wettelijke verplichtingen, zoals het bewaren van de fiscale administratie',
                'Gegevens die wij wettelijk moeten bewaren, bijvoorbeeld als een aanvraag tot een transactie leidt',
                'Wettelijke verplichting (art. 6 lid 1 sub c AVG).',
                'Gedurende de toepasselijke wettelijke bewaartermijn.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Wij gebruiken uw gegevens niet voor nieuwsbrieven of reclame, en wij baseren de verwerkingen in deze verklaring niet op toestemming. Waar wij ons op een gerechtvaardigd belang baseren, kunt u bezwaar maken tegen de verwerking (zie paragraaf 8).',
          },
        ],
      },
      {
        id: 'recipients',
        title: '4. Wie uw gegevens ontvangt',
        blocks: [
          {
            type: 'p',
            text: 'Wij maken gebruik van de volgende dienstverleners, die namens ons gegevens verwerken:',
          },
          {
            type: 'list',
            items: [
              'Vercel Inc.: hosting van de website en van de serverfunctie die het aanvraagformulier verwerkt, en de bezoekersstatistieken (Web Analytics en Speed Insights).',
              'Resend: verzending van formulierinzendingen per e-mail naar onze mailbox.',
              'Microsoft (Microsoft 365): onze e-mail- en mailboxdienst, waar aanvragen en correspondentie binnenkomen en worden bewaard.',
            ],
          },
          {
            type: 'p',
            text: 'Aanvragen via het contactformulier worden niet automatisch gedeeld met mogelijke kopers of leveranciers. Wij delen herleidbare persoonsgegevens niet met tegenpartijen zonder uw voorafgaande toestemming, tenzij een andere duidelijke wettelijke grondslag dat toestaat.',
          },
          {
            type: 'p',
            text: 'Binnen onze organisatie worden aanvragen behandeld door de personen die daarvoor verantwoordelijk zijn. Andere personen en dienstverleners hebben alleen toegang als dat voor hun werkzaamheden noodzakelijk is, met passende toegangsbeperkingen.',
          },
          {
            type: 'p',
            text: 'Wij kunnen persoonsgegevens ook verstrekken als wij daartoe wettelijk verplicht zijn, bijvoorbeeld aan een bevoegde autoriteit.',
          },
        ],
      },
      {
        id: 'transfers',
        title: '5. Doorgifte buiten de Europese Economische Ruimte',
        blocks: [
          {
            type: 'p',
            text: 'Onze hostingprovider Vercel Inc. en onze dienst voor e-mailverzending Resend zijn gevestigd in de Verenigde Staten. De serverfunctie die inzendingen van het aanvraagformulier verwerkt, draait in een datacenter in de Verenigde Staten, en pagina’s van de website worden via het wereldwijde netwerk van Vercel geleverd. Ook Microsoft kan, afhankelijk van haar diensten, gegevens buiten de Europese Economische Ruimte verwerken. Uw persoonsgegevens kunnen daardoor buiten de Europese Economische Ruimte worden verwerkt.',
          },
          {
            type: 'p',
            text: 'Waar persoonsgegevens worden doorgegeven naar een land buiten de Europese Economische Ruimte, baseren wij ons op de doorgiftemechanismen die de betreffende dienstverlener biedt, zoals certificering onder het EU-VS-gegevensprivacykader (Data Privacy Framework) of de standaardcontractbepalingen van de Europese Commissie.',
          },
        ],
      },
      {
        id: 'retention',
        title: '6. Hoe lang wij uw gegevens bewaren',
        blocks: [
          {
            type: 'p',
            text: 'Wij bewaren persoonsgegevens niet langer dan nodig is voor de doelen in paragraaf 3. De bewaartermijn per activiteit staat in de tabel hierboven. Gegevens die wij wettelijk moeten bewaren, zoals de fiscale administratie, bewaren wij gedurende de wettelijke termijn.',
          },
        ],
      },
      {
        id: 'security',
        title: '7. Beveiliging',
        blocks: [
          {
            type: 'p',
            text: 'Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen. Zo is de website alleen bereikbaar via een versleutelde verbinding (HTTPS), worden inzendingen op de server gecontroleerd, is het formulier beschermd tegen geautomatiseerd misbruik, bevatten onze logbestanden geen inhoud van aanvragen, worden toegangsgegevens voor de e-maildienst alleen op de server bewaard en is de toegang tot de mailboxen met aanvragen beperkt tot de personen die die toegang nodig hebben.',
          },
          {
            type: 'p',
            text: 'Geen enkele manier van verzenden of opslaan is volledig veilig. Vermoedt u dat uw gegevens zijn misbruikt, neem dan contact met ons op.',
          },
        ],
      },
      {
        id: 'rights',
        title: '8. Uw rechten',
        blocks: [
          {
            type: 'p',
            text: 'Op grond van de Algemene verordening gegevensbescherming (AVG) heeft u het recht om:',
          },
          {
            type: 'list',
            items: [
              'inzage te krijgen in de persoonsgegevens die wij van u hebben;',
              'onjuiste gegevens te laten corrigeren;',
              'uw gegevens te laten verwijderen;',
              'de verwerking te laten beperken;',
              'bezwaar te maken tegen verwerking op basis van ons gerechtvaardigd belang, om redenen die verband houden met uw specifieke situatie;',
              'gegevens die u aan ons heeft verstrekt in een gestructureerde, machineleesbare vorm te ontvangen (dataportabiliteit), als de verwerking is gebaseerd op een overeenkomst en geautomatiseerd plaatsvindt.',
            ],
          },
          {
            type: 'p',
            text: 'Als wij ooit om uw toestemming vragen, kunt u die op elk moment intrekken; dat heeft geen gevolgen voor verwerkingen van vóór de intrekking.',
          },
          {
            type: 'p',
            text: 'Om uw rechten uit te oefenen, kunt u e-mailen naar {email}. Wij kunnen u vragen uw identiteit te bevestigen. Wij reageren binnen de termijnen van de AVG, in de regel binnen een maand.',
          },
          {
            type: 'p',
            text: 'U heeft ook het recht een klacht in te dienen bij de {ap}.',
          },
        ],
      },
      {
        id: 'automated',
        title: '9. Geautomatiseerde verwerking',
        blocks: [
          {
            type: 'p',
            text: 'Het aanvraagformulier houdt inzendingen die geautomatiseerd lijken automatisch tegen, bijvoorbeeld als het verborgen spamveld is ingevuld of als er in korte tijd veel inzendingen vanaf hetzelfde IP-adres komen. Zulke inzendingen worden niet bezorgd. Denkt u dat uw aanvraag is tegengehouden, mail ons dan via {email}.',
          },
          {
            type: 'p',
            text: 'Controles van tegenpartijen worden op dit moment handmatig uitgevoerd. Wij gebruiken geen geautomatiseerde besluitvorming of profilering op basis van de gegevens die via deze website worden verzameld.',
          },
        ],
      },
      {
        id: 'cookies',
        title: '10. Cookies',
        blocks: [
          {
            type: 'p',
            text: 'Informatie over cookies en vergelijkbare technieken vindt u in ons {link:cookies}.',
          },
        ],
      },
      {
        id: 'changes',
        title: '11. Wijzigingen',
        blocks: [
          {
            type: 'p',
            text: 'Wij passen deze verklaring aan wanneer onze verwerkingen veranderen. De datum bovenaan deze pagina geeft aan wanneer zij voor het laatst is gewijzigd.',
          },
        ],
      },
    ],
    review: legalEn.privacy.review,
  },

  cookies: {
    metaTitle: 'Cookiebeleid | Valtrax Energy',
    metaDescription:
      'Welke cookies en vergelijkbare technieken de website van Valtrax Energy gebruikt, en hoe u die kunt beheren.',
    title: 'Cookiebeleid',
    intro: 'In dit beleid leggen wij uit welke cookies en vergelijkbare technieken deze website gebruikt.',
    updated: UPDATED,
    sections: [
      {
        id: 'what',
        title: '1. Wat cookies en vergelijkbare technieken zijn',
        blocks: [
          {
            type: 'p',
            text: 'Cookies zijn kleine tekstbestanden die een website in uw browser opslaat. Vergelijkbare technieken zijn onder meer local storage en session storage in de browser, trackingpixels en scripts die informatie van uw apparaat uitlezen. Ze kunnen bijvoorbeeld worden gebruikt om instellingen te onthouden, bezoeken te meten of advertenties te tonen.',
          },
        ],
      },
      {
        id: 'use',
        title: '2. Wat deze website gebruikt',
        blocks: [
          {
            type: 'p',
            text: 'Deze website plaatst geen cookies en slaat geen informatie op in de local storage of session storage van uw browser. Zij gebruikt geen advertenties of tracking van sociale media, en bevat geen ingesloten inhoud van derden, zoals video’s of kaarten. De lettertypen worden vanaf onze eigen website geladen.',
          },
          {
            type: 'p',
            text: 'Om bezoek en laadsnelheid te meten, gebruiken wij Vercel Web Analytics en Vercel Speed Insights. De scripts daarvan worden vanaf ons eigen domein geladen en sturen pagina- en apparaatgegevens en laadtijden naar onze hostingprovider Vercel. Zij plaatsen geen cookies en gebruiken geen browseropslag. Meer informatie vindt u in onze {link:privacy}.',
          },
          {
            type: 'p',
            text: 'Uw taalkeuze wordt niet opgeslagen: de taal volgt uit het adres van de pagina (Engelse pagina’s, of Nederlandse pagina’s onder /nl/).',
          },
          {
            type: 'p',
            text: 'Wanneer u een pagina laadt, stuurt uw browser wel standaard technische informatie, zoals uw IP-adres, naar onze hostingprovider. Dat is geen cookie; hoe wij daarmee omgaan, leest u in onze {link:privacy}.',
          },
        ],
      },
      {
        id: 'consent',
        title: '3. Toestemming',
        blocks: [
          {
            type: 'p',
            text: 'Deze website gebruikt geen cookies. De bezoekersstatistieken die hierboven zijn beschreven werken zonder cookies of browseropslag en worden alleen gebruikt voor geaggregeerde statistieken. Daarom tonen wij geen cookiebanner. Als wij in de toekomst technieken gaan gebruiken waarvoor toestemming nodig is, vragen wij vooraf uw toestemming en passen wij dit beleid aan.',
          },
        ],
      },
      {
        id: 'manage',
        title: '4. Cookies beheren in uw browser',
        blocks: [
          {
            type: 'p',
            text: 'Via de instellingen van uw browser kunt u cookies en andere opgeslagen websitegegevens bekijken en verwijderen, en ze in de toekomst blokkeren. In de helppagina’s van uw browser leest u hoe dat werkt.',
          },
        ],
      },
      {
        id: 'contact',
        title: '5. Contact en wijzigingen',
        blocks: [
          {
            type: 'p',
            text: 'Heeft u vragen over dit beleid, neem dan contact met ons op via {email}. Wij passen dit beleid aan wanneer de technieken op deze website veranderen. De datum bovenaan deze pagina geeft aan wanneer het voor het laatst is gewijzigd.',
          },
        ],
      },
    ],
    review: legalEn.cookies.review,
  },
};
