// This is the "Offline copy of assets" service worker

const CACHE = "pwabuilder-offline";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);


console.log("pwabuilder-sw.js loaded");

// 

const CACHE_NAME = 'pwa-image-cache-v1';

// Intercept fetch requests
self.addEventListener('fetch', (event) => {
  console.log("attaching fetch");

  const requestUrl = new URL(event.request.url);

  // Check if the request is for an image
  if (event.request.destination === 'image' || requestUrl.pathname.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          // 1. Return the cached image immediately if it exists
          if (cachedResponse) {
            console.log("image load from cache");
            return cachedResponse;
          }

          // 2. Fetch from network, clone response, and cache it if not already cached
          return fetch(event.request).then((networkResponse) => {
            console.log("fetch image from network");

            // Only cache valid structural responses (not errors)
            if (networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // Optional: Return a fallback offline placeholder image if network fails
            return caches.match('/images/fallback-offline.png');
          });
        });
      })
    );
  }
});
