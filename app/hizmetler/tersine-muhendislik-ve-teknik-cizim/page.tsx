import type { Metadata } from 'next';
import { ArrowUpRight, CheckCircle2, MessageCircle, FileCode, Layers, ShieldCheck, Ruler, Cog, FileText } from 'lucide-react';
import { business } from '@/lib/catalog';

export const metadata: Metadata = {
  alternates: { canonical: `${business.siteUrl}/hizmetler/tersine-muhendislik-ve-teknik-cizim` },
  title: 'Tersine Mühendislik, CAD Modelleme ve Teknik Çizim | Mekanikya',
  description: 'Numuneden 3D CAD modelleme, 2D imalat teknik resmi, toleranslandırma ve tersine mühendislik. Teknik resminiz olmasa da parça veya fotoğrafla başlayın.',
  keywords: [
    'tersine mühendislik',
    'teknik çizim',
    'CAD modelleme',
    'teknik resim çıkarma',
    'numuneden parça çizimi',
    '3D CAD çizim',
    'imalat resmi hazırlama',
    'SolidWorks çizim',
    'yedek parça tersine mühendislik',
  ],
};

const servicePoints = [
  'Fiziksel numuneden 3D CAD katı modelleme (STEP, IGES, DXF)',
  'İmalata hazır toleranslandırılmış 2D teknik resim hazırlama',
  'Kırık, deforme veya aşınmış parçanın orijinal geometrisini çıkarma',
  'Geometrik toleranslandırma ve yüzey işleme işaretleri',
  'Malzeme analizi ve çalışma koşuluna göre malzeme seçimi',
  'Montaj, geçme toleransları ve mekanik dayanım optimizasyonu',
];

const steps = [
  [
    '01',
    'Parça veya Fotoğraf Paylaşımı',
    'Elinizde teknik resim olmasa da parçanın birkaç açıdan çekilmiş fotoğrafını veya numunenin kendisini bize ulaştırın. İlk teknik değerlendirmeyi hemen yapalım.',
  ],
  [
    '02',
    'Hassas Boyutlandırma ve Geometri Analizi',
    'Kumpas, mikrometre ve açıölçer gibi hassas metroloji araçlarıyla parçanın tüm kritik ölçüleri, montaj yüzeyleri ve diş/yatak geometrisi incelenir.',
  ],
  [
    '03',
    '3D CAD Modelleme ve 2D Teknik Resim',
    'Parça bilgisayar ortamında parametrik olarak modellenir. CNC torna, freze ve lazer kesim makinelerinin doğrudan okuyabileceği formatlarda dosyalar ve teknik resimler oluşturulur.',
  ],
  [
    '04',
    'Doğrulama, Teslim veya İmalat',
    'Hazırlanan CAD modelleri onayınıza sunulur. İster sadece mühendislik çizim dosyalarını alın, isterseniz parçanın atölyemizde birebir imalatını tamamlayalım.',
  ],
];

