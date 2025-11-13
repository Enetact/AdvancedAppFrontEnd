
/* global self, caches, fetch */
const VERSION = 'v1.0.0';
const PREFIX = 'club-pwa';
const STATIC_CACHE = `${PREFIX}-static-${VERSION}`;
const RUNTIME_CACHE = `${PREFIX}-runtime-${VERSION}`;

const CORE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(STATIC_CACHE).then(cache => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k.startsWith(PREFIX) && ![STATIC_CACHE, RUNTIME_CACHE].includes(k)).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // SPA navigations
  if (req.mode === 'navigate') {
    event.respondWith(staleWhileRevalidate('/index.html'));
    return;
  }

  // Icons & fonts cache-first
  if (req.destination === 'image' && url.pathname.startsWith('/icons/')) {
    event.respondWith(cacheFirst(req)); return;
  }
  if (req.destination === 'font') {
    event.respondWith(cacheFirst(req)); return;
  }

  // Other images
  if (req.destination === 'image') {
    event.respondWith(cacheFirst(req)); return;
  }

  // Default
  event.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(RUNTIME_CACHE).then(c => c.put(req, copy));
      return res;
    }).catch(() => caches.match(req))
  );
});

async function staleWhileRevalidate(path) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(path);
  const network = fetch(path).then(res => { cache.put(path, res.clone()); return res; }).catch(()=>null);
  return cached || network || caches.match('/index.html');
}

async function cacheFirst(req) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    cache.put(req, res.clone());
    return res;
  } catch (e) {
    return caches.match('/icons/icon-192.png');
  }
}
