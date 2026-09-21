import type { Metadata } from 'next';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import { getBusinessContent, getCatalogItems } from '@/lib/site-content';
import './globals.css';
export const metadata: Metadata = {verification:{google:'kqT1RXH6_ZG9K497UMbgxj2umvveSEn1Jw9qG4Pwb4U'},title:'ofirma | Endüstriyel Ekipmanlar',description:'Konveyör, taşıma ve depolama ekipmanları için ürün kataloğu, teknik bilgiler ve teklif talepleri.'};
export const dynamic = 'force-dynamic';
export default async function RootLayout({children}:{children:React.ReactNode}){const [business,items]=await Promise.all([getBusinessContent(),getCatalogItems()]);return <html lang="tr"><body><a className="skip-link" href="#main">İçeriğe geç</a><SiteHeader business={business}/>{children}<SiteFooter business={business} items={items}/></body></html>;}
