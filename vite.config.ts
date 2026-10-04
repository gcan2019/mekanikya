import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

const workerConfig = {
  name: 'ofirma-site',
  main: 'vinext/server/fetch-handler',
  compatibility_date: '2026-05-15',
  compatibility_flags: ['nodejs_compat'],
  d1_databases: [
    {
      binding: 'DB',
      database_name: 'ofirma-db',
      database_id: 'e44a4439-7c99-46d8-b2a3-09f71f73714c',
    },
  ],
  r2_buckets: [
    {
      binding: 'MEDIA',
      bucket_name: 'ofirma-media',
    },
  ],
  vars: {
    ADMIN_EMAIL: 'gokhan1cants@gmail.com',
  },
};

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(async () => {
  // Keep Wrangler and Miniflare state project-local. These are non-secret tool
  // settings; application environment belongs in ignored `.env*` files.
  process.env.WRANGLER_WRITE_LOGS ??= 'false';
  process.env.WRANGLER_LOG_PATH ??= '.wrangler/logs';
  process.env.MINIFLARE_REGISTRY_PATH ??= '.wrangler/registry';

  // Wrangler snapshots its log path while the Cloudflare plugin is imported.
  const { cloudflare } = await import('@cloudflare/vite-plugin');

  return {
    resolve: {
      alias: {
        'cloudflare:workers': path.resolve(__dirname, 'lib/cf-env.ts'),
      },
    },
    css: { postcss: { plugins: [tailwindcss()] } },
    plugins: [
      vinext(),
      cloudflare({
        viteEnvironment: { name: 'rsc', childEnvironments: ['ssr'] },
        config: workerConfig,
      }),
    ],
  };
});
