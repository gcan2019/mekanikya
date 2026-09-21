import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { additionalProducts } from '@/lib/additional-products';
import { business } from '@/lib/catalog';
import ProductInquiry from '@/components/product-inquiry';
import ProductImage from '@/components/product-image';
import ProfileCartOptions from '@/components/profile-cart-options';
import FactoryProductOptions, { hasFactoryGuide } from '@/components/factory-product-options';
import { hasVerifiedProductImage } from '@/lib/verified-product-images';
import { getBusinessContent, getProductContent } from '@/lib/site-content';

type Props = { params: Promise<{ product: string }> };

export function generateStaticParams() {
  return additionalProducts
    .filter((product) => product.status !== 'inactive')
    .map((product) => ({ product: product.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: id } = await params;
  const product = await getProductContent(id);
  if (!product) return { title: 'Ürün bulunamadı | ofirma' };
  if (product.status === 'inactive') {
    return {
      title: 'Ürün bulunamadı | ofirma',
      robots: { index: false, follow: false },
    };
  }
  return {
    title: product.title + ' | ofirma',
    description: product.description,
    alternates: { canonical: business.siteUrl + product.href },
  };
}

export default async function ProductPage({ params }: Props) {
  const { product: id } = await params;
  const [originalProduct, business] = await Promise.all([getProductContent(id), getBusinessContent()]);
  if (!originalProduct) notFound();
  if (originalProduct.status === 'inactive') notFound();

  const product = hasFactoryGuide(id)
    ? {
        ...originalProduct,
        fields: [
          {
            id: 'preferredLayout',
            label: 'İlgilendiğiniz düzen',
            kind: 'text' as const,
            hint: 'Örneğin bölmeli kasa; kararsızsanız boş bırakabilirsiniz',
          },
          ...originalProduct.fields,
        ],
      }
    : originalProduct;

  return (
    <main id="main">
      <div className="wrap product-breadcrumb">
        <a href="/">Ana Sayfa</a>
        <span>/</span>
        <a href="/urunler">Ürünlerimiz</a>
        <span>/</span>
        <span>{product.title}</span>
      </div>

      <section className={'wrap manufacturer-product' + ((!product.imageHidden && Boolean(product.image || hasVerifiedProductImage(product.id))) ? '' : ' manufacturer-product-no-image')}>
        <ProductImage id={product.id} title={product.title} image={product.image} imageHidden={product.imageHidden} priority />
        <div className="manufacturer-product-copy">
          <p className="overline">{product.category.toLocaleUpperCase('tr-TR')}</p>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <ul>
            {product.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <a className="cta" href="#teklif">
            Bu ürün için teklif isteyin <ArrowUpRight size={20} />
          </a>
          <a className="product-phone" href={'tel:' + business.phone}>
            Bilgi için: {business.phoneDisplay}
          </a>
        </div>
      </section>

      <nav className="product-section-nav wrap" aria-label="Ürün bölümleri">
        {(id === 'profil-tasima-arabasi' || hasFactoryGuide(id)) && (
          <>
            <a href="#modeller">Düzen seçenekleri</a>
            <a href="#secim">Seçim rehberi</a>
          </>
        )}
        <a href="#bilgiler">Ürün bilgileri</a>
        <a href="#kullanim">Kullanım alanları</a>
        <a href="#teklif">Teklif talebi</a>
      </nav>

      {id === 'profil-tasima-arabasi' && <ProfileCartOptions />}
      <FactoryProductOptions id={id} />

      <section className="equipment-info wrap" id="bilgiler">
        <div className="section-head">
          <p className="overline">TEKNİK BİLGİLER</p>
          <h2>
            İhtiyacınıza göre
            <br />
            değerlendirelim.
          </h2>
          <p>Ürünün ölçüleri, yükü ve kullanım koşulları teklifin temelini oluşturur.</p>
        </div>
        <div className="equipment-checks">
          {product.checks.map((check, i) => (
            <article key={check.title}>
              <span>0{i + 1}</span>
              <h3>{check.title}</h3>
              <p>{check.text}</p>
            </article>
          ))}
        </div>
        <div className="equipment-note">
          <p>{product.note}</p>
        </div>
        <div className="use-cases" id="kullanim">
          <span>İlgili kullanım alanları</span>
          {product.uses.map((use) => (
            <span key={use}>{use}</span>
          ))}
        </div>
      </section>

      {/* Services Banner */}
      <section className="wrap" style={{ margin: '36px auto' }}>
        <div
          style={{
            background: '#edf2f6',
            border: '1px solid #d0dbe3',
            padding: '24px 28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <p className="overline" style={{ marginBottom: '4px' }}>
              ÖZEL MÜHENDİSLİK VE REVİZYON
            </p>
            <h3 style={{ fontSize: '18px', margin: 0, color: '#122d40' }}>
              Özel makine revizyonu, tersine mühendislik veya numuneden parça üretimi
            </h3>
            <p style={{ margin: '6px 0 0', fontSize: '14px', color: '#526977' }}>
              Çiziminiz olmasa da numune veya parça fotoğrafıyla başlayabiliriz.
            </p>
          </div>
          <a className="cta" href="/hizmetler" style={{ whiteSpace: 'nowrap' }}>
            Hizmetlerimizi inceleyin <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section className="quote-section wrap" id="teklif">
        <div className="quote-intro">
          <p className="overline">TEKLİF TALEBİ</p>
          <h2>
            Detayları paylaşın,
            <br />
            <span>birlikte ilerleyelim.</span>
          </h2>
          <p>
            {product.title} talebiniz için bildiğiniz ölçüleri ekleyin. Teknik resim şart değil; fotoğrafınızı WhatsApp
            üzerinden paylaşın veya numune göndermek için bizimle görüşün.
          </p>
          <a
            className="contact"
            href={'https://wa.me/' + business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle />
            <div>
              <small>Doğrudan WhatsApp</small>
              <strong>{business.phoneDisplay}</strong>
            </div>
            <ArrowUpRight />
          </a>
          <p className="small-note">
            Standart seri üretim sözü yerine ihtiyaca göre boyutlandırma, doğru malzeme seçimi ve özel proje
            değerlendirmesi yapıyoruz.
          </p>
        </div>
        <ProductInquiry product={product} />
      </section>

      <section className="faq wrap">
        <p className="overline">SIK SORULANLAR</p>
        <div>
          <details>
            <summary>
              Teknik çizimim yoksa teklif alabilir miyim?<span>+</span>
            </summary>
            <p>
              Evet. Çiziminiz yoksa sorun değil; mevcut parçanın veya kullanım alanının fotoğrafı, numune veya temel
              ölçülerle başlayabiliriz. Mühendislik değerlendirmesini birlikte yaparız.
            </p>
          </details>
          <details>
            <summary>
              Bütün ölçüleri bilmiyorsam?<span>+</span>
            </summary>
            <p>
              Bilmediğiniz alanları boş bırakabilirsiniz. Mevcut ürüne veya kullanım alanına ait fotoğrafları WhatsApp
              görüşmesine ekleyin. Numune göndermek için bizimle iletişime geçebilirsiniz.
            </p>
          </details>
          <details>
            <summary>
              Özel ölçü isteyebilir miyim?<span>+</span>
            </summary>
            <p>
              İhtiyacınız olan ölçüleri ve kullanım koşullarını belirtin. Üretim uygunluğu teknik değerlendirmeden sonra
              netleşir.
            </p>
          </details>
          <details>
            <summary>
              Görseldeki ürünün özellikleri kesin mi?<span>+</span>
            </summary>
            <p>
              Görseller temsilidir. Ölçü, malzeme, bağlantılar ve diğer teknik özellikler talebinize göre ayrıca
              netleştirilir.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
