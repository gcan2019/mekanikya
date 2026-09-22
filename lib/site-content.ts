import { env } from 'cloudflare:workers';
import { business as defaultBusiness } from './catalog';
import { catalogItems as defaultCatalogItems } from './presentation';
import type { InquiryProduct } from './additional-products';
import type { ChatGPTUser } from '@/app/chatgpt-auth';
import { getDefaultProductOptions } from './default-product-options';

export type ProductImageRole = 'both' | 'primary' | 'gallery';

export type ProductImageItem = {
  src: string;
  alt: string;
  role?: ProductImageRole;
  verified?: boolean;
  sortOrder?: number;
};

export type ProductOptionItem = {
  title: string;
  subtitle?: string;
  desc: string;
  image?: { src: string; alt: string };
  isCustomRequest?: boolean;
};

export type EditableBusiness = typeof defaultBusiness & {
  workingHours?: string;
  headerCtaText?: string;
  email?: string;
};

export type EditableProduct = InquiryProduct & {
  group: string;
  image?: { src: string; alt: string; verified?: boolean };
  imageHidden?: boolean;
  gallery?: ProductImageItem[];
  options?: ProductOptionItem[];
  sortOrder?: number;
};

export type EditableCaseStudy = {
  id: string;
  title: string;
  category: string;
  summary: string;
  problem?: string;
  solution?: string;
  result?: string;
  status: 'active' | 'inactive';
  coverImage?: { src: string; alt: string };
  gallery?: { src: string; alt: string }[];
  sortOrder?: number;
};

export type EditableSiteContent = {
  business: EditableBusiness;
  products: EditableProduct[];
  caseStudies?: EditableCaseStudy[];
};

export const defaultCaseStudies: EditableCaseStudy[] = [
  {
    id: 'sebze-dograma-bicaklari',
    title: 'Sebze doğrama makinesi bıçak yenileme',
    category: 'Makine Restorasyonu',
    summary: 'Sebze doğrama makinesinin bıçakları değiştirildi. Makine ve kesim disklerine ait gerçek çalışma fotoğraflarını inceleyin.',
    problem: 'Gıda işletmesinde kullanılan sebze doğrama makinesinin aşınmış bıçakları ve körelmiş kesim diskleri nedeniyle doğrama kalitesinin düşmesi ve fire oranının artması.',
    solution: 'Makine gövdesi ve kesim diskleri incelenerek ölçülendirildi. Numune disklere uygun yüksek kaliteli paslanmaz çelikten yeni bıçak setleri imal edildi ve montajı tamamlandı.',
    result: 'Makinenin kesim hassasiyeti ve verimi fabrika ayarlarına döndürüldü; yeni makine maliyetinden tasarruf sağlandı.',
    status: 'active',
    coverImage: {
      src: '/images/calisma-sebze-dograma/bicak-seti.jpg',
      alt: 'Sebze doğrama makinesi bıçak setleri',
    },
    gallery: [
      { src: '/images/calisma-sebze-dograma/makine.jpg', alt: 'Sebze doğrama makinesinin bıçak bölümü' },
      { src: '/images/calisma-sebze-dograma/bicak-seti.jpg', alt: 'Sebze doğrama makinesine ait kesim diskleri ve bıçaklar' },
      { src: '/images/calisma-sebze-dograma/diskler.jpg', alt: 'Sebze doğrama makinesinin yuvarlak kesim diskleri' },
    ],
    sortOrder: 1,
  },
];

const defaultContent: EditableSiteContent = {
  business: {
    ...defaultBusiness,
    workingHours: 'Pazartesi – Cumartesi 08:30 – 18:30',
    headerCtaText: 'Teklif Talebi',
    email: 'info@ofirma.com',
  },
  products: defaultCatalogItems.map((product, idx) => ({
    ...product,
    sortOrder: idx + 1,
    details: [...product.details],
    uses: [...product.uses],
    checks: product.checks.map((check) => ({ ...check })),
    fields: product.fields.map((field) => ({ ...field })),
    options: getDefaultProductOptions(product.id),
  })),
  caseStudies: defaultCaseStudies,
};

