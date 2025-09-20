// Cache name and files
const CACHE_NAME = "offline-demo-v1";
const FILES_TO_CACHE = [
    "/index.js",
    "/index.html"
];

// Install Service Worker
self.addEventListener("install", (event) => {
    console.log("Service Worker installing...");
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Caching files...");
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// Fetch requests
self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
