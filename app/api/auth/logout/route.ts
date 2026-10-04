export async function GET(request: Request) {
  return handleLogout(request);
}

export async function POST(request: Request) {
  return handleLogout(request);
}

function handleLogout(request: Request) {
  const url = new URL(request.url);
  const returnTo = url.searchParams.get('return_to') || '/yonetim/giris';
  
  const headers = new Headers();
  headers.set('Set-Cookie', '__admin_session=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0');
  headers.set('Location', returnTo);
  
  return new Response(null, { status: 302, headers });
}
