// Vercel Serverless Function for Mekanikya Web Application

export default async function handler(req, res) {
  // If invoked with standard Web Request (Edge or Web standard runtime)
  if (typeof Request !== 'undefined' && req instanceof Request) {
    const serverModule = await import('../dist/server/index.js');
    const server = serverModule.default;
    return server.fetch(req, process.env);
  }

  // Node.js IncomingMessage / ServerResponse handler
  try {
    const serverModule = await import('../dist/server/index.js');
    const server = serverModule.default;

    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const url = `${protocol}://${host}${req.url}`;

    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value) {
        if (Array.isArray(value)) {
          for (const item of value) headers.append(key, item);
        } else {
          headers.set(key, value);
        }
      }
    }

    const init = {
      method: req.method,
      headers,
    };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      init.body = req;
      init.duplex = 'half';
    }

    const webReq = new Request(url, init);
    const response = await server.fetch(webReq, process.env);

    res.statusCode = response.status;
    response.headers.forEach((val, key) => {
      res.setHeader(key, val);
    });

    const arrayBuffer = await response.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error('[Vercel Handler Error]:', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Sunucu hatası oluştu: ' + (err?.message || err));
  }
}
