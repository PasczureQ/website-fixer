/**
 * Resolves an asset path relative to the app's base URL.
 * Use this for all static assets in /public to ensure they work with base path deployments.
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
