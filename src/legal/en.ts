import type { LegalDoc } from './types';
import type { LegalPageKey } from '../i18n';

/**
 * English legal texts (primary). nl.ts must follow the same structure and meaning.
 * Based on the implementation reviewed on 2026-10-22 and the client's answers (Oct 2026).
 * Public text contains only confirmed facts; open checks live in `review` (internal).
 * Keep these texts in sync when the implementation or providers change.
 */
const UPDATED = '2026-10-22';

export const legalEn: Record<LegalPageKey, LegalDoc> = {
  terms: {
    metaTitle: 'General Terms and Conditions | Valtrax Energy',
    metaDescription:
      'Terms for the use of the Valtrax Energy website and for enquiries submitted through it, by Northbridge Trading B.V.',
    title: 'General Terms and Conditions',
    intro:
      'These terms cover the use of this website and the submission of enquiries. Commercial transactions are governed by separate written agreements.',
    updated: UPDATED,
    sections: [
      {
        id: 'company',
        title: '1. Who we are',
        blocks: [
          {
            type: 'p',
            text: 'This website is operated by {company}, trading as {brand} ("Valtrax Energy", "we", "us").',
          },
          { type: 'company' },
        ],
      },
      {
        id: 'scope',
        title: '2. Scope of these terms',
        blocks: [
          {
            type: 'p',
            text: 'These terms apply to the use of this website and to enquiries submitted through it. They are not a trading, brokerage or supply contract.',
          },
          {
            type: 'p',
            text: 'Commercial transactions require a separate written agreement. Commercial terms apply to a transaction only if they are included in, or expressly incorporated into, that agreement. Visiting this website does not mean that you accept any commercial conditions.',
          },
        ],
      },
      {
        id: 'activities',
        title: '3. Our activities and role',
        blocks: [
          {
            type: 'p',
            text: 'Valtrax Energy connects professional buyers and sellers of physical energy products. Our primary focus is commercial intermediation. Depending on the transaction and the agreed contractual arrangements, we may also participate directly in the purchase and resale of products, including back-to-back transactions.',
          },
          {
            type: 'p',
            text: 'Our role, authority, responsibilities and scope of services are agreed in writing for each transaction. Valtrax Energy acts as seller, supplier, title holder or authorised mandate holder only where the written agreement for that transaction expressly says so.',
          },
        ],
      },
      {
        id: 'website-information',
        title: '4. Website information and enquiries',
        blocks: [
          {
            type: 'p',
            text: 'This website is informational. Its content does not by itself constitute a binding offer, a guarantee of availability or a delivery obligation. Product references are general information and do not mean that a product is in stock or available.',
          },
          {
            type: 'p',
            text: 'Submitting an enquiry through the contact form does not create a purchase, supply, brokerage, agency or any other agreement, and does not oblige either party to proceed with a transaction.',
          },
        ],
      },
      {
        id: 'transactions',
        title: '5. Transaction agreements',
        blocks: [
          {
            type: 'p',
            text: 'Product specifications, quantities, prices, delivery, payment, transfer of ownership, commissions and all other transaction conditions are agreed separately for each transaction and recorded in writing. These website terms do not replace transaction documents.',
          },
        ],
      },
      {
        id: 'payment',
        title: '6. Payment and commission',
        blocks: [
          {
            type: 'list',
            items: [
              'Intermediation: any commission, any allocation of commission between parties, the payment timing and the currency are agreed in writing for each engagement.',
              'Direct purchase and resale: the price and payment terms are set out in the relevant purchase or sale agreement.',
            ],
          },
          {
            type: 'p',
            text: 'These website terms do not create any payment or commission obligation.',
          },
        ],
      },
      {
        id: 'termination',
        title: '7. Termination and cancellation',
        blocks: [
          {
            type: 'p',
            text: 'Termination, cancellation and any entitlement to commission are governed by the relevant written agreement. These website terms do not impose cancellation charges.',
          },
        ],
      },
      {
        id: 'commercial-information',
        title: '8. Commercial information',
        blocks: [
          {
            type: 'p',
            text: 'We handle commercial information that is shared with us carefully. We share it with others only where this is necessary and appropriate for the matter concerned, taking into account applicable law and any non-disclosure or non-circumvention agreement (NDA or NCNDA) agreed with the parties involved.',
          },
          {
            type: 'p',
            text: 'Using this website or submitting an enquiry does not by itself create an NDA or NCNDA. Where confidentiality obligations are needed, they are agreed separately in writing.',
          },
        ],
      },
      {
        id: 'counterparties',
        title: '9. Counterparty information and verification',
        blocks: [
          {
            type: 'p',
            text: 'When you submit an enquiry, please provide accurate information and make sure that you are authorised to act for the organisation you represent.',
          },
          {
            type: 'p',
            text: 'Before a transaction proceeds, it may be subject to appropriate counterparty checks and to applicable trade restrictions, such as sanctions and export controls. Valtrax Energy may decline to pursue an enquiry or transaction.',
          },
          {
            type: 'p',
            text: 'Please do not send passports, bank statements, proof of funds or other sensitive due-diligence documents through the website contact form. If such documents are needed at a later stage, we will agree a suitable and secure way of exchanging them with you.',
          },
        ],
      },
      {
        id: 'accuracy',
        title: '10. Accuracy, availability and liability',
        blocks: [
          {
            type: 'p',
            text: 'We take reasonable care to keep the information on this website accurate and up to date. It may nevertheless contain errors or become outdated, and we may change it at any time. We aim to keep the website available, but cannot guarantee uninterrupted or error-free access.',
          },
          {
            type: 'p',
            text: 'Decisions about a transaction should be based on the written agreement and confirmations for that transaction, not on general website information alone. Nothing in these terms limits or excludes liability where this is not permitted under mandatory applicable law.',
          },
        ],
      },
      {
        id: 'third-party-links',
        title: '11. Links to other websites',
        blocks: [
          {
            type: 'p',
            text: 'This website may link to websites operated by third parties. Those websites are operated by their respective providers, and their own terms and privacy policies apply. We have no control over their content, but if you notice a link that is incorrect or inappropriate, please let us know.',
          },
        ],
      },
      {
        id: 'intellectual-property',
        title: '12. Intellectual property',
        blocks: [
          {
            type: 'p',
            text: 'The texts, the Valtrax Energy name and logo and the design of this website are used by {company}. You may view, download and print pages for your own business purposes, such as evaluating a possible cooperation with us. Any other reproduction, publication or commercial use requires our prior written permission.',
          },
          {
            type: 'p',
            text: 'Some materials on this website are used under licence from third parties, such as the fonts Inter and Source Serif 4, which are licensed under the SIL Open Font License. These materials remain the property of their respective owners.',
          },
        ],
      },
      {
        id: 'privacy',
        title: '13. Privacy and cookies',
        blocks: [
          {
            type: 'p',
            text: 'Our {link:privacy} explains how we handle personal data submitted through this website. Our {link:cookies} explains which cookies and similar technologies this website uses.',
          },
        ],
      },
      {
        id: 'law',
        title: '14. Governing law and jurisdiction',
        blocks: [
          {
            type: 'p',
            text: 'These terms and the use of this website are governed by Dutch law. Disputes are submitted to the competent court in Rotterdam, the Netherlands, unless mandatory law provides otherwise. Agreements for individual transactions may contain different provisions on applicable law and dispute resolution.',
          },
        ],
      },
      {
        id: 'language',
        title: '15. Language',
        blocks: [
          {
            type: 'p',
            text: 'These terms are available in English and Dutch. English is our preferred language for international communication. Both versions have the same content.',
          },
        ],
      },
      {
        id: 'contact',
        title: '16. Questions, complaints and changes',
        blocks: [
          {
            type: 'p',
            text: 'If you have questions or a complaint about this website or these terms, please contact us at {email}.',
          },
          {
            type: 'p',
            text: 'We may update these terms. The date at the top of this page shows when they were last changed.',
          },
        ],
      },
    ],
    review: [],
  },

  privacy: {
    metaTitle: 'Privacy Policy | Valtrax Energy',
    metaDescription:
      'How Northbridge Trading B.V., trading as Valtrax Energy, handles personal data submitted through the website enquiry form.',
    title: 'Privacy Policy',
    intro:
      'This policy explains how we handle personal data when you visit this website or send us an enquiry, and which rights you have.',
    updated: UPDATED,
    sections: [
      {
        id: 'controller',
        title: '1. Who is responsible',
        blocks: [
          {
            type: 'p',
            text: '{company}, trading as {brand}, is the controller for the processing described in this policy: enquiries submitted through this website and the business correspondence that follows from them.',
          },
          { type: 'company' },
          {
            type: 'p',
            text: 'For questions about this policy or about your personal data, please contact us at {email}.',
          },
        ],
      },
      {
        id: 'data',
        title: '2. Which personal data we process',
        blocks: [
          {
            type: 'p',
            text: 'Enquiry form. When you send an enquiry, we receive the following information:',
          },
          {
            type: 'list',
            items: [
              'Required: full name, company, business email address, country, enquiry type (buyer, supplier or other), product of interest and your message.',
              'Optional: telephone number, volume and unit, delivery destination and preferred delivery basis.',
            ],
          },
          {
            type: 'p',
            text: 'We ask for the required fields because we need them to answer you: your name and company tell us who we are dealing with, your email address lets us reply, and your country, enquiry type, product and message allow us to understand and assess your request. The optional fields help us assess a request more quickly; you can leave them empty.',
          },
          {
            type: 'p',
            text: 'The form also sends the language of the page, the time at which you opened the form and a hidden field that should stay empty. We use these only to process the form and to recognise automated spam submissions.',
          },
          {
            type: 'p',
            text: 'Technical data. When you visit the website, your browser automatically sends technical information to our hosting provider, such as your IP address, the page requested, the time of the request and browser information. This is needed to deliver the website to you. Our hosting provider records such request data in its logs and keeps it for a limited period.',
          },
          {
            type: 'p',
            text: 'When you submit the form, your IP address is used to limit repeated submissions. It is kept only in the working memory of the server, is not stored with your enquiry or in our logs, and is discarded within 10 minutes. Our own server logs record only the outcome of a submission (for example sent or rejected), the enquiry type, the product category and the page language, not your name, email address or message.',
          },
          {
            type: 'p',
            text: 'Correspondence. If we reply and stay in contact, we also process the content of the correspondence and the contact details exchanged in it.',
          },
          {
            type: 'p',
            text: 'Please do not include special categories of personal data or identity documents, bank statements or other sensitive documents in your enquiry.',
          },
        ],
      },
      {
        id: 'purposes',
        title: '3. Purposes, legal bases and retention',
        blocks: [
          {
            type: 'table',
            caption: 'Overview of processing activities',
            head: ['Activity and purpose', 'Personal data', 'Legal basis', 'Retention'],
            rows: [
              [
                'Assessing and answering your enquiry',
                'Enquiry form data and correspondence',
                'Our legitimate interest in answering and following up business enquiries from professional parties (Art. 6(1)(f) GDPR). If you contact us on your own behalf to take steps towards a contract with us, the basis is taking those steps at your request (Art. 6(1)(b) GDPR).',
                'If no business relationship follows: deleted six months after the last substantive contact, unless a longer period is justified, for example because of a dispute, or required by law.',
              ],
              [
                'Maintaining a business relationship with the organisation you represent',
                'Contact details of contact persons and correspondence',
                'Our legitimate interest in maintaining business contacts and coordinating discussions with professional parties (Art. 6(1)(f) GDPR), or the performance of a contract with you (Art. 6(1)(b) GDPR) where you are the contracting party yourself.',
                'For as long as necessary for the purpose of the business relationship.',
              ],
              [
                'Protecting the enquiry form against spam and abuse',
                'IP address, time the form was opened, hidden spam-detection field',
                'Our legitimate interest in keeping the website and form secure and usable (Art. 6(1)(f) GDPR).',
                'The IP address is held in working memory only and discarded within 10 minutes; the other data is not stored separately.',
              ],
              [
                'Delivering and securing the website',
                'Technical request data, such as IP address and browser information',
                'Our legitimate interest in delivering the website reliably and securely (Art. 6(1)(f) GDPR).',
                'Kept in our hosting provider’s logs for a limited period.',
              ],
              [
                'Complying with legal obligations, such as keeping fiscal records',
                'Data that we are legally required to keep, for example when an enquiry leads to a transaction',
                'Compliance with a legal obligation (Art. 6(1)(c) GDPR).',
                'For the applicable statutory retention period.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'We do not use your data for newsletters or advertising, and we do not rely on consent for the processing described in this policy. Where we rely on legitimate interests, you can object to the processing (see section 8).',
          },
        ],
      },
      {
        id: 'recipients',
        title: '4. Who receives your data',
        blocks: [
          {
            type: 'p',
            text: 'We use the following service providers, which process data on our behalf:',
          },
          {
            type: 'list',
            items: [
              'Vercel Inc.: hosting of the website and of the server function that processes the enquiry form.',
              'Resend: sending form submissions by email to our mailbox.',
              'Microsoft (Microsoft 365): our email and mailbox service, where enquiries and correspondence are received and stored.',
            ],
          },
          {
            type: 'p',
            text: 'Enquiries submitted through the contact form are not automatically shared with potential buyers or suppliers. We do not share identifiable personal data with counterparties without your prior permission, unless another clear legal basis allows it.',
          },
          {
            type: 'p',
            text: 'Within our organisation, enquiries are handled by the persons responsible for them. Other persons and service providers have access only where this is necessary for their work, with appropriate access restrictions.',
          },
          {
            type: 'p',
            text: 'We may also disclose personal data where we are legally required to do so, for example to a competent authority.',
          },
        ],
      },
      {
        id: 'transfers',
        title: '5. Transfers outside the European Economic Area',
        blocks: [
          {
            type: 'p',
            text: 'Our hosting provider Vercel Inc. and our email-sending provider Resend are based in the United States. The server function that processes enquiry-form submissions runs in a data centre in the United States, and website pages are delivered through Vercel’s worldwide network. Microsoft may also process data outside the European Economic Area, depending on its services. Your personal data may therefore be processed outside the European Economic Area.',
          },
          {
            type: 'p',
            text: 'Where personal data is transferred to a country outside the European Economic Area, we rely on the transfer mechanisms offered by the provider concerned, such as certification under the EU-U.S. Data Privacy Framework or the European Commission’s standard contractual clauses.',
          },
        ],
      },
      {
        id: 'retention',
        title: '6. How long we keep your data',
        blocks: [
          {
            type: 'p',
            text: 'We keep personal data no longer than necessary for the purposes described in section 3. The retention period for each activity is listed in the table above. Data that we are legally required to keep, such as fiscal records, is retained for the statutory period.',
          },
        ],
      },
      {
        id: 'security',
        title: '7. Security',
        blocks: [
          {
            type: 'p',
            text: 'We take appropriate technical and organisational measures to protect personal data. For example, the website is only available over an encrypted connection (HTTPS), submissions are validated on the server, the form is protected against automated abuse, our logs do not contain the content of enquiries, access credentials for the email service are stored on the server only, and access to enquiry mailboxes is restricted to the persons who need it.',
          },
          {
            type: 'p',
            text: 'No method of transmission or storage is completely secure. If you suspect that your data has been misused, please contact us.',
          },
        ],
      },
      {
        id: 'rights',
        title: '8. Your rights',
        blocks: [
          {
            type: 'p',
            text: 'Under the General Data Protection Regulation you have the right to:',
          },
          {
            type: 'list',
            items: [
              'access the personal data we hold about you;',
              'have incorrect data rectified;',
              'have your data erased;',
              'have the processing restricted;',
              'object to processing based on our legitimate interests, on grounds relating to your particular situation;',
              'receive data that you provided to us in a structured, machine-readable format (data portability), where the processing is based on a contract and carried out by automated means.',
            ],
          },
          {
            type: 'p',
            text: 'If we ever ask for your consent, you can withdraw it at any time; this does not affect processing that took place before the withdrawal.',
          },
          {
            type: 'p',
            text: 'To exercise your rights, email us at {email}. We may ask you to confirm your identity. We respond within the time limits of the GDPR, normally within one month.',
          },
          {
            type: 'p',
            text: 'You also have the right to lodge a complaint with the Dutch Data Protection Authority, the {ap}.',
          },
        ],
      },
      {
        id: 'automated',
        title: '9. Automated processing',
        blocks: [
          {
            type: 'p',
            text: 'The enquiry form automatically holds back submissions that appear to be automated, for example when the hidden spam field is filled in or when many submissions come from the same IP address in a short time. Such submissions are not delivered. If you think your enquiry was blocked, please email us at {email}.',
          },
          {
            type: 'p',
            text: 'Counterparty checks are currently carried out manually. We do not use automated decision-making or profiling based on the data collected through this website.',
          },
        ],
      },
      {
        id: 'cookies',
        title: '10. Cookies',
        blocks: [
          {
            type: 'p',
            text: 'Information about cookies and similar technologies is in our {link:cookies}.',
          },
        ],
      },
      {
        id: 'changes',
        title: '11. Changes to this policy',
        blocks: [
          {
            type: 'p',
            text: 'We update this policy when our processing changes. The date at the top of this page shows when it was last changed.',
          },
        ],
      },
    ],
    review: [],
  },

  cookies: {
    metaTitle: 'Cookie Policy | Valtrax Energy',
    metaDescription:
      'Which cookies and similar technologies the Valtrax Energy website uses, and how you can manage them.',
    title: 'Cookie Policy',
    intro: 'This policy explains which cookies and similar technologies this website uses.',
    updated: UPDATED,
    sections: [
      {
        id: 'what',
        title: '1. What cookies and similar technologies are',
        blocks: [
          {
            type: 'p',
            text: 'Cookies are small text files that a website stores in your browser. Similar technologies include local storage and session storage in the browser, tracking pixels and scripts that read information from your device. They can be used, for example, to remember settings, to measure visits or to show advertising.',
          },
        ],
      },
      {
        id: 'use',
        title: '2. What this website uses',
        blocks: [
          {
            type: 'p',
            text: 'This website does not place cookies and does not store information in your browser’s local storage or session storage. It does not use analytics, advertising or social-media tracking, and it does not embed content from third parties such as videos or maps. The fonts are served from our own website.',
          },
          {
            type: 'p',
            text: 'Your language choice is not stored: the language follows from the address of the page (English pages, or Dutch pages under /nl/).',
          },
          {
            type: 'p',
            text: 'When you load a page, your browser does send standard technical information, such as your IP address, to our hosting provider. This is not a cookie; how we handle it is explained in our {link:privacy}.',
          },
        ],
      },
      {
        id: 'consent',
        title: '3. Consent',
        blocks: [
          {
            type: 'p',
            text: 'Because this website does not use cookies or similar technologies that require consent, we do not show a cookie banner. If we introduce such technologies in the future, we will ask for your consent before using them and update this policy.',
          },
        ],
      },
      {
        id: 'manage',
        title: '4. Managing cookies in your browser',
        blocks: [
          {
            type: 'p',
            text: 'You can view and delete cookies and other stored website data, and block them in future, through the settings of your browser. The help pages of your browser explain how.',
          },
        ],
      },
      {
        id: 'contact',
        title: '5. Contact and changes',
        blocks: [
          {
            type: 'p',
            text: 'If you have questions about this policy, please contact us at {email}. We update this policy when the technologies used on this website change. The date at the top of this page shows when it was last changed.',
          },
        ],
      },
    ],
    review: [],
  },
};
