const CACHE_NAME = 'cash-ledger-v2';
const ASSETS = [
  '/Cash-ledger/',
  '/Cash-ledger/index.html',
  '/Cash-ledger/manifest.webmanifest',
  '/Cash-ledger/icon-192.png',
  '/Cash-ledger/icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