let memoryDevContent: EditableSiteContent | null = null;

function cloneDefaults(): EditableSiteContent {
  return JSON.parse(JSON.stringify(defaultContent)) as EditableSiteContent;
}

export async function getSiteContent(): Promise<EditableSiteContent> {
  try {
    if (!env?.DB) return memoryDevContent ? JSON.parse(JSON.stringify(memoryDevContent)) : cloneDefaults();
    const row = await env.DB.prepare('SELECT content FROM site_content WHERE id = ?').bind(1).first<{ content: string }>();
    if (!row?.content) return cloneDefaults();
    return normalizeContent(JSON.parse(row.content));
  } catch (error) {
    console.error('site_content_read_failed', error);
    return memoryDevContent ? JSON.parse(JSON.stringify(memoryDevContent)) : cloneDefaults();
  }
}

export async function saveSiteContent(content: unknown, updatedBy: string): Promise<void> {
  const normalized = normalizeContent(content);
  if (!env?.DB) {
    memoryDevContent = normalized;
    return;
  }
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
  return content.products
    .filter((product) => product.status !== 'inactive')
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export async function getProductContent(id: string): Promise<EditableProduct | undefined> {
  const content = await getSiteContent();
  return content.products.find((product) => product.id === id && product.status !== 'inactive');
}

export async function getBusinessContent(): Promise<EditableBusiness> {
  return (await getSiteContent()).business;
}

export async function getCaseStudies(): Promise<EditableCaseStudy[]> {
  const content = await getSiteContent();
  const list = content.caseStudies && content.caseStudies.length > 0 ? content.caseStudies : defaultCaseStudies;
  return list
    .filter((study) => study.status !== 'inactive')
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export async function getCaseStudy(id: string): Promise<EditableCaseStudy | undefined> {
  const studies = await getCaseStudies();
  return studies.find((study) => study.id === id);
}

export function isSiteAdmin(user: ChatGPTUser): boolean {
  const allowedEmail = (env?.ADMIN_EMAIL || process.env.ADMIN_EMAIL)?.trim().toLocaleLowerCase('tr-TR');
  if (!allowedEmail) return false;
  return user.email.trim().toLocaleLowerCase('tr-TR') === allowedEmail;
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
        workingHours: cleanText(candidate.business.workingHours, fallback.business.workingHours ?? 'Pazartesi – Cumartesi 08:30 – 18:30', 100),
        headerCtaText: cleanText(candidate.business.headerCtaText, fallback.business.headerCtaText ?? 'Teklif Talebi', 40),
        email: cleanText(candidate.business.email, fallback.business.email ?? 'info@ofirma.com', 100),
        siteUrl: fallback.business.siteUrl,
      }
    : fallback.business;

  let products = Array.isArray(candidate.products)
    ? (candidate.products.slice(0, 100).map((product, index) => normalizeProduct(product, index)).filter(Boolean) as EditableProduct[])
    : fallback.products;

  // Veri bütünlüğü koruması: Boş liste ile tüm kataloğun kazara silinmesini engelle
  if (!products || products.length === 0) {
    products = fallback.products;
  } else {
    // 8 temel fabrika ürününün kaybolmasını engelle; eksik olanları inactive olarak koru
    const existingIds = new Set(products.map((p) => p.id));
    for (const core of fallback.products) {
      if (!existingIds.has(core.id)) {
        products.push({ ...core, status: 'inactive' });
      }
    }
  }

  let caseStudies = Array.isArray(candidate.caseStudies)
    ? (candidate.caseStudies.slice(0, 50).map((cs, index) => normalizeCaseStudy(cs, index)).filter(Boolean) as EditableCaseStudy[])
    : (fallback.caseStudies ?? defaultCaseStudies);

  if (!caseStudies || caseStudies.length === 0) {
    caseStudies = fallback.caseStudies ?? defaultCaseStudies;
  }

  return { business, products, caseStudies };
}

function normalizeChecks(value: unknown, fallback: { title: string; text: string }[]): { title: string; text: string }[] {
  if (!Array.isArray(value)) return fallback;
  const cleaned = value
    .filter((item): item is { title?: unknown; text?: unknown } => Boolean(item && typeof item === 'object'))
    .map((item) => ({
      title: cleanText(item.title, '', 140),
      text: cleanText(item.text, '', 500),
    }))
    .filter((item) => item.title.trim() || item.text.trim());
  return cleaned.length ? cleaned : fallback;
}

function normalizeFields(value: unknown, fallback: InquiryProduct['fields']): InquiryProduct['fields'] {
  if (!Array.isArray(value)) return fallback;
  const cleaned: InquiryProduct['fields'] = value
    .filter((item): item is { id?: unknown; label?: unknown; kind?: unknown; unit?: unknown; hint?: unknown } => Boolean(item && typeof item === 'object'))
    .map((item, idx) => {
      const rawId = typeof item.id === 'string' ? item.id.trim().replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 40) : '';
      const id = rawId || `alan_${idx + 1}`;
      const label = cleanText(item.label, `Alan ${idx + 1}`, 100);
      const kind: 'text' | 'number' = item.kind === 'number' ? 'number' : 'text';
      const unit = typeof item.unit === 'string' && item.unit.trim() ? item.unit.trim().slice(0, 30) : undefined;
      const hint = typeof item.hint === 'string' && item.hint.trim() ? item.hint.trim().slice(0, 200) : '';
      return { id, label, kind, ...(unit ? { unit } : {}), hint };
    });
  return cleaned.length ? cleaned : fallback;
}