export default function ReverseEngineeringPage() {
  const baseUrl = business.siteUrl || 'https://ofirma-site.ofirma.workers.dev';

  const reverseEngineeringSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tersine Mühendislik ve Teknik Çizim (CAD / Teknik Resim)',
    serviceType: 'Tersine Mühendislik, CAD Modelleme ve Teknik Çizim Hizmeti',
    description: 'Elinizde teknik resim olmasa dahi kumpas, mikrometre ve hassas ölçüm yöntemleriyle parçanın geometrisini çıkarıyor; toleranslandırılmış 2D imalat teknik resimlerini ve 3D CAD katı modellerini hazırlıyoruz.',
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      telephone: business.phone,
      url: baseUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.address,
        addressLocality: 'Merzifon',
        addressRegion: 'Amasya',
        postalCode: '05300',
        addressCountry: 'TR',
      },
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Amasya' },
      { '@type': 'AdministrativeArea', name: 'Çorum' },
      { '@type': 'AdministrativeArea', name: 'Samsun' },
      { '@type': 'Country', name: 'Türkiye' },
    ],
    url: `${baseUrl}/hizmetler/tersine-muhendislik-ve-teknik-cizim`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tersine Mühendislik ve CAD Hizmetleri',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Numuneden 3D CAD Modelleme (STEP, IGES)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '2D İmalat Teknik Resmi ve Toleranslandırma',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Aşınmış ve Kırık Parça Geometri Restorasyonu',
          },
        },
      ],
    },
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reverseEngineeringSchema) }}
      />

      {/* Hero Banner */}
      <section className="page-banner">
        <div className="wrap">
          <p className="overline">MEKANİKYA / MÜHENDİSLİK HİZMETLERİ</p>
          <h1>Tersine mühendislik, 3D CAD modelleme ve teknik resim hizmeti.</h1>
          <p>
            Elinizde teknik çizim olmasa da sorun değil. Kırık, deforme veya üreticisi bulunamayan parçaların
            numunesinden ya da fotoğrafından yola çıkarak imalata hazır mühendislik modelleri üretiyoruz.
          </p>
        </div>
      </section>

      {/* Intro & Highlights */}
      <section className="wrap service-intro">
        <div>
          <p className="overline">MÜHENDİSLİK HASSASİYETİ</p>
          <h2>Parçanızın birebir dijital ikizini ve üretim resmini oluşturuyoruz.</h2>
          <p>
            Standart bir kopyalama işlemi yerine; parçanın çalıştığı mekanizmayı, maruz kaldığı yükleri ve aşınma
            noktalarını inceliyoruz. Aşınmış veya kırılmış bölgeleri orijinal çalışma ölçülerine getirerek
            yeniden modelliyoruz.
          </p>
          <p>
            Oluşturulan verilerle sadece bugünkü parçanızı değil, gelecekteki tüm yedek parça ihtiyacınızı garanti altına
            alacak dijital bir teknik arşiv kazanmış olursunuz.
          </p>
          <a
            className="cta"
            href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Merhaba, tersine mühendislik ve teknik çizim hizmetiniz hakkında bilgi almak ve numune parçamın fotoğrafını paylaşmak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Numune Fotoğrafı Paylaşın / Fiyat Alın <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="service-points">
          {servicePoints.map((point) => (
            <div key={point}>
              <CheckCircle2 size={19} />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Formats & Delivery Scope */}
      <section className="wrap" style={{ padding: '20px 0 50px' }}>
        <div className="company-section-heading">
          <div>
            <p className="overline">TESLİMAT KAPSAMI</p>
            <h2>Hangi formatlarda teslim ediyoruz?</h2>
          </div>
          <p style={{ maxWidth: '540px', color: '#526977', fontSize: '15px', lineHeight: 1.7 }}>
            Talaşlı imalat atölyelerinin, CNC merkezlerinin, saç lazer kesim tesislerinin ve dökümhanelerin doğrudan
            kullanabileceği standart endüstri formatlarında teslimat sağlıyoruz.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '22px', marginTop: '28px' }}>
          <div style={{ background: '#f8fafc', border: '1px solid #dce5ec', padding: '28px 24px' }}>
            <FileCode size={28} style={{ color: 'var(--primary)', marginBottom: '14px' }} />
            <h3 style={{ fontSize: '18px', color: '#122d40', marginBottom: '8px' }}>3D CAD Katı Modeller</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#4a6170' }}>
              STEP (.stp), IGES (.igs), Parasolid (.x_t) ve talep edilirse SolidWorks / Inventor orijinal montaj ve parça dosyaları.
            </p>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #dce5ec', padding: '28px 24px' }}>
            <FileText size={28} style={{ color: 'var(--primary)', marginBottom: '14px' }} />
            <h3 style={{ fontSize: '18px', color: '#122d40', marginBottom: '8px' }}>2D İmalat Teknik Resimleri</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#4a6170' }}>
              ISO standartlarında toleranslandırılmış PDF ve DXF formatında detaylı teknik resimler, kesit görünümleri ve montaj paftaları.
            </p>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #dce5ec', padding: '28px 24px' }}>
            <Ruler size={28} style={{ color: 'var(--primary)', marginBottom: '14px' }} />
            <h3 style={{ fontSize: '18px', color: '#122d40', marginBottom: '8px' }}>Ölçüm ve Tolerans Raporu</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#4a6170' }}>
              Kritik yüzeylerin çalışma boşlukları (H7, h6, js vb.), yüzey pürüzlülük değerleri (Ra) ve önerilen ısıl işlem kriterleri.
            </p>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #dce5ec', padding: '28px 24px' }}>
            <Cog size={28} style={{ color: 'var(--primary)', marginBottom: '14px' }} />
            <h3 style={{ fontSize: '18px', color: '#122d40', marginBottom: '8px' }}>İmalat Desteği</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#4a6170' }}>
              İsterseniz çizimle yetinmeyip parçanın talaşlı imalatını, taşlamasını ve ısıl işlemini Merzifon atölyemizde anahtar teslim üretiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="wrap service-steps">
        <p className="overline">ÇALIŞMA ADIMLARI</p>
        <h2>Numuneden teknik resme nasıl ilerliyoruz?</h2>
        <div>
          {steps.map(([n, title, text]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Case Study Callout */}
      <section className="wrap case-related">
        <h2>Sahadaki mühendislik çalışmalarımızı inceleyin</h2>
        <p>Aşınmış bıçakların tersine mühendislikle yeniden imalatı ve makine restorasyon süreçlerimizi gerçek fotoğraflarla görün.</p>
        <a className="cta" href="/ornek-calismalar/sebze-dograma-bicaklari">
          Örnek çalışmayı inceleyin <ArrowUpRight size={18} />
        </a>
      </section>

      {/* Direct Contact Banner */}
      <section className="service-cta">
        <div className="wrap">
          <h2>Teknik resmini çıkarmak istediğiniz parçayı hemen değerlendirelim.</h2>
          <p>
            Parçanın numunesini atölyemize gönderebilir veya ilk değerlendirme için telefonla / WhatsApp üzerinden fotoğraflarını iletebilirsiniz.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              className="cta light"
              href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Merhaba, tersine mühendislik ve teknik çizim hizmeti için parça fotoğrafı göndermek istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp ile Fotoğraf Gönderin <ArrowUpRight size={18} />
            </a>
            <a className="cta light" href={`tel:${business.phone}`}>
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
