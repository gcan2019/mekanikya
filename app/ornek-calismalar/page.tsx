import { business } from '@/lib/catalog';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { getCaseStudies } from '@/lib/site-content';

export const metadata: Metadata = {
  alternates: { canonical: business.siteUrl + '/ornek-calismalar' },
  title: 'Örnek Çalışmalar | ofirma',
  description: 'ofirma makine restorasyonu, özel parça yenileme ve mühendislik uygulamalarından gerçek örnekler.',
};

export default async function CaseStudies() {
  const studies = await getCaseStudies();
  return (
    <main id="main">
      <section className="page-banner">
        <div className="wrap">
          <p className="overline">OFİRMA / ÖRNEK ÇALIŞMALAR</p>
          <h1>Gerçek makineler, gerçek çözümler.</h1>
          <p>Numune, arıza veya yenileme ihtiyacından başlayıp uygulamaya dönüşen çalışmalarımız.</p>
        </div>
      </section>
      <section className="wrap case-index">
        {studies.map((study) => (
          <article key={study.id}>
            {study.coverImage && (
              <img
                width="1496"
                height="1496"
                loading="lazy"
                src={study.coverImage.src}
                alt={study.coverImage.alt || study.title}
              />
            )}
            <div>
              <p className="overline">{study.category.toLocaleUpperCase('tr-TR')}</p>
              <h2>{study.title}</h2>
              <p>{study.summary}</p>
              <a className="cta" href={`/ornek-calismalar/${study.id}`}>
                Çalışmayı inceleyin <ArrowUpRight size={18} />
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

