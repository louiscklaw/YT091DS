# Plan: Fix PWA Path Resolution for GitHub Pages and Local Hosting

## Objective

Enable the PWA and service worker to work correctly on both GitHub Pages (`https://louiscklaw.github.io/YT091DS/`) and local development servers (`docs/serve.sh`).

## Dual-Environment Strategy (Local vs GitHub Pages)
- **Zero Hardcoding Strategy**: Use **relative paths (`./`)** across all service worker registrations, asset cache lists, fetch fallbacks, and manifest configurations.
- **Why it works**: Relative paths resolve relative to the current document's location (`/YT091DS/...` on GitHub Pages and `/` locally), satisfying both environments automatically without conditional environment checks.

## Root Causes Identified

1. **Root-relative URLs (`/`)**: Assets, service worker registration (`/sw.js`), and manifest references use absolute root paths (`/sw.js`, `/index.html`), which resolve to the domain root (`https://louiscklaw.github.io/sw.js`) rather than the repository subpath (`https://louiscklaw.github.io/YT091DS/sw.js`).
2. **Incorrect Manifest Icon Paths**: `manifest.json` references `/icon-192.png` and `/icon-512.png`, whereas actual icons are in `/assets/icons/icon_192.png` and `/assets/icons/icon_512.png`.

## Proposed Steps

1. **Relative Service Worker Registration (`index.js`)**:
   - Update `navigator.serviceWorker.register` to use `./sw.js`.
2. **Relative Assets and Fallbacks in Service Worker (`sw.js`)**:
   - Update `ASSETS_TO_CACHE` and cache-matching fallback routes to use relative paths (e.g., `./`, `./index.html`, `./fallback-offline.png`).
3. **Fix Web App Manifest (`manifest.json`)**:
   - Correct icon paths to point to `./assets/icons/icon_192.png` and `./assets/icons/icon_512.png`.
   - Update `start_url` to `./index.html`.
4. **Verification**:
   - Test locally using `docs/serve.sh` and verify path correctness.
