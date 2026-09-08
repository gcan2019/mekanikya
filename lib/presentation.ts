import { products } from './catalog';
import { additionalProducts } from './additional-products';

export const categories = [
 {id:'konveyor',title:'Konveyör bileşenleri',description:'Özel ölçü ve yedek konveyör ruloları.'},
 {id:'tasima',title:'Taşıma arabaları',description:'Profil, kalıp ve tekstil taşıma ihtiyaçları.'},
 {id:'depolama',title:'Depolama ekipmanları',description:'Sac, levha ve gaz tüpü yerleşim çözümleri.'},
 {id:'forklift',title:'Forklift ekipmanları',description:'Çatal uzatma ve uyumluluk değerlendirmesi.'},
];
const groups:Record<string,string>={'konveyor-rulosu':'konveyor','profil-tasima-arabasi':'tasima','abkant-kalip-arabasi':'tasima','tekstil-tasima-arabasi':'tasima','sac-stoklama-rafi':'depolama','tup-tasima-kafesi':'depolama','forklift-catal-uzatma':'forklift'};
export const catalogItems=[...products,...additionalProducts].map(product=>({...product,group:groups[product.id],image:'/images/'+product.id+'.png'}));
