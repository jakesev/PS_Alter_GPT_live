const CACHE_VERSION = 'ps-alter-gpt-v3';
const APP_SCOPE = new URL(self.registration.scope).pathname;
const APP_SHELL = [
  APP_SCOPE,
  `${APP_SCOPE}index.html`,
  `${APP_SCOPE}manifest.webmanifest`,
  `${APP_SCOPE}favicon.png`,
  `${APP_SCOPE}apple-touch-icon.png`,
  `${APP_SCOPE}icons/icon-192.png`,
  `${APP_SCOPE}icons/icon-512.png`,
  `${APP_SCOPE}icons/maskable-icon-512.png`,
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((key) => (key === CACHE_VERSION ? undefined : caches.delete(key)))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(request.url);

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match(APP_SCOPE).then((response) => response || caches.match(`${APP_SCOPE}index.html`)))
    );
    return;
  }

  if (requestUrl.pathname.endsWith('.mp3')) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(request, responseToCache));
        return networkResponse;
      });
    })
  );
});
