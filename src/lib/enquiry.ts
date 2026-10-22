import {
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
