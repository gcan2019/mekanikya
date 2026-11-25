import { ArrowUpRight, MessageCircle } from 'lucide-react';
import ProductInquiry from './product-inquiry';
import ProductImage from './product-image';
import ProductCards from './product-cards';
import type { EditableBusiness, EditableProduct } from '@/lib/site-content';
import { metalFormingCategory, metalFormingImage } from '@/lib/metal-forming-products';

export default function MetalFormingProduct({ product, business, related }: {
  product: EditableProduct; business: EditableBusiness; related: EditableProduct[];
}) {
  const image = metalFormingImage(product.id);
  const message = `Merhaba Mekanikya, ${product.title} için özel teklif almak istiyorum. Malzeme / kesit: … Hedef parça biçimi: … Adet: … İl / ilçe: …`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: product.title, description: product.description,
    url: `${business.siteUrl}${product.href}`,
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ürünlerimiz', item: `${business.siteUrl}/urunler` },
      { '@type': 'ListItem', position: 2, name: product.category, item: `${business.siteUrl}/${metalFormingCategory}` },
      { '@type': 'ListItem', position: 3, name: product.title, item: `${business.siteUrl}${product.href}` },
    ] },
  };
  return <main id="main" className="metal-forming-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <div className="wrap product-breadcrumb"><a href="/">Ana Sayfa</a><span>/</span><a href="/urunler">Ürünlerimiz</a><span>/</span><a href={'/' + metalFormingCategory}>{product.category}</a></div>
    <section className="wrap manufacturer-product">
      <ProductImage id={product.id} title={product.title} image={image} priority />
      <div className="manufacturer-product-copy">
        <p className="overline">TALEBE GÖRE ÖZEL TEKLİF</p>
        <h1>{product.title}</h1><p>{product.description}</p>
        <ul>{product.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
        <p className="equipment-note">Henüz üretilmiş bir Mekanikya modeli değildir. Üretim uygunluğu ve nihai özellikler talebinize göre değerlendirilir.</p>
        <div className="metal-forming-actions">
          <a className="cta" href="#teklif">Özel teklif iste <ArrowUpRight size={18} /></a>
          <a className="text-link" href={'https://wa.me/' + business.whatsapp + '?text=' + encodeURIComponent(message)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp ile bilgi iste</a>
        </div>
      </div>
    </section>
    <nav className="product-section-nav wrap" aria-label="Ürün bölümleri"><a href="#secim">Seçim rehberi</a><a href="#kullanim">Kullanım alanları</a><a href="#teklif">Teklif talebi</a><a href={'/' + metalFormingCategory}>Ürün ailesi</a></nav>
    <section className="equipment-info wrap" id="secim">
      <div className="section-head"><p className="overline">İHTİYACINIZDAN BAŞLAYALIM</p><h2>İşleyeceğiniz parçayı anlatın.</h2><p>Çiziminiz yoksa fotoğraf veya numune bilgisiyle başlayabilirsiniz.</p></div>
      <div className="equipment-checks">{product.checks.map((check, index) => <article key={check.title}><span>0{index + 1}</span><h3>{check.title}</h3><p>{check.text}</p></article>)}</div>
      <div className="equipment-note"><p>{product.note}</p></div>
      <div className="use-cases" id="kullanim"><span>Kullanım alanları</span>{product.uses.map(use => <span key={use}>{use}</span>)}</div>
      <details className="metal-forming-reference"><summary>Temsilî çizim ve referans hakkında</summary><p>Çizim çalışma prensibini anlatır; imalat resmi, CAD doğrulaması veya gerçek ürün fotoğrafı değildir. Referans kaynaktaki ürün Mekanikya üretimi değildir; teknik değerleri bu ürünün taahhüdü değildir.</p><a href={product.source} target="_blank" rel="noopener noreferrer">{product.id === 'manuel-ferforje-spiral-bukme-makinesi' ? 'Önceki araştırmadaki CAD kaynağı: Cults3D' : 'Ürün grubuna ait üretici referansı'} ↗</a></details>
    </section>
    <section className="quote-section wrap" id="teklif"><div className="quote-intro"><p className="overline">ÖZEL TEKLİF TALEBİ</p><h2>İhtiyacınızı paylaşın.</h2><p>Malzeme, hedef form ve kullanım koşullarını bildirin. Bilmediğiniz teknik alanları boş bırakabilirsiniz; fotoğrafı WhatsApp görüşmesine ekleyin.</p><p>Fiyat ve üretim koşulları teknik değerlendirmeden sonra özel teklifle netleşir.</p><a className="text-link" href="/hizmetler/tersine-muhendislik-ve-teknik-cizim">Teknik çizim ve numuneden geliştirme hizmeti →</a></div><ProductInquiry product={product} /></section>
    <section className="wrap equipment-info"><div className="section-head"><p className="overline">AYNI ÜRÜN AİLESİ</p><h2>Diğer şekillendirme ihtiyaçları</h2></div><ProductCards items={related} /></section>
  </main>;
}
