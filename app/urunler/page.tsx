import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '@/lib/presentation';
import { business } from '@/lib/catalog';
import { getCatalogItems } from '@/lib/site-content';
import ProductCards from '@/components/product-cards';

export const metadata: Metadata = {
  title: 'Ürünlerimiz | Mekanikya',
  description:
    'Fabrika içi taşıma, malzeme yönetimi, kalıp ve atölye yardımcı ekipmanları. Fotoğraf, numune veya ölçülerle Mekanikya’dan teklif alın.',
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

      {catalogItems.length > 0 ? (
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
      ) : (
        <section className="wrap" style={{ margin: '40px auto 60px' }}>
          <div style={{ padding: '48px 28px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', padding: '6px 14px', background: '#e0f2fe', color: '#0369a1', borderRadius: '20px', fontSize: '12px', fontWeight: 600, marginBottom: '16px' }}>
              ⚙️ MÜHENDİSLİK VE İMALAT DOĞRULAMA SÜRECİ
            </div>
            <h2 style={{ fontSize: '22px', color: '#0f2a4a', marginBottom: '12px', fontWeight: 700 }}>
              Ürünlerimiz Teknik Çizim ve Satın Alma Parça Doğrulamasıyla Sırayla Yayına Alınmaktadır
            </h2>
            <p style={{ color: '#526977', fontSize: '15px', maxWidth: '700px', margin: '0 auto 24px', lineHeight: 1.6 }}>
              Mekanikya mühendislik standartlarımız gereği; tüm teknik çizimleri, toleransları, malzeme listesi (BOM), cıvata ve motor kodları %100 netleşmeyen hiçbir ürünü sitemizde satışa açmıyoruz. En basitten başlayarak tüm imalat paketleri sırayla tamamlanıp yayına açılacaktır.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/905302068714" className="cta cta-primary" target="_blank" rel="noopener noreferrer">
                Özel İmalat veya Çizim Talebi İçin WhatsApp: 0530 206 87 14
              </a>
              <a href="/hizmetler" className="cta cta-secondary">
                Makine Restorasyonu ve Tersine Mühendislik
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
