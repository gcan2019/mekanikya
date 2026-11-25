import type { Metadata } from 'next';
import ProductCards from '@/components/product-cards';
import { getCatalogItems } from '@/lib/site-content';
import { isMetalFormingProduct } from '@/lib/metal-forming-products';

const title = 'Metal Şekillendirme Makineleri';
const description = 'Manuel ferforje spiral bükme, silindir sac kıvırma ve boru / profil bükme makineleri için ihtiyacınıza göre özel teklif talebi.';
const url = 'https://mekanikya.com.tr/metal-sekillendirme-makineleri';
export const metadata: Metadata = { title: title + ' | Mekanikya', description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'website' } };

export default async function MetalFormingCategoryPage() {
  const items = (await getCatalogItems()).filter(product => isMetalFormingProduct(product.id));
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: title, description, url, mainEntity: { '@type': 'ItemList', itemListElement: items.map((product, index) => ({ '@type': 'ListItem', position: index + 1, name: product.title, url: 'https://mekanikya.com.tr' + product.href })) } };
  return <main id="main" className="metal-forming-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <div className="wrap product-breadcrumb"><a href="/">Ana Sayfa</a><span>/</span><a href="/urunler">Ürünlerimiz</a><span>/</span><span>{title}</span></div>
    <section className="page-banner wrap"><p className="overline">MANUEL ŞEKİLLENDİRME · ÖZEL TEKLİF</p><h1>{title}</h1><p>Spiral, silindir veya kavis: işleyeceğiniz malzemeyi ve hedef parçayı paylaşın, atölyenize uygun çözümü birlikte değerlendirelim.</p><p className="small-note">Bu ürün ailesi talebe göre geliştirme aşamasındadır. Görseller temsilî prensip çizimleridir; üretilmiş ürün veya doğrulanmış CAD modeli göstermez.</p></section>
    <section className="wrap equipment-info"><ProductCards items={items} /></section>
    <section className="wrap equipment-info"><div className="section-head"><p className="overline">NASIL BAŞLARIZ?</p><h2>Parçadan projeye.</h2><p>İlgilendiğiniz ürünün teklif formuna malzeme ve şekil bilgilerini ekleyin. Ölçüleri bilmiyorsanız fotoğraf veya numuneyle başlayabiliriz. Teknik uygunluk incelendikten sonra özel teklif hazırlanır.</p><a className="text-link" href="/iletisim">İletişim bilgileri →</a></div></section>
  </main>;
}
