import {
  buyerFrequencies,
  startRoles,
  supplierRoles,
  type BuyerFrequency,
  type StartRole,
  type SupplierRole,
  deliveryBases,
  enquiryTypes,
  productKeys,
  volumeUnits,
  type DeliveryBasis,
  type EnquiryType,
  type ProductKey,
  type VolumeUnit,
} from '../config/site';

/** Field limits shared by the form markup (maxlength) and server validation. */
export const limits = {
  name: 120,
  company: 160,
  email: 254,
  country: 80,
  message: 4000,
  messageMin: 20,
  volume: 40,
  destination: 160,
  phone: 40,
  companyWebsite: 200,
  location: 160,
  period: 120,
  notes: 2000,
  sourcePage: 200,
} as const;

/** Maximum accepted request body in bytes. */
export const MAX_BODY_BYTES = 16 * 1024;

/** Minimum time between page load and submit, in ms (only enforced when the client sent it). */
export const MIN_FILL_MS = 3000;

export type ErrorCode = 'required' | 'email' | 'tooLong' | 'tooShort' | 'invalid';

export interface Enquiry {
  lang: 'en' | 'nl';
  name: string;
  company: string;
  email: string;
  country: string;
  enquiryType: EnquiryType;
  product: ProductKey;
  message: string;
  volume?: string;
  unit?: VolumeUnit;
  destination?: string;
  basis?: DeliveryBasis;
  phone?: string;
}

export type ValidationResult =
  | { ok: true; data: Enquiry }
  | { ok: false; errors: Record<string, ErrorCode> };

// Pragmatic address check: one @, no whitespace, a dot in the domain.
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;
const PHONE_RE = /^[+()\d\s./-]{5,}$/;

/** Collapse control characters (incl. CR/LF) so values are safe in single-line contexts. */
function singleLine(value: string): string {
  return value.replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim();
}

/** Keep line breaks and tabs in multi-line text, drop other control characters. */
function multiLine(value: string): string {
  return value
    .replace(/\r\n?/g, '\n')
    .replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g, '')
    .replace(/\n{4,}/g, '\n\n\n')
    .trim();
}

function str(input: Record<string, unknown>, key: string): string {
  const v = input[key];
  return typeof v === 'string' ? v : '';
}

function oneOf<T extends string>(list: readonly T[], value: string): value is T {
  return (list as readonly string[]).includes(value);
}

export function validateEnquiry(input: Record<string, unknown>): ValidationResult {
  const errors: Record<string, ErrorCode> = {};

  const requiredText = (key: 'name' | 'company' | 'email' | 'country') => {
    const value = singleLine(str(input, key));
    if (!value) errors[key] = 'required';
    else if (value.length > limits[key]) errors[key] = 'tooLong';
    return value;
  };
  const optionalText = (key: 'volume' | 'destination' | 'phone') => {
    const value = singleLine(str(input, key));
    if (value.length > limits[key]) errors[key] = 'tooLong';
    return value || undefined;
  };

  const name = requiredText('name');
  const company = requiredText('company');
  const email = requiredText('email');
  if (email && !errors.email && !EMAIL_RE.test(email)) errors.email = 'email';
  const country = requiredText('country');

  const enquiryType = str(input, 'enquiryType');
  if (!enquiryType) errors.enquiryType = 'required';
  else if (!oneOf(enquiryTypes, enquiryType)) errors.enquiryType = 'invalid';

  const product = str(input, 'product');
  if (!product) errors.product = 'required';
  else if (!oneOf(productKeys, product)) errors.product = 'invalid';

  const message = multiLine(str(input, 'message'));
  if (!message) errors.message = 'required';
  else if (message.length < limits.messageMin) errors.message = 'tooShort';
  else if (message.length > limits.message) errors.message = 'tooLong';

  const volume = optionalText('volume');
  const destination = optionalText('destination');
  const phone = optionalText('phone');
  if (phone && !errors.phone && !PHONE_RE.test(phone)) errors.phone = 'invalid';

  const unitRaw = str(input, 'unit');
  if (unitRaw && !oneOf(volumeUnits, unitRaw)) errors.unit = 'invalid';
  const basisRaw = str(input, 'basis');
  if (basisRaw && !oneOf(deliveryBases, basisRaw)) errors.basis = 'invalid';

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      lang: str(input, 'lang') === 'nl' ? 'nl' : 'en',
      name,
      company,
      email,
      country,
      enquiryType: enquiryType as EnquiryType,
      product: product as ProductKey,
      message,
      volume,
      unit: volume && unitRaw ? (unitRaw as VolumeUnit) : undefined,
      destination,
      basis: basisRaw ? (basisRaw as DeliveryBasis) : undefined,
      phone,
    },
  };
}

