// This is the "Offline copy of assets" service worker
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

const CACHE = "pwabuilder-offline";

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

const IMAGES_TO_PREFETCH = [
  '/images/image.png',
  '/images/image-1.png',
  '/images/image-2.png',
  '/images/image-3.png',
  '/images/image-4.png',
  '/images/image-5.png',
  '/images/image-6.png',
  '/images/image-7.png',
  '/images/image-8.png',
  '/images/image-9.png',
  '/images/image-10.png',
  '/images/image-11.png',
  '/images/image-12.png',
  '/images/image-13.png',
  '/images/image-14.png',
  '/images/image-15.png',
  '/images/image-16.png',
  '/images/image-17.png',
  '/images/image-18.png',
  '/images/image-19.png',
  '/images/image-20.png',
  '/images/image-21.png',
  '/images/image-22.png',
  '/images/image-23.png',
  '/images/image-24.png',
  '/images/image-25.png',
  '/images/image-26.png',
  '/images/image-27.png',
  '/images/image-28.png',
  '/images/image-29.png',
  '/images/image-30.png',
  '/images/image-31.png',
  '/images/image-32.png',
  '/images/image-33.png',
  '/images/image-34.png',
  '/images/image-35.png',
  '/images/image-36.png',
  '/images/image-37.png',
  '/images/image-38.png',
  '/images/image-39.png',
  '/images/image-40.png',
  '/images/image-41.png',
  '/images/image-42.png',
  '/images/image-43.png',
  '/images/image-44.png',
  '/images/image-45.png',
  '/images/image-46.png',
  '/images/image-47.png',
  '/images/image-48.png',
  '/images/image-49.png',
  '/images/image-50.png',
  '/images/image-51.png',
  '/images/image-52.png',
  '/images/image-53.png',
  '/images/image-54.png',
  '/images/image-55.png',
  '/images/image-56.png',
  '/images/image-57.png',
  '/images/image-58.png',
  '/images/image-59.png',
  '/images/image-xx.png',
  // 
  '/index.html',
  // 
  '/chapter_2_mc.html',
  '/chapter_2_mc.js',
  '/chapter_3_mc.html',
  '/chapter_3_mc.js',
  // 
  '/herbs_recognition.html',
  '/herbs_recognition.js',
];

// Install event: Prefetch and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Prefetching images...');
      return cache.addAll(IMAGES_TO_PREFETCH);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      console.log("hello cache");
      // Return cached image if found, otherwise fetch from network
      return cachedResponse || fetch(event.request);
    })
  );
});


// // Intercept fetch requests
// self.addEventListener('fetch', (event) => {
//   console.log("attaching fetch");

//   // const requestUrl = new URL(event.request.url);

//   // // Check if the request is for an image
//   // if (event.request.destination === 'image') {
//   //   event.respondWith(
//   //     caches.open(CACHE_NAME).then((cache) => {
//   //       return cache.match(event.request).then((cachedResponse) => {
//   //         // 1. Return the cached image immediately if it exists
//   //         if (cachedResponse) {
//   //           console.log("image load from cache");
//   //           return cachedResponse;
//   //         }

//   //         // 2. Fetch from network, clone response, and cache it if not already cached
//   //         return fetch(event.request).then((networkResponse) => {
//   //           console.log("fetch image from network");

//   //           // Only cache valid structural responses (not errors)
//   //           if (networkResponse.status === 200) {
//   //             cache.put(event.request, networkResponse.clone());
//   //           }
//   //           return networkResponse;
//   //         }).catch(() => {
//   //           // Optional: Return a fallback offline placeholder image if network fails
//   //           return caches.match('/images/fallback-offline.png');
//   //         });
//   //       });
//   //     })
//   //   );
//   // }
// });


