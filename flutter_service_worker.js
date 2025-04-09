'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7392b2acfe89ed745fcf39a528987c19",
"version.json": "a26817fcfe0d37fe0f80eb5d1a43a0ea",
"index.html": "9f4708f4c8e107ef8e9ace5f907f8b05",
"/": "9f4708f4c8e107ef8e9ace5f907f8b05",
"main.dart.js": "1697c8a28a64430718acfb4904fd553d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5f35d169db05eff476e90147dd772fb9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4bea2629dce66329f667594f67da1042",
"assets/vnpt-econtract/vnpt-econtract.min.js": "4dd2503dcbb7c0fb4bd166ec33d289d3",
"assets/AssetManifest.json": "6847fb2a47055595fc49165a5a1aa159",
"assets/NOTICES": "c21cd24512ceb8196ac35bd6f77115d2",
"assets/pdfjs/pdf.worker.min.js": "1b21a52673403baa815d90e3c9347714",
"assets/pdfjs/pdf.min.js": "e2f5e1f9451c8a897484861679857823",
"assets/FontManifest.json": "c3c3ce6877afebb56ff98a28c66453e8",
"assets/AssetManifest.bin.json": "29bbd46f39423987642c164c040d5482",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "413605e81a64d4cebf5906fbc61daf89",
"assets/fonts/MaterialIcons-Regular.otf": "8d52b2b1302684ac0bb1c3d722e9e6dd",
"assets/assets/images/img_blank.png": "450ab0aa95593fa3eb7f0ce4978b1abd",
"assets/assets/images/img_error_default.png": "9b4687d9411ad7ed935d3ff7e90b5575",
"assets/assets/icons/ic_finger_scroll_down.svg": "5f92ca9040d59fd237280f55f41dd161",
"assets/assets/icons/ic_logo_credita.svg": "9de3b3fbb989a3f26b739af1c7d1d281",
"assets/assets/icons/ic_trans_success.svg": "ae66e4ebf983b11cab0af2a3d1e73bf0",
"assets/assets/icons/ic_info.svg": "9957b2223adb7c1a3d491633a3df6b13",
"assets/assets/icons/ic_arrow_down_to_line.svg": "7c482d31619e0749e58e49872f856b70",
"assets/assets/icons/ic_check_circle.svg": "0ac80e97bd1a154da2ebb66a74fb8fcc",
"assets/assets/icons/ic_img_error.svg": "40c593c25a9301e40099005d35ab1098",
"assets/assets/icons/ic_arrow_right_circle.svg": "bd9ef8621725364404f73fc467586574",
"assets/assets/icons/ic_sb_info.svg": "c05f75f16f289b51aca50747bf3c3ab1",
"assets/assets/icons/ic_sb_success.svg": "07bd276bdbca48cdb6638d9f7b8a7e02",
"assets/assets/icons/ic_sb_error.svg": "477f217a9310e4b41bd2d71dc81ae5ec",
"assets/assets/icons/ic_shield.svg": "8efdb72fa716d00b63cf6779ae475340",
"assets/assets/icons/ic_return.svg": "7d0efdadf2989b4316c8dce708bc83a9",
"assets/assets/icons/ic_trans_failed.svg": "e66dd540deec9076bb6097b38a77401c",
"assets/assets/icons/ic_arrow_up_to_line.svg": "2e1bf41eec8c39c300c8d2161a7ab08e",
"assets/assets/icons/ic_eye_on.svg": "fec483484f169565ae63d6b9e9d3808b",
"assets/assets/icons/ic_sb_warning.svg": "0aed9e3f7bf353a00b56a9ae428151fb",
"assets/assets/icons/ic_logo_credita_text.svg": "be3419596dbedf4c16a80ad773b7659f",
"assets/assets/icons/ic_download.svg": "b77838cfacd1d03f1f6b3c251d4f62a8",
"assets/assets/icons/ic_eye_off.svg": "cc86bcb3515160dcbb23399044e83ac1",
"assets/assets/icons/ic_copy.svg": "984a3fe391e7f1b93a3fbfa0315d7ceb",
"assets/assets/icons/ic_blank.svg": "a4a0cdc32a0c588f3e355e6a46abb484",
"assets/assets/fonts/iCielHelveticaNowText/iCielHelveticaNowText-Regular.otf": "7b42fd5a45850fb868cefbc67b7ca37d",
"assets/assets/fonts/iCielHelveticaNowText/iCielHelveticaNowText-Bold.otf": "756a0adb5e8b99f196e875ee755cdde3",
"assets/assets/fonts/iCielHelveticaNowText/iCielHelveticaNowText-Medium.otf": "36f293afcbed247dda9e4262510645f4",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
