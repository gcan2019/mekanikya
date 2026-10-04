import type { Metadata } from 'next';
import { ArrowUpRight, CheckCircle2, MessageCircle, Phone, Cog, Wrench, FileCode, RotateCcw } from 'lucide-react';
import { business } from '@/lib/catalog';

export const metadata: Metadata = {
  alternates: { canonical: business.siteUrl + '/hizmetler' },
  title: 'Özel Makine Revizyonu, Tersine Mühendislik ve Parça İmalatı | Mekanikya',
  description: 'Numuneden parça imalatı, makine restorasyonu, tersine mühendislik, CAD çizimi ve aşınmış parça onarımı. Çiziminiz olmasa da fotoğraf veya numuneyle başlayın.',
};

const serviceList = [
  {
    icon: Cog,
    num: '01',
    title: 'Makine restorasyonu, revizyonu ve modernizasyonu',
    desc: 'Komple makineyi değiştirmek yerine mekanik ömrünü uzatıyoruz. Aşınan kızaklar, rulman yuvaları, mekanik aktarmalar ve gövde elemanlarını yenileyerek makinenizi modern üretim standartlarına kavuşturuyoruz.',
    link: '/hizmetler/makine-restorasyonu',
    linkText: 'Restorasyon sürecini inceleyin',
  },
  {
    icon: RotateCcw,
    num: '02',
    title: 'Numuneden ve artık bulunmayan parçadan yeniden üretim',
    desc: 'İthal, eski, üreticisi piyasadan çekilmiş veya yedek parça temin süresi ayları bulan makineler için; elinizdeki sağlam/kırık numuneden veya montaj yuvasından birebir ölçü alarak yeni parça üretiyoruz.',
    link: 'https://wa.me/' + business.whatsapp,
    linkText: 'Numune fotoğrafı paylaşın',
    external: true,
  },
  {
    icon: FileCode,
    num: '03',
    title: 'Tersine mühendislik ve teknik çizim (CAD / teknik resim)',
    desc: 'Elinizde teknik resim olmasa dahi kumpas, mikrometre ve hassas ölçüm yöntemleriyle parçanın geometrisini çıkarıyor; toleranslandırılmış 2D imalat teknik resimlerini ve 3D CAD katı modellerini hazırlıyoruz.',
    link: '/hizmetler/tersine-muhendislik-ve-teknik-cizim',
    linkText: 'Çizim ve modelleme sürecini inceleyin',
    external: false,
  },
  {
    icon: Wrench,
    num: '04',
    title: 'Aşınmış ve kırılmış parça onarımı',
    desc: 'Miller, rulman ve keçe yatakları, dişliler, flanşlar, bıçaklar ve makine gövdelerindeki aşınma veya çatlakları kaynak dolgu, talaşlı imalat ve hassas taşlama işlemleriyle orijinal toleranslarına getiriyoruz.',
    link: 'https://wa.me/' + business.whatsapp,
    linkText: 'Onarım değerlendirmesi isteyin',
    external: true,
  },
];

const steps = [
  ['01', 'Fotoğraf veya Numune', 'Teknik resim göndermek zorunda değilsiniz. Parçanın birkaç açıdan net fotoğrafını veya doğrudan numunesini bize ulaştırın.'],
  ['02', 'İnceleme ve Ölçülendirme', 'Parçanın çalışma şartları, yükü, temas yüzeyleri ve malzeme sınıfı yerinde veya atölyemizde incelenir.'],
  ['03', 'Mühendislik ve Teklif', 'Onarım, revizyon veya sıfırdan imalat seçenekleri karşılaştırılır; maliyet ve teslim süresi içeren net teklif paylaşılır.'],
  ['04', 'İmalat ve Teslimat', 'Onaylanan mühendislik çözümü titizlikle üretilir, ölçüsel kalite kontrolü tamamlanarak adresinize teslim edilir.'],
];

