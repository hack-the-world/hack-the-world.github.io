//guardar cache
var cacheName = 'shell-content';
var filesToCache = [
  'index.css',
  'index.js',
  'media/logo.svg',

  'index.html',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Cache instalado para una carga mas rapida');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});


function a(){console.log("Hola mundo")}