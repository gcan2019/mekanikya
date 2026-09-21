import { LockKeyhole, LogOut } from 'lucide-react';
import { requireChatGPTUser } from '@/app/chatgpt-auth';
import { getSiteContent, isSiteAdmin } from '@/lib/site-content';
import ManagementEditor from './management-editor';

export const dynamic = 'force-dynamic';

export default async function ManagementPage() {
  const user = await requireChatGPTUser('/yonetim');

  if (!isSiteAdmin(user)) {
    return (
      <main id="main" className="management-shell">
        <section className="management-denied">
          <LockKeyhole size={34} />
          <p className="overline">YÖNETİM PANELİ</p>
          <h1>Bu hesap için yönetim yetkisi yok.</h1>
          <p>{user.email} hesabıyla oturum açıldı. Site sahibi hesabıyla yeniden giriş yapın.</p>
          <a className="cta" href="/signout-with-chatgpt?return_to=/yonetim" target="_top">
            Başka hesapla giriş yap <LogOut size={17} />
          </a>
        </section>
      </main>
    );
  }

  const content = await getSiteContent();
  return <ManagementEditor initialContent={content} userName={user.displayName} />;
}
