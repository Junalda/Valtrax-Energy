import type { LegalDoc } from './types';
import type { LegalPageKey } from '../i18n';

/**
 * English legal texts (primary). nl.ts must follow the same structure.
 * Facts about the website's processing are based on the implementation as reviewed on
 * 2026-10-22 (enquiry form, Vercel hosting, Resend delivery code, no cookies/storage).
 * Keep these texts in sync when the implementation changes.
 */
const UPDATED = '2026-10-22';

export const legalEn: Record<LegalPageKey, LegalDoc> = {
  terms: {
    metaTitle: 'General Terms and Conditions | Valtrax Energy',
    metaDescription:
      'Terms for the use of the Valtrax Energy website and for enquiries submitted through it, by Northbridge Trading B.V.',
    title: 'General Terms and Conditions',
    intro:
      'These terms explain how you may use this website and what submitting an enquiry does and does not mean. They do not set out the terms of any energy or commodity transaction.',
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
            text: 'This website presents general business information about Valtrax Energy and allows professional parties to submit enquiries. These terms apply to the use of the website and to enquiries submitted through it.',
          },
          {
            type: 'p',
            text: 'These terms are not commercial terms for a transaction. Commercial terms apply to a transaction only if they are expressly included in, or incorporated by reference into, a separate written agreement for that transaction. Visiting this website does not mean that you accept any commercial conditions.',
          },
        ],
      },
      {
        id: 'activities',
        title: '3. Our activities and role',
        blocks: [
          {
            type: 'p',
            text: 'Valtrax Energy facilitates and coordinates international physical energy and commodity transactions between professional market participants.',
          },
          {
            type: 'p',
            text: 'Depending on the agreement for a specific transaction, Valtrax Energy may act as an intermediary, on an agency or commission basis, or on a back-to-back basis. Our role, authority, scope of services and responsibilities are recorded for each engagement. Valtrax Energy acts as seller, supplier, title holder or authorised mandate holder only where a written agreement for that transaction expressly says so.',
          },
        ],
      },
      {
        id: 'enquiries',
        title: '4. Website information and enquiries',
        blocks: [
          {
            type: 'p',
            text: 'Descriptions of products, markets and services on this website are general information. Unless expressly stated in an authorised written offer, they are not a binding offer and do not confirm that a product is available.',
          },
          {
            type: 'p',
            text: 'Submitting an enquiry through the contact form does not create a purchase, supply, agency, brokerage or any other agreement, and does not oblige either party to proceed with a transaction.',
          },
        ],
      },
      {
        id: 'transactions',
        title: '5. Transaction agreements',
        blocks: [
          {
            type: 'p',
            text: 'Product specifications, quantities, pricing, delivery, payment, transfer of title, commissions and all other transaction conditions are agreed separately for each transaction and recorded in writing.',
          },
          {
            type: 'p',
            text: 'These website terms do not replace transaction documents and do not apply to a transaction unless the agreement for that transaction expressly says so.',
          },
        ],
      },
      {
        id: 'counterparties',
        title: '6. Counterparty information and verification',
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
        id: 'website-information',
        title: '7. Accuracy and availability of the website',
        blocks: [
          {
            type: 'p',
            text: 'We take reasonable care to keep the information on this website accurate and up to date. It may nevertheless contain errors or become outdated, and we may change it at any time. Information about availability, specifications or other transaction-specific matters always requires separate written confirmation.',
          },
          {
            type: 'p',
            text: 'We aim to keep the website available, but cannot guarantee uninterrupted or error-free access.',
          },
          {
            type: 'p',
            text: '[[Liability for the use of this website: decide whether a liability clause is wanted for website use and, if so, its wording.]]',
          },
        ],
      },
      {
        id: 'third-party-links',
        title: '8. Links to other websites',
        blocks: [
          {
            type: 'p',
            text: 'This website may link to websites operated by third parties. Those websites are operated by their respective providers, and their own terms and privacy policies apply. We have no control over their content and are not responsible for it, but if you notice a link that is incorrect or inappropriate, please let us know.',
          },
        ],
      },
      {
        id: 'intellectual-property',
        title: '9. Intellectual property',
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
        title: '10. Privacy and cookies',
        blocks: [
          {
            type: 'p',
            text: 'Our {link:privacy} explains how we handle personal data submitted through this website. Our {link:cookies} explains which cookies and similar technologies this website uses.',
          },
        ],
      },
      {
        id: 'commercial-provisions',
        title: '11. Commercial provisions',
        blocks: [
          {
            type: 'p',
            text: 'The following matters are agreed in the written agreement for each transaction:',
          },
          {
            type: 'list',
            items: [
              '[[Payment and commission arrangements: confirm whether standard terms apply or whether this is always agreed per transaction.]]',
              '[[Liability and any financial cap on liability.]]',
              '[[Termination and cancellation.]]',
              '[[Confidentiality obligations.]]',
            ],
          },
        ],
      },
      {
        id: 'law-language',
        title: '12. Applicable law, disputes and language',
        blocks: [
          { type: 'p', text: '[[Governing law for these website terms and for enquiries.]]' },
          { type: 'p', text: '[[Competent court for disputes.]]' },
          {
            type: 'p',
            text: 'These terms are available in English and Dutch. [[Decide which language version prevails if the two versions differ.]]',
          },
        ],
      },
      {
        id: 'contact',
        title: '13. Questions, complaints and changes',
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
            text: 'Technical data. When you visit the website, your browser automatically sends technical information to our hosting provider, such as your IP address, the page requested, the time of the request and browser information. This is needed to deliver the website to you. [[Confirm which request data the hosting provider (Vercel) records in its logs for this website and for how long.]]',
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
                'For as long as needed to handle the enquiry. [[Retention period if no business relationship follows.]]',
              ],
              [
                'Maintaining a business relationship with the organisation you represent',
                'Contact details of contact persons and correspondence',
                'Our legitimate interest in maintaining business contacts and coordinating discussions with professional parties (Art. 6(1)(f) GDPR), or the performance of a contract with you (Art. 6(1)(b) GDPR) where you are the contracting party yourself.',
                'For the duration of the business relationship. [[Retention period after the relationship ends.]]',
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
                '[[Retention of hosting logs (see section 2).]]',
              ],
              [
                'Complying with legal obligations',
                'Data that we are legally required to keep, for example when an enquiry leads to a transaction',
                'Compliance with a legal obligation (Art. 6(1)(c) GDPR).',
                'For as long as the applicable legal obligation requires.',
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
            text: 'We use service providers that process data on our behalf:',
          },
          {
            type: 'list',
            items: [
              'Vercel Inc.: hosting of the website and of the server function that processes the enquiry form.',
              'Resend: delivery of form submissions by email to our mailbox. [[Confirm that Resend is used once the form is configured.]]',
              '[[Name the email provider that hosts the mailbox receiving the enquiries.]]',
            ],
          },
          {
            type: 'p',
            text: '[[Confirm that data processing agreements are in place with these providers, then state this here.]]',
          },
          {
            type: 'p',
            text: '[[Confirm whether and under which conditions enquiry details are shared with prospective transaction counterparties, and for which purpose.]]',
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
            text: 'Our hosting provider Vercel Inc. is based in the United States, and the server function that currently processes enquiry-form submissions runs in a data centre in the United States. Website pages are delivered through a worldwide network. Your personal data may therefore be processed outside the European Economic Area.',
          },
          {
            type: 'p',
            text: '[[Describe the verified transfer safeguard for each provider (for example certification under the EU-U.S. Data Privacy Framework or standard contractual clauses), including Resend and the mailbox provider.]]',
          },
        ],
      },
      {
        id: 'retention',
        title: '6. How long we keep your data',
        blocks: [
          {
            type: 'p',
            text: 'We keep personal data no longer than necessary for the purposes described in section 3. The retention period for each activity is listed in the table above. Data that we are legally required to keep is retained for the period required by law.',
          },
        ],
      },
      {
        id: 'security',
        title: '7. Security',
        blocks: [
          {
            type: 'p',
            text: 'We take appropriate technical and organisational measures to protect personal data. For example, the website is only available over an encrypted connection (HTTPS), submissions are validated on the server, the form is protected against automated abuse, our logs do not contain the content of enquiries, and access credentials for the email service are stored on the server only. [[Describe the organisational measures, for example who has access to the enquiry mailbox.]]',
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
            text: 'We do not use the data collected through this website for profiling. [[If counterparty checks use automated screening tools, for example sanctions-list screening, describe them here.]]',
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
          {
            type: 'p',
            text: '[[Before publication, verify on the live domain valtraxenergy.com that no cookies or browser storage are set, including by the hosting provider.]]',
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
  },
};
