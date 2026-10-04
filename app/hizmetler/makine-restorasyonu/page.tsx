import type { Metadata } from 'next';
import { ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { business } from '@/lib/catalog';

export const metadata: Metadata = { alternates: { canonical: business.siteUrl + '/hizmetler/makine-restorasyonu' }, title: 'Makine Restorasyonu ve Özel Parça İmalatı | Mekanikya', description: 'Numune, fotoğraf veya teknik resimden makine parçası çizimi, onarımı, revizyonu ve yeniden imalatı.' };

const steps = [
  ['01', 'İnceleme', 'Arızalı parçayı, numuneyi veya makine üzerindeki bağlantıyı birlikte değerlendiriyoruz.'],
  ['02', 'Yeniden modelleme', 'Fotoğrafla ön değerlendirme yapıyor, modelleme için gerekli ölçüleri numune veya teknik doküman üzerinden netleştiriyoruz.'],
  ['03', 'Çözüm seçimi', 'Onarım, revizyon veya yeniden imalat seçeneklerini kullanım koşullarına göre karşılaştırıyoruz.'],
  ['04', 'Uygulama', 'Onaylanan çözümü üretim ve kontrol adımlarıyla tamamlayıp teslim ediyoruz.'],
];

export default function Restoration() {
  const baseUrl = business.siteUrl || 'https://ofirma-site.ofirma.workers.dev';

  const restorationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Makine Restorasyonu ve Özel Parça İmalatı',
    serviceType: 'Endüstriyel Makine Revizyonu ve Parça Yenileme',
    description: 'Numune, fotoğraf veya teknik resimden makine parçası çizimi, onarımı, revizyonu ve yeniden imalatı.',
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
    areaServed: {
      '@type': 'Country',
      name: 'Türkiye',
    },
    url: `${baseUrl}/hizmetler/makine-restorasyonu`,
  };

  return <main id="main">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(restorationSchema) }}
    />
    <section className="page-banner"><div className="wrap"><p className="overline">HİZMETLER / MAKİNE RESTORASYONU</p><h1>Makinenizi tamamen değiştirmeden yeniden çalışır hale getirelim.</h1><p>Arızalı, kırılmış veya artık üretilmeyen parçalar için mühendislik destekli çizim, onarım ve özel imalat.</p></div></section>
    <section className="wrap service-intro"><div><p className="overline">MÜHENDİSLİK VE UYGULAMA</p><h2>Parçası bulunamıyorsa yeniden tasarlayalım.</h2><p>Yüksek makine mühendisliği yaklaşımıyla mevcut parçayı ve kullanım koşulunu inceliyor, tüm makineyi yenilemeden ihtiyaca uygun parçayı veya revizyonu hazırlıyoruz.</p><p>Teknik bilgi göndermeniz şart değil. Numune, fotoğraf, ölçü veya arızanın kısa açıklamasıyla başlayabilirsiniz.</p><a className="cta" href={'https://wa.me/'+business.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/> Fotoğraf paylaşın / Numune için görüşün <ArrowUpRight size={18}/></a></div><div className="service-points">{['Numuneden CAD çizimi','Kırık parça yeniden imalatı','Eski makine yedek parçaları','Mekanik revizyon ve iyileştirme','Teknik resimden üretim','Onarım ve üretilebilirlik değerlendirmesi'].map(x=><div key={x}><CheckCircle2 size={19}/><span>{x}</span></div>)}</div></section>
    <section className="wrap service-steps"><p className="overline">ÇALIŞMA SÜRECİ</p><h2>İncelemeden teslimata.</h2><div>{steps.map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="wrap case-related"><h2>Uygulamadan bir örnek</h2><p>Sebze doğrama makinesi bıçak değişimini gerçek fotoğraflarla inceleyin.</p><a className="cta" href="/ornek-calismalar/sebze-dograma-bicaklari">Çalışmayı inceleyin <ArrowUpRight size={18}/></a></section>
    <section className="service-cta"><div className="wrap"><h2>Elinizdeki parçayı veya makineyi birlikte değerlendirelim.</h2><p>Fotoğrafı WhatsApp’tan gönderin; ilk teknik değerlendirmeyi başlatalım.</p><a className="cta light" href="/iletisim">İletişime geçin <ArrowUpRight size={18}/></a></div></section>
  </main>;
}
