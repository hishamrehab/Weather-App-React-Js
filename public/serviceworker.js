const CACHE_NAME = "Version-1";
const urlToCache = ["index.html", "offline.html"];

const self = this;
// install SW

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME)).then((cache) => {
    console.log("opened cache");

    return cache.addAll(urlToCache);
  });
});

// Listen for requests
self.addEventListener("fetch", (event) => {
    event.resondWith(event)
});

// Activate the Sw
self.addEventListener("activate", (event) => {});
