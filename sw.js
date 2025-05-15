console.log("Hola");
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('hola-mundo-cache').then(cache => {
      return cache.addAll([
        'Spotifire/',
        'Spotifire/index.html',
        'Spotifire/style.css',
        'Spotifire/sw.js',
        'Spotifire/manifest.json',
        'Spotifire/logo.png'
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
