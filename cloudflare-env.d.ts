declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    MEDIA?: R2Bucket;
    ADMIN_EMAIL?: string;
    ADMIN_PASSWORD_HASH?: string;
    JWT_SECRET?: string;
  }
}
