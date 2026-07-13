// Very small in-memory cache. First request populates, subsequent are instant.
// Cleared on server restart — that's fine for MVP.

const store = new Map<string, { value: unknown; expiresAt: number }>();

export function cacheGet<T>(key: string): T | null {
  const hit = store.get(key);
  if (!hit) return null;
  if (hit.expiresAt < Date.now()) {
    store.delete(key);
    return null;
  }
  return hit.value as T;
}

export function cacheSet<T>(key: string, value: T, ttlSeconds = 60 * 60 * 6) {
  store.set(key, { value, expiresAt: Date.now() + ttlSeconds * 1000 });
}
