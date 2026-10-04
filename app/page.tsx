import type { Metadata } from 'next';
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Wrench,
  Cog,
  FileCode,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';
import { business } from '@/lib/catalog';
import { getCatalogItems } from '@/lib/site-content';
import ProductCards from '@/components/product-cards';
import ProductImage from '@/components/product-image';

export const metadata: Metadata = {
  title: 'Mekanikya | Fabrika İçi Taşıma Ekipmanları ve Makine Restorasyonu (Merzifon)',
  description:
    'Merzifon merkezli imalat atölyemizde; talaş ve hurda arabaları, metal istif kasaları, profil/sac arabaları ve numuneden makine parçası üretimi yapıyoruz. Fotoğraf veya numuneyle teklif alın.',
  alternates: { canonical: business.siteUrl },
};

const serviceHighlights = [
  {
    icon: Cog,
    title: 'Makine Restorasyonu ve Revizyonu',
    desc: 'Komple makineyi yenilemek yerine aşınan ve arızalanan mekanik aksamları revize ederek ömrünü uzatıyoruz.',
  },
  {
    icon: RotateCcw,
    title: 'Numuneden Yeniden Parça Üretimi',
    desc: 'İthal, eski veya üreticisi bulunmayan makinelerin parçalarını eldeki kırık/sağlam numuneden yeniden üretiyoruz.',
  },
  {
    icon: FileCode,
    title: 'Tersine Mühendislik ve CAD Çizimi',
    desc: 'Teknik resminiz olmasa da kumpas ve hassas ölçümle imalat çizimlerini ve 3D CAD modellerini hazırlıyoruz.',
  },
  {
    icon: Wrench,
    title: 'Aşınmış ve Kırılmış Parça Onarımı',
    desc: 'Miller, rulman yuvaları, dişliler ve gövde bileşenlerindeki aşınmaları kaynak dolgu ve taşlama ile onarıyoruz.',
  },
];

const workflowSteps = [
  {
    num: '01',
    title: 'Fotoğraf veya Numune',
    desc: 'Teknik çiziminiz olması gerekmez. Parçanın veya çalışma alanının birkaç açıdan fotoğrafını WhatsApp üzerinden paylaşın ya da numuneyi gönderin.',
  },
  {
    num: '02',
    title: 'İnceleme ve Ölçülendirme',
    desc: 'Parçanın çalışma şartları, taşıyacağı yük, toleransları ve malzeme sınıfı yerinde veya atölyemizde incelenir.',
  },
  {
    num: '03',
    title: 'Teklif ve Mühendislik',
    desc: 'Onarım, revizyon veya sıfırdan imalat seçenekleri değerlendirilir; maliyet ve teslim süresi içeren net teklif paylaşılır.',
  },
  {
    num: '04',
    title: 'İmalat ve Teslimat',
    desc: 'Onaylanan mühendislik çözümü titizlikle üretilir, ölçüsel kontrolleri tamamlanarak işletmenize teslim edilir.',
  },
];

const regions = [
  { name: 'Merzifon & Merzifon OSB', note: '100. Yıl Sanayi Sitesi atölyemizden OSB ve çevre sanayiye doğrudan teslimat' },
  { name: 'Amasya & Suluova', note: 'Gıda, tarım makineleri ve hafif sanayi desteği' },
  { name: 'Havza & Samsun', note: 'Otomotiv yan sanayi, döküm ve talaşlı imalat odaklı' },
  { name: 'Çorum & Sanayi', note: 'Makine imalatçıları ve döküm tesisleri için taşıma çözümleri' },
  { name: 'Tokat & İlçeleri', note: 'Tekstil, tarım makineleri ve imalat atölyeleri desteği' },
];

