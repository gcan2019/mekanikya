import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { business } from '@/lib/catalog';
import ProductImage from '@/components/product-image';
import { hasVerifiedProductImage } from '@/lib/verified-product-images';
export const metadata: Metadata = {
  title: 'Kurumsal | ofirma',
  description:
    'ofirma kurumsal yaklaşımı: özel üretim fabrika taşıma ekipmanları, makine revizyonu ve restorasyonu, numuneden parça imalatı ve tersine mühendislik.',
  alternates: { canonical: business.siteUrl + '/kurumsal' },
};

const workflowSteps = [
  ['01', 'Talebinizi dinliyoruz', 'Taşıma ekipmanı veya makine parçası ihtiyacınızı, parça ölçülerini ve kullanım amacını birlikte ele alıyoruz.'],
  ['02', 'Teknik detayları netleştiriyoruz', 'Fotoğraf, numune, teknik resim veya yerinde incelemeyle çalışma koşullarını değerlendiriyoruz.'],
  ['03', 'Mühendislik ve teklif', 'Uygunluk, malzeme seçimi, maliyet ve teslim koşulları netleştikten sonra imalata geçiyoruz.'],
];

export default function About() {
  const imageId = 'profil-tasima-arabasi';
  return (
    <main id="main">
      <section className="page-banner">
        <div className="wrap">
          <p className="overline">ANA SAYFA / KURUMSAL</p>
          <h1>ofirma hakkında</h1>
          <p>Ölçüye, kullanım alanına ve gerçek ihtiyaca odaklanan mühendislik yaklaşımı.</p>
        </div>
      </section>

      <section className={'wrap corporate-story' + (hasVerifiedProductImage(imageId) ? '' : ' corporate-story-no-image')}>
        <div>
          <p className="overline">ÇALIŞMA YAKLAŞIMIMIZ</p>
          <h2>
            İhtiyacı birlikte
            <br />
            netleştirelim.
          </h2>
          <p>
            ofirma, Merzifon 100. Yıl Sanayi Sitesi&apos;ndeki atölyesinde; özel üretim fabrika ve atölye içi taşıma ekipmanları,
            makine revizyonu ve restorasyonu, numuneden parça imalatı, tersine mühendislik ve teknik çizim hizmetleri sunar.
          </p>
          <p>
            Merzifon merkezli yapımızla Merzifon OSB, Amasya, Suluova, Havza, Çorum ve Samsun sanayi havzalarında ihtiyacın doğru
            tanımlanmasını başlangıç noktası kabul ediyoruz. İster fabrikanızın parça akışına özel bir talaş arabası veya taşıma kasası,
            isterse tedarik edilemeyen veya aşınmış bir makine parçasının yeniden üretimi olsun; değerlendirmeyi doğrudan iş parçasının
            ölçüsü, yükü ve çalışma ortamına göre şekillendiriyoruz.
          </p>
          <p>
            Teknik çiziminiz olmasa da fotoğraf veya numuneyle başlayabiliriz. Teknik uygunluk, malzeme seçimi, fiyat ve teslim
            süresi talep özelinde mühendislik değerlendirmesiyle netleşir.
          </p>
          <a className="cta" href="/iletisim">
            Bizimle iletişime geçin <ArrowUpRight size={18} />
          </a>
        </div>
        <ProductImage id={imageId} title="Profil taşıma arabası" />
      </section>

      <section className="wrap corporate-steps">
        <h2>Nasıl ilerliyoruz?</h2>
        <div>
          {workflowSteps.map(([n, title, text]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
