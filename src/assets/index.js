// Exports all files under `src/assets` using Vite's import.meta.globEager
// - `assets` maps relative paths (e.g. "About Bottles_files/analytics.js") -> module default or module
// - `getAsset(path)` returns the asset by its relative path
// - `byFolder` groups assets by their top-level folder name

const modules = import.meta.globEager('./**/*.*');

const normalize = (p) => p.replace(/^\.\//, '');

const assets = Object.create(null);
for (const [p, mod] of Object.entries(modules)) {
    const key = normalize(p);
    assets[key] = mod && ('default' in mod ? mod.default : mod);
}

function groupByFolder(map) {
    const out = Object.create(null);
    for (const k of Object.keys(map)) {
        const parts = k.split('/');
        const folder = parts.length > 1 ? parts[0] : '.';
        out[folder] = out[folder] || Object.create(null);
        out[folder][k] = map[k];
    }
    return out;
}

export const byFolder = groupByFolder(assets);

export function getAsset(path) {
    // path should be relative to src/assets, e.g. "About Bottles_files/analytics.js"
    return assets[path] ?? null;
}

export default assets;
