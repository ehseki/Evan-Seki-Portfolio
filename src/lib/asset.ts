// Prefixes a public/ asset path with Vite's configured base (see vite.config.ts),
// so images resolve correctly both in dev and when deployed under a subpath (GitHub Pages).
export function asset(path: string): string {
    return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
