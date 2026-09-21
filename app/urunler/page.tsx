import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '@/lib/presentation';
import { business } from '@/lib/catalog';
import { getCatalogItems } from '@/lib/site-content';
import ProductCards from '@/components/product-cards';

export const metadata: Metadata = {
  title: 'Ürünlerimiz | ofirma',
  description:
    'Fabrika içi taşıma, malzeme yönetimi, kalıp ve atölye yardımcı ekipmanları. Fotoğraf, numune veya ölçülerle ofirma’dan teklif alın.',
  alternates: { canonical: business.siteUrl + '/urunler' },
};

export const dynamic = 'force-dynamic';
export default async function Products() {
  const catalogItems = await getCatalogItems();
  return (
    <main id="main">
      <section className="page-banner">
        <div className="wrap">
          <p className="overline">ANA SAYFA / ÜRÜNLERİMİZ</p>
          <h1>Taşıma ve üretim ekipmanları</h1>
          <p>
            Fabrikanızdaki yük, parça ve üretim akışına uygun ekipmanı inceleyin; fotoğraf, numune veya bildiğiniz
            ölçülerle teklif isteyin.
          </p>
        </div>
      </section>

      <section className="wrap" style={{ margin: '32px auto 0' }}>
        <div
          style={{
            background: '#edf2f6',
            border: '1px solid #d0dbe3',
            padding: '20px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
          }}
        >
          <div>
            <p className="overline" style={{ marginBottom: '4px' }}>
              ÖZEL MÜHENDİSLİK HİZMETİ
            </p>
            <h3 style={{ fontSize: '17px', margin: 0, color: '#122d40' }}>
              Makine revizyonu, tersine mühendislik veya numuneden parça üretimi
            </h3>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#526977' }}>
              Çiziminiz olmasa da numune veya parça fotoğrafıyla başlayabiliriz.
            </p>
          </div>
          <a className="cta" href="/hizmetler" style={{ whiteSpace: 'nowrap', fontSize: '14px', padding: '10px 18px' }}>
            Hizmetlerimizi inceleyin <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <div className="wrap catalog-layout">
        <aside className="catalog-sidebar">
          <h2>Ürün grupları</h2>
          <nav aria-label="Ürün kategorileri">
            {categories.map((category) => (
              <a key={category.id} href={'#' + category.id}>
                {category.title}
                <span>{catalogItems.filter((p) => p.group === category.id).length}</span>
              </a>
            ))}
          </nav>
          <p>Özel ölçü talebiniz için ürün sayfasındaki teklif formunu kullanabilirsiniz.</p>
        </aside>
        <div>
          {categories.map((category) => (
            <section className="catalog-group" id={category.id} key={category.id}>
              <div className="catalog-group-title">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
                {category.id === 'fabrika-tasima' && (
                  <a className="text-link" href="/fabrika-ici-tasima">
                    Taşıma düzenleri ve seçim rehberi →
                  </a>
                )}
              </div>
              <ProductCards items={catalogItems.filter((p) => p.group === category.id)} />
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
