// console.log("service worker from public");
let cacheData = "pwaDemo";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll(["/static/js/bundle.js", "/index.html", "/users", "/", "/*"]);
      // ["/static/js/bundle.js", "/index.html", "/users", "/", "/*"].map((el) => cache.add(el));
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});
