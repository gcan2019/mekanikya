import { business } from '@/lib/catalog';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = { alternates: { canonical: business.siteUrl + '/ornek-calismalar' }, title: 'Örnek Çalışmalar | ofirma', description: 'ofirma makine restorasyonu, özel parça yenileme ve mühendislik uygulamalarından gerçek örnekler.' };

export default function CaseStudies(){return <main id="main"><section className="page-banner"><div className="wrap"><p className="overline">OFİRMA / ÖRNEK ÇALIŞMALAR</p><h1>Gerçek makineler, gerçek çözümler.</h1><p>Numune, arıza veya yenileme ihtiyacından başlayıp uygulamaya dönüşen çalışmalarımız.</p></div></section><section className="wrap case-index"><article><img width="1496" height="1496" loading="lazy" src="/images/calisma-sebze-dograma/bicak-seti.jpg" alt="Sebze doğrama makinesi bıçak setleri"/><div><p className="overline">MAKİNE RESTORASYONU</p><h2>Sebze doğrama makinesi bıçak yenileme</h2><p>Sebze doğrama makinesinin bıçakları değiştirildi. Makine ve kesim disklerine ait gerçek çalışma fotoğraflarını inceleyin.</p><a className="cta" href="/ornek-calismalar/sebze-dograma-bicaklari">Çalışmayı inceleyin <ArrowUpRight size={18}/></a></div></article></section></main>}
