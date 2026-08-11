const CACHE_NAME = 'pwa-image-cache-v4';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './index.js',
    './manifest.json',
    './fallback-offline.png',
    // 
    './assets/all.min.css',
    '/webfonts/fa-solid-900.woff2',
    '/webfonts/fa-regular-400.woff2',
    '/webfonts/fa-brands-400.woff2',

    // 

    'https://picsum.photos/300/200?random=1',
    'https://picsum.photos/300/200?random=2',
    // 
    './images/image.png',
    './images/image-1.png',
    './images/image-2.png',
    './images/image-3.png',
    './images/image-4.png',
    './images/image-5.png',
    './images/image-6.png',
    './images/image-7.png',
    './images/image-8.png',
    './images/image-9.png',
    './images/image-10.png',
    './images/image-11.png',
    './images/image-12.png',
    './images/image-13.png',
    './images/image-14.png',
    './images/image-15.png',
    './images/image-16.png',
    './images/image-17.png',
    './images/image-18.png',
    './images/image-19.png',
    './images/image-20.png',
    './images/image-21.png',
    './images/image-22.png',
    './images/image-23.png',
    './images/image-24.png',
    './images/image-25.png',
    './images/image-26.png',
    './images/image-27.png',
    './images/image-28.png',
    './images/image-29.png',
    './images/image-30.png',
    './images/image-31.png',
    './images/image-32.png',
    './images/image-33.png',
    './images/image-34.png',
    './images/image-35.png',
    './images/image-36.png',
    './images/image-37.png',
    './images/image-38.png',
    './images/image-39.png',
    './images/image-40.png',
    './images/image-41.png',
    './images/image-42.png',
    './images/image-43.png',
    './images/image-44.png',
    './images/image-45.png',
    './images/image-46.png',
    './images/image-47.png',
    './images/image-48.png',
    './images/image-49.png',
    './images/image-50.png',
    './images/image-51.png',
    './images/image-52.png',
    './images/image-53.png',
    './images/image-54.png',
    './images/image-55.png',
    './images/image-56.png',
    './images/image-57.png',
    './images/image-58.png',
    './images/image-59.png',
    './images/image-xx.png',
    // 
    // '/chapter_2_mc.html',
    // '/chapter_2_mc.js',
    // '/chapter_3_mc.html',
    // '/chapter_3_mc.js',
    // // 
    './herbs_recognition.html',
    './herbs_recognition.js',
];

// 1. Install Event: Pre-cache static assets and fallback image
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// 2. Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// 3. Fetch Event: Intercept requests and serve from cache or network
self.addEventListener('fetch', (event) => {
    const requestUrl = new URL(event.request.url);

    // Handle navigation (HTML pages)
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    if (networkResponse.status === 200) {
                        const cacheCopy = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, cacheCopy);
                        });
                    }
                    return networkResponse;
                })
                .catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html')))
        );
        return;
    }

    // Check if the request is for an image or other assets
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request).then((networkResponse) => {
                if (networkResponse.status === 200) {
                    const cacheCopy = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, cacheCopy);
                    });
                }
                return networkResponse;
            }).catch(() => {
                if (event.request.destination === 'image') {
                    return caches.match('./fallback-offline.png');
                }
            });
        })
    );
});
