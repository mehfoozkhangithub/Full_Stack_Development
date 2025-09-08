const CACHE_NAME = "offline-demo-v1";
const FILES_TO_CACHE = ["index.html", "style.css", "offline.html"];

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((response) => {
      return response || fetch(evt.request).catch(() => caches.match("offline.html"));
    })
  );
});