export default function ServicesPage() {
  const baseUrl = business.siteUrl || 'https://ofirma-site.ofirma.workers.dev';

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#organization`,
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
        priceRange: '$$',
        image: `${baseUrl}/images/profil-tasima-arabasi.png`,
      },
      ...serviceList.map((srv) => ({
        '@type': 'Service',
        name: srv.title,
        serviceType: 'Endüstriyel İmalat ve Mühendislik Hizmeti',
        description: srv.desc,
        provider: {
          '@id': `${baseUrl}/#organization`,
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Amasya' },
          { '@type': 'AdministrativeArea', name: 'Çorum' },
          { '@type': 'AdministrativeArea', name: 'Samsun' },
          { '@type': 'Country', name: 'Türkiye' },
        ],
        url: srv.link.startsWith('http') ? srv.link : `${baseUrl}${srv.link}`,
      })),
    ],
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <section className="page-banner">
        <div className="wrap">
          <p className="overline">MEKANİKYA / HİZMETLERİMİZ</p>
          <h1>Mühendislik destekli makine revizyonu ve özel parça üretimi.</h1>
          <p>
            Teknik çiziminiz olmasa da sorun değil. Kırık, aşınmış veya artık tedarik edilemeyen parçaların
            fotoğrafı ya da numunesiyle başlıyoruz.
          </p>
        </div>
      </section>

      {/* 5 Core Services */}
      <section className="wrap" style={{ padding: '40px 0 60px' }}>
        <div className="company-section-heading">
          <div>
            <p className="overline">UZMANLIK ALANLARIMIZ</p>
            <h2>Mevcut ekipmanınızı koruyarak üretime devam edin.</h2>
          </div>
          <p style={{ maxWidth: '520px', color: '#526977', fontSize: '15px', lineHeight: 1.7 }}>
            Yüksek makine mühendisliği yaklaşımıyla; standart seri üretim yerine ihtiyaca göre boyutlandırma,
            doğru malzeme seçimi ve özel proje değerlendirmesi yapıyoruz.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginTop: '36px' }}>
          {serviceList.map((srv) => {
            const Icon = srv.icon;
            return (
              <article key={srv.num} style={{ background: '#f8fafc', border: '1px solid #dce5ec', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)', letterSpacing: '1px' }}>{srv.num}</span>
                    <Icon size={24} style={{ color: 'var(--primary)' }} />
                  </div>
                  <h3 style={{ fontSize: '19px', lineHeight: 1.35, marginBottom: '14px', color: '#122d40' }}>{srv.title}</h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#4a6170', marginBottom: '20px' }}>{srv.desc}</p>
                </div>
                <div>
                  <a
                    href={srv.link}
                    target={srv.external ? '_blank' : undefined}
                    rel={srv.external ? 'noopener noreferrer' : undefined}
                    className="text-link"
                    style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    {srv.linkText} <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Service #5: Real Case Study Spotlight */}
      <section className="wrap case-related" style={{ borderTop: '1px solid #dce5ec', paddingTop: '48px' }}>
        <p className="overline">GERÇEK UYGULAMA ÖRNEĞİ</p>
        <h2>Sebze doğrama makinesi bıçak ve disk yenileme</h2>
        <p style={{ maxWidth: '680px', margin: '14px 0 24px', lineHeight: 1.7, color: '#4a6170' }}>
          Tedarik edilemeyen sebze doğrama bıçakları ve kesim diskleri için eldeki numuneden yola çıkarak
          yeniden imalat ve parça revizyonu gerçekleştirdik. Çalışmanın tüm fotoğraflarını inceleyebilirsiniz.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a className="cta" href="/ornek-calismalar/sebze-dograma-bicaklari">
            Örnek çalışmayı fotoğraflarla inceleyin <ArrowUpRight size={18} />
          </a>
          <a className="text-link" href="/ornek-calismalar">
            Tüm örnek çalışmaları gör →
          </a>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="wrap service-steps">
        <p className="overline">ÇALIŞMA YÖNTEMİMİZ</p>
        <h2>Fotoğraf ve numuneden teslimata 4 adım.</h2>
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

      {/* Regional Focus Note */}
      <section className="wrap" style={{ padding: '0 0 48px' }}>
        <div style={{ background: '#edf2f6', borderLeft: '4px solid var(--primary)', padding: '24px 28px' }}>
          <h3 style={{ fontSize: '17px', margin: '0 0 8px', color: '#122d40' }}>Merzifon ve Bölgesel Hizmet Avantajı</h3>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.7, color: '#4a6170' }}>
            Merzifon 100. Yıl Sanayi Sitesi&apos;ndeki atölyemiz sayesinde Merzifon OSB başta olmak üzere Amasya, Suluova, Havza, Çorum, Samsun ve Tokat
            bölgesindeki imalatçılara yakın mesafede parça teslimi, numune inceleme, ölçü alma ve teknik destek
            kolaylığı sağlıyoruz.
          </p>
        </div>
      </section>

      {/* CTA Band */}
      <section className="service-cta">
        <div className="wrap">
          <h2>Teknik resminiz olmasa da parça fotoğrafıyla başlayabiliriz.</h2>
          <p>
            Mevcut parçanın, makinenin veya arızalı bölgenin fotoğrafını WhatsApp üzerinden gönderin;
            mühendislik ekibimiz ilk değerlendirmeyi yapsın.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
            <a
              className="cta light"
              href={'https://wa.me/' + business.whatsapp + '?text=' + encodeURIComponent('Merhaba Mekanikya, makine revizyonu ve özel parça imalatı hakkında bilgi almak istiyorum.')}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <MessageCircle size={18} /> WhatsApp ile fotoğraf gönderin <ArrowUpRight size={18} />
            </a>
            <a
              className="cta"
              href={'tel:' + business.phone}
              style={{ background: 'transparent', border: '1px solid white', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Phone size={17} /> {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
