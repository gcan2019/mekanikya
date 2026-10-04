import type { Metadata } from 'next';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import FloatingWhatsapp from '@/components/floating-whatsapp';
import { getBusinessContent, getCatalogItems } from '@/lib/site-content';
import './globals.css';
export const metadata: Metadata = {
  verification: {
    google: ['kqT1RXH6_ZG9K497UMbgxj2umvveSEn1Jw9qG4Pwb4U', '4q0hDEWOkboHBKmIY6d8em_TexBtgi54wM6kZgy5BFI'],
  },
  title: 'Mekanikya | Endüstriyel Ekipmanlar',
  description: 'Konveyör, taşıma ve depolama ekipmanları için ürün kataloğu, teknik bilgiler ve teklif talepleri.',
};
export const dynamic = 'force-dynamic';
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [business, items] = await Promise.all([getBusinessContent(), getCatalogItems()]);
  return (
    <html lang="tr">
      <head>
        <meta name="google-site-verification" content="4q0hDEWOkboHBKmIY6d8em_TexBtgi54wM6kZgy5BFI" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">İçeriğe geç</a>
        <SiteHeader business={business} />
        {children}
        <FloatingWhatsapp whatsapp={business.whatsapp} />
        <SiteFooter business={business} items={items} />
      </body>
    </html>
  );
}
