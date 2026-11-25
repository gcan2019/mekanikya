import { ArrowUpRight, MessageCircle } from 'lucide-react';
import ProductInquiry from './product-inquiry';
import ProductImage from './product-image';
import ProductCards from './product-cards';
import type { EditableBusiness, EditableProduct } from '@/lib/site-content';
import { metalFormingCategory, metalFormingExtras, metalFormingImage } from '@/lib/metal-forming-products';

export default function MetalFormingProduct({
  product,
  business,
  related,
}: {
  product: EditableProduct;
  business: EditableBusiness;
  related: EditableProduct[];
}) {
  const image = metalFormingImage(product.id);
  const extra = metalFormingExtras[product.id];
  const message = `Merhaba Mekanikya, ${product.title} için özel teklif almak istiyorum. Malzeme / kesit: … Hedef parça biçimi: … Adet: … İl / ilçe: …`;
  const variantUrl = (topic: string) =>
    `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
      `Merhaba Mekanikya, ${product.title} kapsamında "${topic}" seçeneği için teknik uygunluk ve özel teklif görüşmek istiyorum. Malzeme / kesit: … Hedef ölçü: … Adet ve il / ilçe: …`,
    )}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: product.title,
    description: product.description,
    url: `${business.siteUrl}${product.href}`,
    primaryImageOfPage: `${business.siteUrl}${image.src}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ürünlerimiz', item: `${business.siteUrl}/urunler` },
        { '@type': 'ListItem', position: 2, name: product.category, item: `${business.siteUrl}/${metalFormingCategory}` },
        { '@type': 'ListItem', position: 3, name: product.title, item: `${business.siteUrl}${product.href}` },
      ],
    },
  };

  return (
    <main id="main" className="metal-forming-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      <div className="wrap product-breadcrumb">
        <a href="/">Ana Sayfa</a>
        <span>/</span>
        <a href="/urunler">Ürünlerimiz</a>
        <span>/</span>
        <a href={'/' + metalFormingCategory}>{product.category}</a>
      </div>

      <section className="wrap manufacturer-product">
        <ProductImage id={product.id} title={product.title} image={image} priority />
        <div className="manufacturer-product-copy">
          <p className="overline">MANUEL ŞEKİLLENDİRME · TALEBE GÖRE ÖZEL İMALAT</p>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <ul>
            {product.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <p className="equipment-note">
            Görsel Mekanikya örnek tasarım konseptidir; stokta hazır seri üretim ürün değildir. Çalışma kapasitesi, kalıp/makara
            düzeni ve nihai ölçüler işleyeceğiniz parçaya göre mühendislik değerlendirmesiyle netleşir.
          </p>
          <div className="metal-forming-actions">
            <a className="cta" href="#teklif">
              Özel teklif iste <ArrowUpRight size={18} />
            </a>
            <a
              className="text-link"
              href={'https://wa.me/' + business.whatsapp + '?text=' + encodeURIComponent(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp ile ölçü / fotoğraf paylaş
            </a>
          </div>
        </div>
      </section>

      <nav className="product-section-nav wrap" aria-label="Ürün bölümleri">
        {extra?.variants && <a href="#secenekler">Yapılandırma ve kalıp seçenekleri</a>}
        <a href="#secim">Seçim rehberi</a>
        <a href="#kullanim">Kullanım alanları</a>
        <a href="#teklif">Teklif talebi</a>
        <a href={'/' + metalFormingCategory}>Ürün ailesi</a>
      </nav>

      {extra?.variants && (
        <section className="wrap equipment-info" id="secenekler">
          <div className="section-head">
            <p className="overline">YAPILANDIRMA VE KALIP SEÇENEKLERİ</p>
            <h2>İhtiyacınıza uygun düzenle başlayalım.</h2>
            <p>
              Standart tek kalıba bağlı kalmadan, işleyeceğiniz sac veya profil kesitine göre gövde ve kalıp kapsamını birlikte
              belirliyoruz.
            </p>
          </div>
          <div className="factory-options">
            {extra.variants.map((variant) => (
              <article key={variant.code}>
                <span className="tech-badge tech-badge-steel" style={{ marginBottom: '10px' }}>
                  SEÇENEK {variant.code}
                </span>
                <h3>{variant.title}</h3>
                <p style={{ color: '#586973', fontSize: '15px', lineHeight: 1.75, margin: '10px 0 16px' }}>
                  {variant.description}
                </p>
                <a className="text-link" href={variantUrl(variant.whatsappTopic)} target="_blank" rel="noopener noreferrer">
                  Bu düzen için WhatsApp&apos;tan yazın →
                </a>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="equipment-info wrap" id="secim">
        <div className="section-head">
          <p className="overline">İHTİYACINIZDAN BAŞLAYALIM</p>
          <h2>İşleyeceğiniz parçayı anlatın.</h2>
          <p>Teknik çiziminiz yoksa bükülecek malzemenin fotoğrafı veya numune ölçüsüyle başlayabilirsiniz.</p>
        </div>
        <div className="equipment-checks">
          {product.checks.map((check, index) => (
            <article key={check.title}>
              <span>0{index + 1}</span>
              <h3>{check.title}</h3>
              <p>{check.text}</p>
            </article>
          ))}
        </div>
        <div className="equipment-note">
          <p>{product.note}</p>
        </div>
        <div className="use-cases" id="kullanim">
          <span>Kullanım alanları</span>
          {product.uses.map((use) => (
            <span key={use}>{use}</span>
          ))}
        </div>

        <details className="metal-forming-reference">
          <summary>Tasarım konsepti ve teknik / CAD referans kaynakları</summary>
          <p>
            Sayfadaki ürün görseli çalışma yapısını somutlaştıran Mekanikya tasarım konseptidir; tamamlanmış seri üretim fotoğrafı
            veya kesin imalat resmi değildir. Aşağıdaki bağlantılar ürün geliştirme araştırmasında incelenen üçüncü taraf CAD ve
            sektör kaynaklarıdır; bu kaynaklardaki ürünler Mekanikya üretimi değildir ve kapasite değerleri taahhüt oluşturmaz.
          </p>
          {extra?.references && extra.references.length > 0 ? (
            <ul style={{ margin: '12px 0 0', paddingLeft: '18px', display: 'grid', gap: '8px' }}>
              {extra.references.map((ref) => (
                <li key={ref.url}>
                  <span style={{ fontSize: '12px', color: '#526977', marginRight: '8px' }}>[{ref.kind}]</span>
                  <a className="text-link" style={{ display: 'inline' }} href={ref.url} target="_blank" rel="noopener noreferrer">
                    {ref.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <a href={product.source} target="_blank" rel="noopener noreferrer">
              Araştırma referans kaynağı ↗
            </a>
          )}
        </details>
      </section>

      <section className="quote-section wrap" id="teklif">
        <div className="quote-intro">
          <p className="overline">ÖZEL TEKLİF TALEBİ</p>
          <h2>İhtiyacınızı paylaşın.</h2>
          <p>
            Malzeme, kesit, hedef form ve kullanım koşullarını bildirin. Bilmediğiniz teknik alanları boş bırakabilirsiniz;
            örnek parça fotoğrafını WhatsApp görüşmesine ekleyebilirsiniz.
          </p>
          <p>
            Merzifon / Amasya merkezli atölyemizden Çorum, Samsun, Tokat ve Türkiye geneline proje değerlendirmesi ve sevkiyat
            planlaması yapılır. Fiyat ve üretim süresi teknik incelemeden sonra özel teklifle netleşir.
          </p>
          <a className="text-link" href="/hizmetler/tersine-muhendislik-ve-teknik-cizim">
            Teknik çizim ve numuneden kalıp / makine geliştirme hizmeti →
          </a>
        </div>
        <ProductInquiry product={product} />
      </section>

      <section className="wrap equipment-info" style={{ paddingBottom: '65px' }}>
        <div className="section-head">
          <p className="overline">AYNI ÜRÜN AİLESİ</p>
          <h2>Diğer metal şekillendirme makineleri</h2>
        </div>
        <ProductCards items={related} />
      </section>
    </main>
  );
}
