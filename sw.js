// Moe Kyaw Aung Portfolio - Service Worker
// Version: 1.0.0 | Flutter-themed PWA

const CACHE_NAME = 'moe-portfolio-v1';
const RUNTIME_CACHE = 'moe-runtime-v1';

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&family=Space+Grotesk:wght@300;400;600;700&display=swap'
];

// ---- INSTALL ----
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ---- ACTIVATE ----
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME && name !== RUNTIME_CACHE)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// ---- FETCH: Cache First, then Network ----
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip chrome-extension and other non-http
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      // Network request with runtime caching
      return fetch(request)
        .then(response => {
          // Cache valid responses
          if (response && response.status === 200) {
            const cloned = response.clone();
            caches.open(RUNTIME_CACHE).then(cache => {
              // Only cache same-origin and fonts
              if (
                url.origin === self.location.origin ||
                url.hostname === 'fonts.googleapis.com' ||
                url.hostname === 'fonts.gstatic.com'
              ) {
                cache.put(request, cloned);
              }
            });
          }
          return response;
        })
        .catch(() => {
          // Offline fallback for navigation
          if (request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
    })
  );
});

// ---- PUSH NOTIFICATIONS ----
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || 'New update from Moe Portfolio!',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'moe-portfolio',
    renotify: true,
    data: { url: data.url || '/' }
  };
  event.waitUntil(
    self.registration.showNotification(
      data.title || 'Moe Kyaw Aung Portfolio',
      options
    )
  );
});

// ---- NOTIFICATION CLICK ----
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});
