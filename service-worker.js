const CACHE_NAME = "streak-strike-v3";
const FILES_TO_CACHE = ["manifest.json", "icon-192.png", "icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first for the HTML page so updates always show up right away.
// Cache-first only for static assets (icons, manifest) that rarely change.
self.addEventListener("fetch", (event) => {
  const isHTML = event.request.mode === "navigate" || event.request.url.endsWith("/") || event.request.url.endsWith("index.html");
  if (isHTML) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
  }
});