export default async function Home() {
  const catalogItems = await getCatalogItems();
  return (
    <main id="main">
      {/* 1. HERO SECTION: What ofirma does, small workshop identity, Merzifon regional focus */}
      {/* 1. HERO SECTION: Mekanikya identity, CAD blueprint background, Merzifon regional focus */}
      <section className="company-hero cad-grid">
        <div className="wrap company-hero-grid">
          <div className="company-hero-copy">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span className="tech-badge tech-badge-dark">MEKANİKYA MÜHENDİSLİK</span>
              <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#a0b3c2', letterSpacing: '1px' }}>
                MERZİFON 100. YIL SANAYİ | OSB
              </span>
            </div>
            <h1>
              Fabrika içi taşıma ekipmanları ve <em>özel makine revizyonu.</em>
            </h1>
            <p>
              Merzifon merkezli atölyemizde; üretim alanınıza özel talaş arabaları, metal istif kasaları, profil/sac
              taşıma sistemleri ve tedarik edilemeyen makine parçalarının imalatını yapıyoruz. Çiziminiz olmasa da
              fotoğraf, numune veya temel ölçülerle başlayabiliriz.
            </p>
            <div className="company-hero-actions">
              <a className="cta cta-primary" href="#urunler">
                Hedef ürün ailelerini inceleyin <ArrowRight size={18} />
              </a>
              <a
                href={
                  'https://wa.me/' +
                  business.whatsapp +
                  '?text=' +
                  encodeURIComponent('Merhaba Mekanikya, fotoğraf paylaşarak teknik değerlendirme ve teklif almak istiyorum.')
                }
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp whatsapp-pulse"
              >
                <MessageCircle size={18} />
                Fotoğrafla Teklif Alın <ArrowUpRight size={16} />
              </a>
              <a href="/hizmetler" className="cta-secondary-dark">
                Özel Mühendislik & Revizyon <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="company-hero-product tech-corner-frame">
            <img src="/images/calisma-sebze-dograma/bicak-seti.jpg" alt="Mekanikya Özel İmalat ve Mühendislik" width={1200} height={900} />
            <a href="/hizmetler">
              <span>
                <small>ÖZEL MÜHENDİSLİK & İMALAT</small>Numuneden Parça ve Makine Revizyonu
              </span>
              <ArrowUpRight size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. CORE PRODUCT CATALOG OR ENGINEERING NOTICE */}
      <section className="company-products wrap" id="urunler">
        <div className="company-section-heading">
          <div>
            <p className="overline">İMALAT VE MÜHENDİSLİK KATALOĞU</p>
            <h2>Mühendislik Standartlarımıza Göre Hazırlanan Ürünler</h2>
          </div>
        </div>
        <div id="diger-urunler">
          {catalogItems.length > 0 ? (
            <ProductCards items={catalogItems} />
          ) : (
            <div style={{ padding: '40px 24px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '6px 14px', background: '#e0f2fe', color: '#0369a1', borderRadius: '20px', fontSize: '12px', fontWeight: 600, marginBottom: '14px' }}>
                ⚙️ MÜHENDİSLİK VE İMALAT DOĞRULAMA SÜRECİ
              </div>
              <h3 style={{ fontSize: '20px', color: '#0f2a4a', marginBottom: '10px', fontWeight: 700 }}>
                Ürünlerimiz Teknik Çizim ve İmalat Standartlarına Göre Sırayla Hazırlanmaktadır
              </h3>
              <p style={{ color: '#526977', fontSize: '15px', maxWidth: '680px', margin: '0 auto 20px', lineHeight: 1.6 }}>
                Mekanikya olarak prensibimiz gereği; teknik resimleri, toleransları, malzeme listesi (BOM) ve satın alma parçaları %100 kesinleşmeyen hiçbir ürünü satışa açmıyoruz. En basitten en karmaşığa doğru tüm ürünlerimiz sırayla doğrulanıp yayına alınacaktır.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://wa.me/905302068714" className="cta cta-primary" target="_blank" rel="noopener noreferrer">
                  Özel İmalat ve Çizim Talebi İçin WhatsApp: 0530 206 87 14
                </a>
                <a href="/hizmetler" className="cta cta-secondary">
                  Özel Mühendislik Hizmetlerimiz
                </a>
              </div>
            </div>
          )}
        </div>
        <p style={{ marginTop: '24px', fontSize: '14px', color: '#526977', lineHeight: 1.7 }}>
          * Standart seri üretim kalıpları yerine; tesisinizin parça ebadına, makine ölçülerine ve taşıma
          yüküne göre özel boyutlandırma ve proje değerlendirmesi yapıyoruz.
        </p>
      </section>

      {/* 3. MACHINE RESTORATION & SAMPLE-BASED MANUFACTURING: Service breakdown */}
      <section className="company-about" id="hizmetler" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="wrap company-about-grid">
          <div>
            <p className="overline">ÖZEL MÜHENDİSLİK & REVİZYON</p>
            <h2>
              Komple makineyi değiştirmeden,
              <br />
              <span>yeniden çalışır hale getirelim.</span>
            </h2>
            <p>
              Eski, ithal veya üreticisi piyasadan çekilmiş makineler için mühendislik destekli parça onarımı, tersine
              mühendislik ve numuneden yeniden üretim yapıyoruz.
            </p>
            <p style={{ marginTop: '14px' }}>
              <strong>Teknik resminiz olmasa da sorun değil:</strong> Parçanın birkaç açıdan fotoğrafı, sağlam veya
              kırık bir numunesi ya da kullanım yerinin bilgisiyle ilk değerlendirmeyi başlatabiliyoruz.
            </p>
            <div style={{ marginTop: '28px' }}>
              <a className="cta cta-secondary" href="/hizmetler">
                Hizmetlerimizi detaylı inceleyin <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="about-principles">
            {serviceHighlights.map((srv) => {
              const Icon = srv.icon;
              return (
                <article key={srv.title}>
                  <Icon size={25} />
                  <div>
                    <h3>{srv.title}</h3>
                    <p>{srv.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. REAL VEGETABLE CUTTER CASE STUDY: Concrete proof and photo gallery link */}
      <section className="wrap case-index">
        <article>
          <img
            src="/images/calisma-sebze-dograma/bicak-seti.jpg"
            width={1496}
            height={1496}
            loading="lazy"
            alt="Sebze doğrama makinesi bıçak yenileme fotoğrafları"
          />
          <div>
            <div style={{ marginBottom: '10px' }}>
              <span className="tech-badge tech-badge-green">✓ ATÖLYEMİZDEN GERÇEK İMALAT</span>
            </div>
            <p className="overline" style={{ marginBottom: '8px' }}>
              GERÇEK UYGULAMA ÖRNEĞİ
            </p>
            <h2>Sebze doğrama makinesi bıçak yenileme</h2>
            <p>
              Yedek parçası piyasada bulunamayan sebze doğrama makinesinin kesim diskleri ve bıçakları atölyemizde
              numuneden yola çıkılarak yeniden imal edildi ve makine üretime kazandırıldı.
            </p>
            <p style={{ fontSize: '14px', color: '#526977', margin: '14px 0 24px' }}>
              Gerçek makine ve disk fotoğraflarını inceleyerek numuneden imalat sürecimizi yakından görebilirsiniz.
            </p>
            <a className="cta cta-primary" href="/ornek-calismalar/sebze-dograma-bicaklari">
              Çalışma fotoğraflarını inceleyin <ArrowUpRight size={18} />
            </a>
          </div>
        </article>
      </section>

      {/* 5. WORKFLOW: Photo/sample -> Measurement -> Quote -> Manufacturing */}
      <section className="wrap service-steps" style={{ borderTop: '1px solid #dce5ec', padding: '55px 0' }}>
        <p className="overline">ÇALIŞMA YÖNTEMİMİZ</p>
        <h2>Fotoğraf ve numuneden teslimata 4 adım.</h2>
        <div style={{ marginTop: '28px' }}>
          {workflowSteps.map((step) => (
            <article key={step.num}>
              <span>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 6. REGIONAL COVERAGE: Merzifon center, Amasya, Suluova, Havza, Samsun, Çorum, Tokat */}
      <section className="wrap" style={{ padding: '40px 0 70px' }}>
        <div style={{ background: '#edf2f6', border: '1px solid #d0dbe3', padding: '36px 32px' }}>
          <div style={{ maxWidth: '800px', marginBottom: '28px' }}>
            <p className="overline" style={{ marginBottom: '6px' }}>
              BÖLGESEL HİZMET AĞIMIZ
            </p>
            <h2 style={{ fontSize: '28px', color: '#122d40', margin: '0 0 12px' }}>
              Merzifon merkezli üretim ve yakın mesafe avantajı.
            </h2>
            <p style={{ color: '#4a6170', lineHeight: 1.7, fontSize: '15px', margin: 0 }}>
              Merzifon 100. Yıl Sanayi Sitesi&apos;ndeki atölyemiz sayesinde Merzifon OSB başta olmak üzere Amasya, Suluova, Havza, Çorum, Samsun ve Tokat
              sanayi havzalarındaki imalatçılara yakın mesafede hizmet veriyoruz.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '18px',
              marginBottom: '24px',
            }}
          >
            {regions.map((reg) => (
              <div
                key={reg.name}
                style={{
                  background: 'white',
                  border: '1px solid #dce4ea',
                  padding: '16px 18px',
                  borderRadius: '4px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <MapPin size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <strong style={{ fontSize: '15px', color: '#162b3b' }}>{reg.name}</strong>
                </div>
                <p style={{ margin: 0, fontSize: '13px', color: '#526977', lineHeight: 1.5 }}>{reg.note}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid #d6e0e7',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
              <p style={{ margin: 0, fontSize: '14px', color: '#334155', lineHeight: 1.6 }}>
                <strong>Numune İnceleme & Ölçü Alma:</strong> Yakın mesafede parçayı elden teslim alma veya sahada ölçü
                doğrulama kolaylığı.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
              <p style={{ margin: 0, fontSize: '14px', color: '#334155', lineHeight: 1.6 }}>
                <strong>Hızlı Nakliye ve Teslimat:</strong> Bölgesel lojistik avantajıyla taşıma arabaları ve kasaların
                güvenli sevkiyatı.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
              <p style={{ margin: 0, fontSize: '14px', color: '#334155', lineHeight: 1.6 }}>
                <strong>Planlı Teknik Destek:</strong> Her talep atölye kapasitesi ve işin niteliğine göre planlı ve
                güvenilir bir takvimle ele alınır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHATSAPP CTA: Easy photo sharing */}
      {/* 7. WHATSAPP CTA: Easy photo sharing */}
      <section className="company-contact-band cad-grid" id="teklif">
        <div className="wrap">
          <div>
            <div style={{ marginBottom: '12px' }}>
              <span
                className="tech-badge"
                style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
              >
                FOTOĞRAFLA HIZLI TEKLİF
              </span>
            </div>
            <h2>
              Fotoğrafınızı WhatsApp’tan gönderin,
              <br />
              ilk teknik değerlendirmeyi yapalım.
            </h2>
            <p style={{ color: '#fed7aa', margin: '12px 0 0', fontSize: '15px', maxWidth: '600px' }}>
              Talaş arabası, metal kasa, özel araba veya arızalı makine parçanızın fotoğrafını gönderin; mühendislik
              ekibimiz sizinle iletişime geçsin.
            </p>
          </div>
          <div>
            <a
              className="light-cta whatsapp-pulse"
              href={
                'https://wa.me/' +
                business.whatsapp +
                '?text=' +
                encodeURIComponent('Merhaba Mekanikya, ürün ve imalat talebim için fotoğraf paylaşmak istiyorum.')
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 26px', fontSize: '16px' }}
            >
              <MessageCircle size={22} style={{ color: '#25D366' }} />
              WhatsApp ile Fotoğraf Gönderin <ArrowUpRight size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* 8. COMPANY ADDRESS & CONTACT DETAILS */}
      <section className="wrap" style={{ padding: '89px 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            background: '#f8fafc',
            border: '1px solid #dce5ec',
            padding: '36px 32px',
          }}
        >
          <div>
            <p className="overline">İLETİŞİM BİLGİLERİ</p>
            <h3 style={{ fontSize: '24px', margin: '0 0 16px', color: '#122d40' }}>{business.name}</h3>
            <p style={{ color: '#526977', fontSize: '14px', lineHeight: 1.7, margin: '0 0 20px' }}>
              Endüstriyel taşıma ekipmanları, metal kasalar ve özel makine parçası imalatı.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} style={{ color: 'var(--primary)' }} />
                <a href={'tel:' + business.phone} style={{ fontWeight: 600, color: '#162b3b', fontSize: '16px' }}>
                  {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageCircle size={18} style={{ color: 'var(--primary)' }} />
                <a
                  href={'https://wa.me/' + business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#162b3b', fontSize: '14px' }}
                >
                  WhatsApp: {business.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="overline">ATÖLYE ADRESİ</p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px' }}>
              <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '15px', color: '#122d40', marginBottom: '4px' }}>
                  Atölye & Üretim Merkezi
                </strong>
                <address style={{ fontStyle: 'normal', color: '#526977', fontSize: '14px', lineHeight: 1.7 }}>
                  {business.address}
                </address>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Clock size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: '#526977' }}>Pazartesi – Cumartesi: 08:30 – 18:00</span>
            </div>
          </div>

          <div>
            <p className="overline">NUMUNE & KARGO TESLİMİ</p>
            <h4 style={{ fontSize: '16px', margin: '0 0 10px', color: '#122d40' }}>Numune Göndermek İçin</h4>
            <p style={{ fontSize: '13px', color: '#526977', lineHeight: 1.7, margin: 0 }}>
              Aşınmış veya kırılmış parçanızı kargo ile göndermeden önce lütfen WhatsApp veya telefon üzerinden kargo
              alıcı ve adres teyidi için bizimle iletişime geçin.
            </p>
            <div style={{ marginTop: '16px' }}>
              <a className="text-link" href="/iletisim" style={{ fontSize: '14px', fontWeight: 600 }}>
                Detaylı iletişim sayfasına git →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
