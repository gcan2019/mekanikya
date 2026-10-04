// Universal environment helper for Cloudflare Workers, Node.js, and Vercel

let resolvedEnv: any = null;

try {
  if (typeof globalThis !== 'undefined' && (globalThis as any).env) {
    resolvedEnv = (globalThis as any).env;
  } else if (typeof process !== 'undefined' && process.env) {
    resolvedEnv = process.env;
  } else {
    resolvedEnv = {};
  }
} catch {
  resolvedEnv = {};
}

export const env = resolvedEnv as Cloudflare.Env;

export class WorkerEntrypoint {}
export class DurableObject {}
export class WorkflowEntrypoint {}

export default {
  env,
  WorkerEntrypoint,
  DurableObject,
  WorkflowEntrypoint,
};
