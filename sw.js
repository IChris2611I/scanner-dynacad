/* Cache statique du scanner Dynacad. */
const CACHE = 'dynacad-v4';
const PRECACHE = ['./', './index.html', './catalog.json',
  ...Array.from({ length: 13 }, (_, i) => './thumbs-' + String(i + 1).padStart(2, '0') + '.json')];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache =>
    Promise.all(PRECACHE.map(url => cache.add(url).catch(error => {
      console.warn('Préchargement impossible :', url, error);
    })))
  ).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(key => key.startsWith('dynacad-') && key !== CACHE)
      .map(key => caches.delete(key)))
  ).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(request).then(response => {
    if (response.ok) {
      const copy = response.clone();
      event.waitUntil(caches.open(CACHE).then(cache => cache.put(request, copy)));
    }
    return response;
  }).catch(() => caches.match(request).then(hit =>
    hit || (request.mode === 'navigate' ? caches.match('./') : Response.error())
  )));
});