// --- Start page (/start) ----------------------------------------------------------------
// A separate, shorter form with a buyer and a supplier route. Field names are prefixed per
// route so both groups can be rendered without JavaScript; only the chosen route is read.

export interface StartEnquiry {
  lang: 'en' | 'nl';
  role: StartRole;
  sourcePage: string;
  name: string;
  company: string;
  email: string;
  companyWebsite?: string;
  country: string;
  product: ProductKey;
  volume: string;
  unit: VolumeUnit;
  location: string;
  /** Buyer: one-off or recurring. */
  frequency?: BuyerFrequency;
  /** Buyer: preferred timing. Supplier: availability period. */
  period?: string;
  /** Supplier: role in the transaction. */
  supplierRole?: SupplierRole;
  notes?: string;
}

export type StartValidationResult =
  | { ok: true; data: StartEnquiry }
  | { ok: false; errors: Record<string, ErrorCode> };

/** Required fields per route, used by the page script (aria-required) and the server. */
export const startRequired = {
  buyer: ['buyerVolume', 'buyerUnit', 'buyerLocation'],
  supplier: ['supplierVolume', 'supplierUnit', 'supplierLocation', 'supplierRole'],
} as const;

// A web address or bare domain such as company.com; no spaces or angle brackets.
const WEBSITE_RE = /^(https?:\/\/)?[^\s<>"]+\.[^\s<>"]{2,}$/i;

export function validateStartEnquiry(input: Record<string, unknown>): StartValidationResult {
  const errors: Record<string, ErrorCode> = {};
  const text = (key: string, max: number, required: boolean, multi = false) => {
    const raw = str(input, key);
    const value = multi ? multiLine(raw) : singleLine(raw);
    if (!value) {
      if (required) errors[key] = 'required';
      return undefined;
    }
    if (value.length > max) errors[key] = 'tooLong';
    return value;
  };
  const choice = <T extends string>(key: string, list: readonly T[], required: boolean): T | undefined => {
    const value = str(input, key);
    if (!value) {
      if (required) errors[key] = 'required';
      return undefined;
    }
    if (!oneOf(list, value)) {
      errors[key] = 'invalid';
      return undefined;
    }
    return value;
  };

  const role = choice('role', startRoles, true);
  const name = text('name', limits.name, true);
  const company = text('company', limits.company, true);
  const email = text('email', limits.email, true);
  if (email && !errors.email && !EMAIL_RE.test(email)) errors.email = 'email';
  const companyWebsite = text('companyWebsite', limits.companyWebsite, false);
  if (companyWebsite && !errors.companyWebsite && !WEBSITE_RE.test(companyWebsite)) errors.companyWebsite = 'invalid';
  const country = text('country', limits.country, true);
  const product = choice('product', productKeys, true);

  let fields: Pick<StartEnquiry, 'volume' | 'unit' | 'location' | 'frequency' | 'period' | 'supplierRole' | 'notes'> | undefined;
  if (role) {
    const p = role; // 'buyer' | 'supplier': field-name prefix
    const volume = text(`${p}Volume`, limits.volume, true);
    const unit = choice(`${p}Unit`, volumeUnits, true);
    const location = text(`${p}Location`, limits.location, true);
    const period = text(role === 'buyer' ? 'buyerTiming' : 'supplierPeriod', limits.period, false);
    const notes = text(`${p}Notes`, limits.notes, false, true);
    const frequency = role === 'buyer' ? choice('buyerFrequency', buyerFrequencies, false) : undefined;
    const supplierRole = role === 'supplier' ? choice('supplierRole', supplierRoles, true) : undefined;
    if (volume && unit && location) fields = { volume, unit, location, period, notes, frequency, supplierRole };
  }

  const source = singleLine(str(input, 'sourcePage'));
  const sourcePage = source.startsWith('/') && source.length <= limits.sourcePage ? source : '/start/';

  if (Object.keys(errors).length > 0 || !role || !name || !company || !email || !country || !product || !fields) {
    return { ok: false, errors };
  }
  return {
    ok: true,
    data: {
      lang: str(input, 'lang') === 'nl' ? 'nl' : 'en',
      role,
      sourcePage,
      name,
      company,
      email,
      companyWebsite,
      country,
      product,
      ...fields,
    },
  };
}