function normalizeGallery(value: unknown): ProductImageItem[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const items = value
    .filter((item): item is { src?: unknown; alt?: unknown; role?: unknown; verified?: unknown; sortOrder?: unknown } => Boolean(item && typeof item === 'object'))
    .map((item, idx) => {
      const src = typeof item.src === 'string' ? item.src.trim() : '';
      if (!src || (!src.startsWith('/') && !src.startsWith('https://') && !src.startsWith('data:image/'))) return null;
      const role: ProductImageRole = item.role === 'primary' || item.role === 'gallery' ? item.role : 'both';
      return {
        src: src.startsWith('data:image/') ? src.slice(0, 3 * 1024 * 1024) : src.slice(0, 500),
        alt: cleanText(item.alt, '', 200),
        role,
        verified: item.verified === true,
        sortOrder: typeof item.sortOrder === 'number' ? item.sortOrder : idx + 1,
      };
    })
    .filter(Boolean) as ProductImageItem[];
  return items.length ? items : undefined;
}

function normalizeOptions(value: unknown): ProductOptionItem[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const items = value
    .filter((item): item is { title?: unknown; subtitle?: unknown; desc?: unknown; image?: unknown; isCustomRequest?: unknown } => Boolean(item && typeof item === 'object'))
    .map((item) => {
      const title = cleanText(item.title, '', 140);
      if (!title) return null;
      const subtitle = typeof item.subtitle === 'string' ? item.subtitle.trim().slice(0, 100) : undefined;
      const desc = cleanText(item.desc, '', 600);
      const isCustomRequest = item.isCustomRequest === true;
      let image: { src: string; alt: string } | undefined = undefined;
      if (item.image && typeof item.image === 'object') {
        const img = item.image as { src?: unknown; alt?: unknown };
        if (typeof img.src === 'string' && (img.src.startsWith('/') || img.src.startsWith('https://') || img.src.startsWith('data:image/'))) {
          image = {
            src: img.src.startsWith('data:image/') ? img.src.slice(0, 3 * 1024 * 1024) : img.src.slice(0, 500),
            alt: cleanText(img.alt, title, 200),
          };
        }
      }
      return { title, subtitle, desc, image, isCustomRequest };
    })
    .filter(Boolean) as ProductOptionItem[];
  return items;
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
    sortOrder: index + 1,
    options: getDefaultProductOptions(id),
  };

  const gallery = normalizeGallery(input.gallery);
  let image = base.image;
  if (input.image && typeof input.image.src === 'string' && (input.image.src.startsWith('/') || input.image.src.startsWith('https://') || input.image.src.startsWith('data:image/'))) {
    image = {
      src: input.image.src.startsWith('data:image/') ? input.image.src.slice(0, 3 * 1024 * 1024) : input.image.src.slice(0, 500),
      alt: cleanText(input.image.alt, input.title || base.title, 200),
      verified: input.image.verified === true,
    };
  } else if (gallery && gallery.length > 0) {
    const primary = gallery.find((g) => g.role === 'primary' || g.role === 'both') || gallery[0];
    image = {
      src: primary.src,
      alt: primary.alt || cleanText(input.title, base.title, 200),
      verified: primary.verified === true,
    };
  } else if (input.image === null || (input.image === undefined && 'image' in input)) {
    image = undefined;
  }

  return {
    ...base,
    id,
    href: `/${id}`,
    title: cleanText(input.title, base.title, 140),
    category: cleanText(input.category, base.category, 100),
    description: cleanText(input.description, base.description, 1200),
    note: cleanText(input.note, base.note, 700),
    details: cleanList(input.details, base.details, 15, 200),
    uses: cleanList(input.uses, base.uses, 15, 200),
    checks: normalizeChecks(input.checks, base.checks),
    fields: normalizeFields(input.fields, base.fields),
    status: input.status === 'inactive' ? 'inactive' : 'active',
    group: cleanText(input.group, base.group, 80),
    sortOrder: typeof input.sortOrder === 'number' ? input.sortOrder : index + 1,
    image,
    imageHidden: input.imageHidden === true,
    gallery,
    options: Array.isArray(input.options)
      ? normalizeOptions(input.options)
      : (base.options ?? getDefaultProductOptions(id)),
    source: typeof input.source === 'string' ? input.source.slice(0, 500) : base.source,
  };
}

