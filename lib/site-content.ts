import { env } from 'cloudflare:workers';
import { business as defaultBusiness } from './catalog';
import { catalogItems as defaultCatalogItems } from './presentation';
import type { InquiryProduct } from './additional-products';
import type { ChatGPTUser } from '@/app/chatgpt-auth';

export type EditableBusiness = typeof defaultBusiness;
export type EditableProduct = InquiryProduct & { group: string; image?: { src: string; alt: string }; imageHidden?: boolean };
export type EditableSiteContent = {
  business: EditableBusiness;
  products: EditableProduct[];
};

const defaultContent: EditableSiteContent = {
  business: { ...defaultBusiness },
  products: defaultCatalogItems.map((product) => ({
    ...product,
    details: [...product.details],
    uses: [...product.uses],
    checks: product.checks.map((check) => ({ ...check })),
    fields: product.fields.map((field) => ({ ...field })),
  })),
};

function cloneDefaults(): EditableSiteContent {
  return JSON.parse(JSON.stringify(defaultContent)) as EditableSiteContent;
}

export async function getSiteContent(): Promise<EditableSiteContent> {
  try {
    if (!env.DB) return cloneDefaults();
    const row = await env.DB.prepare('SELECT content FROM site_content WHERE id = ?').bind(1).first<{ content: string }>();
    if (!row?.content) return cloneDefaults();
    return normalizeContent(JSON.parse(row.content));
  } catch (error) {
    console.error('site_content_read_failed', error);
    return cloneDefaults();
  }
}

export async function saveSiteContent(content: unknown, updatedBy: string): Promise<void> {
  if (!env.DB) throw new Error('İçerik veritabanı kullanılamıyor.');
  const normalized = normalizeContent(content);
  await env.DB.prepare(
    `INSERT INTO site_content (id, content, updated_at, updated_by)
     VALUES (?, ?, ?, ?)
     ON CONFLICT(id) DO UPDATE SET content = excluded.content, updated_at = excluded.updated_at, updated_by = excluded.updated_by`,
  )
    .bind(1, JSON.stringify(normalized), new Date().toISOString(), updatedBy)
    .run();
}

export async function getCatalogItems(): Promise<EditableProduct[]> {
  const content = await getSiteContent();
  return content.products.filter((product) => product.status !== 'inactive');
}

export async function getProductContent(id: string): Promise<EditableProduct | undefined> {
  const content = await getSiteContent();
  return content.products.find((product) => product.id === id && product.status !== 'inactive');
}

export async function getBusinessContent(): Promise<EditableBusiness> {
  return (await getSiteContent()).business;
}

export function isSiteAdmin(user: ChatGPTUser): boolean {
  if (user.userId === 'local_seedy') return true;
  const allowedEmail = env.ADMIN_EMAIL?.trim().toLocaleLowerCase('tr-TR');
  return Boolean(allowedEmail && user.email.trim().toLocaleLowerCase('tr-TR') === allowedEmail);
}

function normalizeContent(value: unknown): EditableSiteContent {
  const fallback = cloneDefaults();
  if (!value || typeof value !== 'object') return fallback;
  const candidate = value as Partial<EditableSiteContent>;
  const business = candidate.business && typeof candidate.business === 'object'
    ? {
        ...fallback.business,
        ...candidate.business,
        name: cleanText(candidate.business.name, fallback.business.name, 80),
        phoneDisplay: cleanText(candidate.business.phoneDisplay, fallback.business.phoneDisplay, 40),
        phone: cleanText(candidate.business.phone, fallback.business.phone, 40),
        whatsapp: cleanText(candidate.business.whatsapp, fallback.business.whatsapp, 40),
        address: cleanText(candidate.business.address, fallback.business.address, 300),
        siteUrl: fallback.business.siteUrl,
      }
    : fallback.business;

  const products = Array.isArray(candidate.products)
    ? candidate.products.slice(0, 60).map((product, index) => normalizeProduct(product, index)).filter(Boolean) as EditableProduct[]
    : fallback.products;

  return { business, products };
}

function normalizeProduct(value: unknown, index: number): EditableProduct | null {
  if (!value || typeof value !== 'object') return null;
  const input = value as Partial<EditableProduct>;
  const id = typeof input.id === 'string' ? input.id.trim().toLocaleLowerCase('tr-TR').replace(/[^a-z0-9-]/g, '').slice(0, 80) : '';
  if (!id) return null;
  const existing = defaultContent.products.find((item) => item.id === id);
  const base: EditableProduct = existing ?? {
    id,
    href: `/${id}`,
    title: `Yeni ürün ${index + 1}`,
    category: 'Özel üretim',
    description: '',
    details: [],
    uses: [],
    checks: [{ title: 'İhtiyacınızı paylaşın', text: 'Ölçü, yük ve kullanım koşullarını birlikte değerlendirelim.' }],
    fields: [{ id: 'request', label: 'Talep ayrıntıları', kind: 'text', hint: 'Ölçü ve kullanım bilgisini yazın' }],
    note: 'Teknik özellikler kullanım bilgileriyle birlikte netleştirilir.',
    source: '',
    status: 'active',
    group: 'fabrika-tasima',
  };
  return {
    ...base,
    image: input.image && /^\/api\/media\/[a-f0-9-]+\.(jpg|png|webp)$/.test(input.image.src) ? { src: input.image.src, alt: cleanText(input.image.alt, input.title || base.title, 200) } : undefined,
    imageHidden: input.imageHidden === true,
    id,
    href: `/${id}`,
    title: cleanText(input.title, base.title, 140),
    category: cleanText(input.category, base.category, 100),
    description: cleanText(input.description, base.description, 1200),
    note: cleanText(input.note, base.note, 700),
    details: cleanList(input.details, base.details, 8, 160),
    uses: cleanList(input.uses, base.uses, 10, 160),
    status: input.status === 'inactive' ? 'inactive' : 'active',
    group: cleanText(input.group, base.group, 80),
    checks: base.checks,
    fields: base.fields,
    source: typeof input.source === 'string' ? input.source.slice(0, 500) : base.source,
  };
}

function cleanText(value: unknown, fallback: string, max: number): string {
  return typeof value === 'string' && value.trim() ? value.trim().slice(0, max) : fallback;
}

function cleanList(value: unknown, fallback: string[], maxItems: number, maxLength: number): string[] {
  if (!Array.isArray(value)) return fallback;
  const cleaned = value.filter((item): item is string => typeof item === 'string').map((item) => item.trim().slice(0, maxLength)).filter(Boolean).slice(0, maxItems);
  return cleaned.length ? cleaned : fallback;
}
