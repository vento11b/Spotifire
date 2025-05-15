console.log("Hola");
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('hola-mundo-cache').then(cache => {
      return cache.addAll([
        '.',
        './index.html',
        './style.css',
        './sw.js',
        './manifest.json',
        './logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