function normalizeCaseStudy(value: unknown, index: number): EditableCaseStudy | null {
  if (!value || typeof value !== 'object') return null;
  const input = value as Partial<EditableCaseStudy>;
  const id = typeof input.id === 'string' ? input.id.trim().toLocaleLowerCase('tr-TR').replace(/[^a-z0-9-]/g, '').slice(0, 80) : '';
  if (!id) return null;
  return {
    id,
    title: cleanText(input.title, `Örnek Çalışma ${index + 1}`, 160),
    category: cleanText(input.category, 'Makine Restorasyonu', 100),
    summary: cleanText(input.summary, '', 800),
    problem: typeof input.problem === 'string' ? input.problem.trim().slice(0, 1000) : undefined,
    solution: typeof input.solution === 'string' ? input.solution.trim().slice(0, 1000) : undefined,
    result: typeof input.result === 'string' ? input.result.trim().slice(0, 1000) : undefined,
    status: input.status === 'inactive' ? 'inactive' : 'active',
    coverImage: input.coverImage && typeof input.coverImage.src === 'string' && (input.coverImage.src.startsWith('/') || input.coverImage.src.startsWith('https://') || input.coverImage.src.startsWith('data:image/'))
      ? { src: input.coverImage.src.startsWith('data:image/') ? input.coverImage.src.slice(0, 3 * 1024 * 1024) : input.coverImage.src.slice(0, 500), alt: cleanText(input.coverImage.alt, input.title || '', 200) }
      : undefined,
    gallery: Array.isArray(input.gallery)
      ? input.gallery
          .filter((img): img is { src: string; alt: string } => Boolean(img && typeof (img as { src?: unknown }).src === 'string'))
          .map((img) => ({ src: img.src.startsWith('data:image/') ? img.src.slice(0, 3 * 1024 * 1024) : img.src.slice(0, 500), alt: cleanText(img.alt, '', 200) }))
      : undefined,
    sortOrder: typeof input.sortOrder === 'number' ? input.sortOrder : index + 1,
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

