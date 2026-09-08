import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Özel Ölçü Konveyör Rulosu | ofirma',description:'Özel ölçü ve yedek konveyör rulosu için ölçülerinizi paylaşın. ofirma ile teknik detayları netleştirin, WhatsApp üzerinden teklif isteyin.'};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="tr"><body><a className="skip-link" href="#main">İçeriğe geç</a>{children}</body></html>; }

