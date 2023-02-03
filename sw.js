// console.log("service worker from public");
let cacheData = "pwaDemo";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll(["/PWA_Demo/static/js/bundle.js", "/PWA_Demo/index.html", "/PWA_Demo/users", "/PWA_Demo/", "/PWA_Demo/about"]);
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
