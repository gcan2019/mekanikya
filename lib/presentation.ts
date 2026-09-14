import { products } from './catalog';
import { additionalProducts } from './additional-products';

export const categories = [
 {id:'fabrika-tasima',title:'Fabrika içi taşıma',description:'Metal kasalar, paletler, talaş arabaları ve özel malzeme taşıma çözümleri.'},
 {id:'kalip-atolye',title:'Kalıp ve atölye yardımcıları',description:'Kalıp taşıma, destek, yıkama ve üretim alanı ekipmanları.'},
 {id:'forklift',title:'Forklift ataşmanları',description:'Çatal uzatma ve özel ataşman ihtiyaçları için uyumluluk değerlendirmesi.'},
 {id:'konveyor',title:'Taşıma ve aktarma',description:'Özel ölçü konveyör ruloları ve aktarma bileşenleri.'},
 {id:'sektorel',title:'Sektöre özel çözümler',description:'Tekstil, sac, tüp ve farklı üretim süreçlerine göre tasarlanan ekipmanlar.'},
];
const groups:Record<string,string>={'konveyor-rulosu':'konveyor','profil-tasima-arabasi':'fabrika-tasima','talas-hurda-arabasi':'fabrika-tasima','metal-tasima-kasasi':'fabrika-tasima','tup-tasima-kafesi':'fabrika-tasima','sac-levha-tasima-arabasi':'fabrika-tasima','abkant-kalip-arabasi':'kalip-atolye','sac-stoklama-rafi':'kalip-atolye','rulolu-destek-sehpasi':'kalip-atolye','parca-yikama-sepeti':'kalip-atolye','forklift-catal-uzatma':'forklift','tekstil-tasima-arabasi':'sektorel'};
export const catalogItems=[...products,...additionalProducts].map(product=>({...product,group:groups[product.id],image:'/images/'+product.id+'.png'}));
