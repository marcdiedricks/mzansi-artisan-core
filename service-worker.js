// Mzansi Artisan Core — offline foundation with safe update behaviour
const CACHE_NAME = 'mzansi-artisan-core-v0.1-16';
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
self.addEventListener('install',(event)=>{event.waitUntil(caches.open(CACHE_NAME).then((cache)=>cache.addAll(CORE_ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',(event)=>{event.waitUntil(caches.keys().then((keys)=>Promise.all(keys.filter((key)=>key.startsWith('mzansi-artisan-core-')&&key!==CACHE_NAME).map((key)=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',(event)=>{if(event.request.method!=='GET')return;const request=event.request;const url=new URL(request.url);const isNavigation=request.mode==='navigate';const isAppShell=url.origin===self.location.origin&&(url.pathname.endsWith('/mzansi-artisan-core/')||url.pathname.endsWith('/mzansi-artisan-core/index.html'));if(isNavigation||isAppShell){event.respondWith(fetch(request).then((response)=>{if(response&&response.ok){const copy=response.clone();caches.open(CACHE_NAME).then((cache)=>cache.put('./index.html',copy))}return response}).catch(()=>caches.match('./index.html').then((cached)=>cached||caches.match('./'))));return}event.respondWith(caches.match(request).then((cached)=>cached||fetch(request)))});
