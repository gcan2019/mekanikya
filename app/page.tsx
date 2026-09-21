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
  title: 'ofirma | Fabrika İçi Taşıma Ekipmanları ve Makine Restorasyonu (Merzifon)',
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
      <section className="company-hero">
        <div className="wrap company-hero-grid">
          <div className="company-hero-copy">
            <p className="overline">OFİRMA ENDÜSTRİYEL EKİPMANLAR | MERZİFON</p>
            <h1>
              Fabrika içi taşıma ekipmanları ve <em>özel makine revizyonu.</em>
            </h1>
            <p>
              Merzifon merkezli atölyemizde; üretim alanınıza özel talaş arabaları, metal istif kasaları, profil/sac
              taşıma sistemleri ve tedarik edilemeyen makine parçalarının imalatını yapıyoruz. Çiziminiz olmasa da
              fotoğraf, numune veya temel ölçülerle başlayabiliriz.
            </p>
            <div className="company-hero-actions">
              <a className="cta" href="#urunler">
                Hedef ürün ailelerini inceleyin <ArrowRight size={20} />
              </a>
              <a href="/hizmetler" style={{ color: '#d9e4eb', fontWeight: 600 }}>
                Özel mühendislik ve revizyon <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="company-hero-product">
            <ProductImage image={catalogItems.find(p => p.id === "metal-tasima-kasasi")?.image} imageHidden={catalogItems.find(p => p.id === "metal-tasima-kasasi")?.imageHidden} id="metal-tasima-kasasi" title="Metal taşıma, istif kasaları ve malzeme sepetleri" priority />
            <a href="/metal-tasima-kasasi">
              <span>
                <small>ÖZEL ÖLÇÜ FABRİKA İÇİ TAŞIMA</small>Metal taşıma ve istif kasaları
              </span>
              <ArrowUpRight size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. CORE 8 PRODUCT FAMILIES: Active catalog showcase */}
      <section className="company-products wrap" id="urunler">
        <div className="company-section-heading">
          <div>
            <p className="overline">HEDEF ÜRÜN AİLELERİMİZ</p>
            <h2>Fabrika ve atölye içi akışa özel 8 ürün ailesi.</h2>
          </div>
          <a href="/urunler">
            Tüm ürünleri ve detayları incele <ArrowUpRight size={20} />
          </a>
        </div>
        <div id="diger-urunler">
          <ProductCards items={catalogItems} />
        </div>
        <p style={{ marginTop: '24px', fontSize: '14px', color: '#526977', lineHeight: 1.7 }}>
          * Standart seri üretim kalıpları yerine; tesisinizin parça ebadına, forklift/transpalet ölçülerine ve taşıma
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
              <a className="cta" href="/hizmetler">
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
      <section className="wrap case-index" style={{ padding: '60px 0' }}>
        <article>
          <img
            src="/images/calisma-sebze-dograma/bicak-seti.jpg"
            width={1496}
            height={1496}
            loading="lazy"
            alt="Sebze doğrama makinesi bıçak yenileme fotoğrafları"
          />
          <div>
            <p className="overline">GERÇEK UYGULAMA ÖRNEĞİ</p>
            <h2>Sebze doğrama makinesi bıçak yenileme</h2>
            <p>
              Yedek parçası piyasada bulunamayan sebze doğrama makinesinin kesim diskleri ve bıçakları atölyemizde
              numuneden yola çıkılarak yeniden imal edildi ve makine üretime kazandırıldı.
            </p>
            <p style={{ fontSize: '14px', color: '#526977', margin: '14px 0 24px' }}>
              Gerçek makine ve disk fotoğraflarını inceleyerek numuneden imalat sürecimizi yakından görebilirsiniz.
            </p>
            <a className="cta" href="/ornek-calismalar/sebze-dograma-bicaklari">
              Çalışma fotoğraflarını inceleyin <ArrowUpRight size={18} />
            </a>
          </div>
        </article>
      </section>

      {/* 5. WORKFLOW: Photo/sample -> Measurement -> Quote -> Manufacturing */}
      <section className="wrap service-steps" style={{ borderTop: '1px solid #dce5ec', paddingTop: '50px' }}>
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
      <section className="company-contact-band" id="teklif">
        <div className="wrap">
          <div>
            <p className="overline" style={{ color: '#fed7aa' }}>
              FOTOĞRAFLA KOLAY TEKLİF
            </p>
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
              className="light-cta"
              href={
                'https://wa.me/' +
                business.whatsapp +
                '?text=' +
                encodeURIComponent('Merhaba ofirma, ürün ve imalat talebim için fotoğraf paylaşmak istiyorum.')
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              <MessageCircle size={20} />
              WhatsApp ile Fotoğraf Gönderin <ArrowUpRight size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* 8. COMPANY ADDRESS & CONTACT DETAILS */}
      <section className="wrap" style={{ padding: '60px 0' }}>
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
            <h3 style={{ fontSize: '24px', margin: '0 0 16px', color: '#122d40' }}>ofirma</h3>
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
