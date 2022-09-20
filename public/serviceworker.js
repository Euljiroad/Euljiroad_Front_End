const CACHE_NAME = "version-1";
const urlsToCathe = ["index.html", "offline.html"];
let deferredPrompt;
const self = this;

//Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCathe);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// window.addEventListener("beforeinstallprompt", function (event) {
//   event.preventDefault();
//   //@ts-ignore
//   window.promptEvent = event;
//   if (window.matchMedia("(display-mode: standalone)").matches) {
//     console.log("display-mode is standalone");
//   } else {
//     setVisible(true);
//   }
// });

// function addToHomeScreen() {
//   //@ts-ignore
//   window.promptEvent.prompt();
//   //@ts-ignore
//   window.promptEvent.userChoice.then((choiceResult) => {
//     if (choiceResult.outcome === "accepted") {
//       console.log("User accepted the A2HS prompt");
//     } else {
//       console.log("User dismissed the A2HS prompt");
//     }
//   });
// }
