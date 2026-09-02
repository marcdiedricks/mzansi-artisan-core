// Mzansi Artisan Core — minimal offline foundation
const CACHE_NAME = 'mzansi-artisan-core-v0.1-12';
const CORE_ASSETS = [
  './',
  './index.html',
  './README.md',
  './core/storage.js',
  './core/trade-pack-loader.js',
  './trade-packs/boilermaker/manifest.json',
  './trade-packs/boilermaker/trade.json',
  './trade-packs/boilermaker/learning/KM-04/lesson-01.json',
  './trade-packs/boilermaker/learning/KM-05/lesson-01.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key.startsWith('mzansi-artisan-core-') && key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    ))
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
