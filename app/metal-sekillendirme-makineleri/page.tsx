import type { Metadata } from 'next';
import ProductCards from '@/components/product-cards';
import { getCatalogItems } from '@/lib/site-content';
import { isMetalFormingProduct } from '@/lib/metal-forming-products';

const title = 'Metal Şekillendirme Makineleri';
const description =
  'Masaüstü manuel silindir sac kıvırma, boru ve profil bükme ile ferforje spiral bükme makineleri için ihtiyacınıza özel tasarım ve teklif talebi.';
const url = 'https://mekanikya.com.tr/metal-sekillendirme-makineleri';
export const metadata: Metadata = {
  title: title + ' | Mekanikya',
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

export default async function MetalFormingCategoryPage() {
  const items = (await getCatalogItems()).filter((product) => isMetalFormingProduct(product.id));
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.title,
        url: 'https://mekanikya.com.tr' + product.href,
      })),
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
        <span>{title}</span>
      </div>
      <section className="page-banner wrap">
        <p className="overline">MANUEL ŞEKİLLENDİRME · ÖZEL İMALAT VE KALIP SEÇENEKLERİ</p>
        <h1>{title}</h1>
        <p>
          Masaüstü sac kıvırma, boru/profil yay bükme ve soğuk ferforje spiral şekillendirme: işleyeceğiniz malzemeyi ve hedef
          parçayı paylaşın, atölyenize uygun makine ve kalıp düzenini birlikte değerlendirelim.
        </p>
        <p className="small-note" style={{ marginTop: '12px' }}>
          Görseller Mekanikya tasarım konseptleridir; stokta hazır seri üretim model taahhüdü değildir. Nihai ölçüler, kalıp seti
          ve kapasite teknik değerlendirmeyle belirlenir.
        </p>
      </section>
      <section className="wrap equipment-info">
        <ProductCards items={items} />
      </section>
      <section className="wrap equipment-info" style={{ paddingBottom: '65px' }}>
        <div className="section-head">
          <p className="overline">NASIL BAŞLARIZ?</p>
          <h2>Parçadan projeye.</h2>
          <p>
            İlgilendiğiniz makinenin sayfasından uygun kalıp/gövde seçeneğini seçin veya teklif formuna malzeme ve şekil
            bilgilerini yazın. Ölçüleri bilmiyorsanız örnek parça fotoğrafıyla başlayabiliriz; Merzifon merkezli mühendislik
            incelemesinden sonra özel teklif hazırlanır.
          </p>
          <a className="text-link" href="/iletisim">
            İletişim bilgileri →
          </a>
        </div>
      </section>
    </main>
  );
}
