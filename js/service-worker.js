


self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('user').then((cache) => cache.addAll([
  '/user',
  '/user/index.php',
  '/user/css/style.css',
  '/user/js/main.js'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
