import type { Metadata } from 'next';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import './globals.css';
export const metadata: Metadata = {title:'ofirma | Endüstriyel Ekipmanlar',description:'Konveyör, taşıma ve depolama ekipmanları için ürün kataloğu, teknik bilgiler ve teklif talepleri.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body><a className="skip-link" href="#main">İçeriğe geç</a><SiteHeader/>{children}<SiteFooter/></body></html>;}
