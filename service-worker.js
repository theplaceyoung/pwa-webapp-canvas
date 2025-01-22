const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/icons/icon-16x16.png',
    '/icons/icon-32x32.png'
];

// 서비스 워커 설치
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
            .catch((error) => {
                console.error('Failed to cache resources:', error);
            })
    );
});

// 서비스 워커 활성화
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// 요청 처리 (캐시 우선, 네트워크 후속)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;  // 캐시된 응답을 반환
            }
            return fetch(event.request);  // 네트워크에서 응답을 받음
        })
    );
});
