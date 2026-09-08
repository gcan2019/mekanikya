'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, Phone, ArrowUpRight } from 'lucide-react';
import { Sheet,SheetTrigger,SheetContent,SheetHeader,SheetTitle,SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { business } from '@/lib/catalog';

const links=[['/','Ana Sayfa'],['/kurumsal','Kurumsal'],['/urunler','Ürünlerimiz'],['/hizmetler/makine-restorasyonu','Hizmetler'],['/iletisim','İletişim']];
export default function SiteHeader(){
 const [open,setOpen]=useState(false);const path=usePathname();
 return <><div className="company-top"><div className="wrap"><span>MERZİFON / AMASYA</span><a href={'tel:'+business.phone}><Phone size={13}/>{business.phoneDisplay}</a></div></div><header className="company-header"><div className="wrap company-nav"><a className="company-brand" href="/" aria-label="ofirma ana sayfa">ofirma<span>.</span><small>ENDÜSTRİYEL EKİPMANLAR</small></a><nav className="desktop-nav" aria-label="Ana menü">{links.map(([href,label])=><a href={href} key={href} aria-current={path===href?'page':undefined}>{label}</a>)}</nav><a className="company-quote" href="/iletisim">Teklif ve bilgi <ArrowUpRight size={17}/></a><div className="mobile-menu"><Sheet open={open} onOpenChange={setOpen}><SheetTrigger render={<Button variant="outline" size="icon" aria-label="Menüyü aç"/>}><Menu/></SheetTrigger><SheetContent className="mobile-sheet"><SheetHeader><SheetTitle>ofirma</SheetTitle><SheetDescription>Ürünler ve iletişim</SheetDescription></SheetHeader><nav aria-label="Mobil menü">{links.map(([href,label])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav><a className="cta" href={'tel:'+business.phone}><Phone size={17}/>{business.phoneDisplay}</a></SheetContent></Sheet></div></div></header></>;
}
