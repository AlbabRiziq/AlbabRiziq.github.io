var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/index.html',
  '/style.css',
  '/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });

self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheNames){
              return cacheNames != CACHE_NAME
          }).map(function(cacheNames){
              return caches.delete(cacheNames)
          })
        );
      })
    );
  });