'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8becaab4e3758a8559375ab40fe6a799",
"assets/AssetManifest.bin.json": "4f6d652f0ae60be874c442d7b438d61e",
"assets/AssetManifest.json": "f13846b602894883c5bd4f88c49a8173",
"assets/assets/animations/Airport-Pickup-Drop-Off-Service.jpg": "9aaeabd093193fca0bb12f5372aecb1a",
"assets/assets/animations/ambulence.jpg": "6388dd93e14284b77fe982bbe794fba3",
"assets/assets/animations/audi.png": "3d35c91885009acf515bc4b285860fc0",
"assets/assets/animations/driver.png": "3fb2d3c6644a9158384e4aa9ef69f6bf",
"assets/assets/animations/drive_test.png": "597878163095bcacbbd736e9f453d8a2",
"assets/assets/animations/icon.jpeg": "089bac6631f332c5adfaa75ed2f2b6cb",
"assets/assets/animations/Monthly-Car-Rental-in-Los-Angeles.jpg": "f6cc7904260bbf9146770293ed01f44a",
"assets/assets/animations/pick&drop.png": "9559fee47f380157e5eaa63b52afa18d",
"assets/assets/animations/success.json": "f49e7883e1336f4120fdc3f5c4cf9256",
"assets/assets/animations/unnamed.jpg": "68c025b8c2eba25e8c36976d6575905d",
"assets/assets/images/app.png": "f866f7f827c47156d76e5ee2d7799a67",
"assets/assets/images/auth.png": "d22cee1490bd235c9659a5dfcab55b2e",
"assets/assets/images/bdFlag.png": "2c18eac2f0ee10ed4c05ec1f796eb77b",
"assets/assets/images/bkash.png": "d3800cb30c0897e137077204c3b7bda8",
"assets/assets/images/bke.png": "e6f90761cf3c16860452cc699c871d43",
"assets/assets/images/car-rental.png": "64b250e3c99a9b32ea5bb62af6e79105",
"assets/assets/images/car1.png": "98f5e06a845466bfce54a0b713f70cd2",
"assets/assets/images/car10.png": "a74ab8e8cd92a44063ed760ef065e0a6",
"assets/assets/images/car2.png": "0e484deaed31a63a3949c721201e616e",
"assets/assets/images/car3.png": "34cdeac4c25c4f3a8d3b64caaee7f7aa",
"assets/assets/images/car4.png": "314f480748d332b089a2e0fe8eda242a",
"assets/assets/images/car5.png": "d0fac52e59c3f3f2da39a61df9330631",
"assets/assets/images/car6.webp": "c04cb5fc567f2d8d3229af90ca2debfd",
"assets/assets/images/car7.jpg": "6acbadfe7a49893784e9101fe84d3eae",
"assets/assets/images/car8.jpg": "34659f64164ed06a43e191049b532425",
"assets/assets/images/carBanner.jpg": "a48fe9224f3ce448e1f1e919a922a929",
"assets/assets/images/confused.jpg": "2df70c455a318d4bf8b7bfb886554400",
"assets/assets/images/confused.png": "d7dceb0ea79370ccf00cb11210ea69d4",
"assets/assets/images/discount.png": "992f9caaa1ae5e3d4e81aa89705508b5",
"assets/assets/images/empty.png": "f39a434d0ceaa5d5a691c7a105dfb544",
"assets/assets/images/help-web-button.png": "e0a393a5a08e5377bc29fcc094ef91be",
"assets/assets/images/i.png": "92817306171e7d99e4d593ab23561f6d",
"assets/assets/images/icon-logo.png": "1ade3e6836f1cdcb8ee5d1ad43f22ae8",
"assets/assets/images/information.png": "7bf3cbfe4784de56326ec8826090deb1",
"assets/assets/images/live.jpg": "3a4441536898e78dd217dd2cfbb46a09",
"assets/assets/images/logout.png": "909db4e9f9859e1b52f60baee027dff2",
"assets/assets/images/map.png": "ddd10074edf09c6106aad1f0dc07d8f2",
"assets/assets/images/menu-bar.png": "7e62d207c85addf26dc1638f404578ef",
"assets/assets/images/nagad.png": "672dbee045017d1073c835492c881a45",
"assets/assets/images/notification.png": "68582db6f763b50a86729cfb76f0ff0e",
"assets/assets/images/otp.png": "9b14c6a87d95c060ec880e9751341724",
"assets/assets/images/p.png": "5f9592264a7c25bc8b222f0707fb7322",
"assets/assets/images/package.png": "6c7ae321f447b4553b28c23fa87cc928",
"assets/assets/images/pick.png": "b1b6836ce4e271d2fd8182a8113f45cf",
"assets/assets/images/pro.png": "8dff49985d0d8afa53751d9ba8907aed",
"assets/assets/images/profile.png": "c79d2ac2c157a0ffffd6861a4d505eb9",
"assets/assets/images/promo.png": "2cc23d7097b28cb2e29c07c81fd6bfba",
"assets/assets/images/rental.png": "8147ff82bf7cdd561a8f539645f774ff",
"assets/assets/images/rental_trip.png": "58a571497490741aee4494df7bca4e8b",
"assets/assets/images/Return-Car-Final-Logo-2.png": "46b323ce3d11c253f5aa94d31d31e5b1",
"assets/assets/images/Return-Car-Final-Logo.png": "934b228ef8761ab2e8d008af39de2aa1",
"assets/assets/images/return.png": "c53ade3a863209510aa0af17ee3fbc40",
"assets/assets/images/rocket.png": "a28d5688de1aedeb1b87133aacf6d845",
"assets/assets/images/special.png": "e4323b4e96943e84e49f8684b850bcf3",
"assets/assets/images/truck1.jpg": "79cd8848885d06ea10d1c206e8f34d9c",
"assets/assets/images/truck2.jpg": "a6ee0dea730b5079d6b12a7101093d67",
"assets/assets/images/Winger-Ambulance.jpg": "56573b2f7d9d8534fd47c011108cb42e",
"assets/assets/images/world.png": "29cfdf8902e2b5e5c36064cbc4df5b73",
"assets/FontManifest.json": "66b71d2bcd2b436ab06cceee43157084",
"assets/fonts/MaterialIcons-Regular.otf": "868764e8718a9808fc47a353e8cd9c05",
"assets/NOTICES": "4c984cd66e4dcd816b503bd61af54d8d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "3c682a229112bcdd921ae1c96adcbafc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4233ab64709afbfefa76b766de681e7d",
"/": "4233ab64709afbfefa76b766de681e7d",
"main.dart.js": "9ec311614f2cf2174cba0f1b9d85251e",
"manifest.json": "dda5dffbfe784a052f53af5fb7588015",
"version.json": "869b29f84621852ca050addbdc4e411e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
