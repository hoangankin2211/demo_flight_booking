'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c02a4b7230347c50cef7be2e673089a5",
".git/config": "6059a43cbafebd196a2600cceae0eac6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a5b9c3639cf22907f64f36519b018d1c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3837169d06395ec78e7d37e574569759",
".git/logs/refs/heads/main": "3837169d06395ec78e7d37e574569759",
".git/logs/refs/remotes/origin/main": "3e3755355c47fdabdfa4ef9f8e75696c",
".git/objects/06/bda8551e072a5a2f9810253c0a4bfa0db9f0b1": "5000b43b838c80c44162696f71b3ae65",
".git/objects/0a/5c6beda1681a6ab65129a8280a87540c27a0fd": "0a61009c8fc5e559b100ef7d8698793d",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/32/541afa61007662147e97895588188624877264": "4d310e61ee05e3b17364343fe61c1a0b",
".git/objects/32/a2ad9b1904571ef9e70de8ede09e15b4c6f1c0": "a1f11ea8a40e418b075d153ba34db25f",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/a019ca27c2e040e0f10fc7e33f22ace4b10657": "a995b85fa0745dcf69c0f86a4fb5b09f",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/fb02bd8029c518493cb5d3f90c6bedeb867a5d": "9bf4d0dccd1bf85d45149594c892d8cc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/e96b2f444b42463f6d13f01f91260be0c83fff": "683b2f4b6f4758d2091b9523bba69202",
".git/objects/50/46b7ec4420bbdaf73e90322e4475ddad5c211f": "433b053445334284834aa32b29694b73",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5b/f0f15eb970fde8d8394977362332097d0733c0": "5ffef660721f48988c9caae63c6b24d8",
".git/objects/60/ab836dad8da8c8b58cedc9b8d4bd32c02be1f0": "a0e1aff4de49426842a3ee000dfece76",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/a25f1a2a5b4881ab2ffb65cccbc540acb917da": "d45f0347ed87b5e25c80c509c655e607",
".git/objects/6b/c760c0ab7e974c54429872debea60ea459f50d": "d4b3235829bea4bb1740b678d336fb39",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/78/51871e5f339424fd33ae5e49dd5838386dd747": "d5b70992f83c7d69d4757a3cd4140372",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/21f832323426d0480253b5ae966e6a66ce0de1": "b2ed3d5cce327757a942dfdb1f813b70",
".git/objects/82/de7a38ebac5e7f458af15f410780022fc6dcba": "889c89f2cde1c4631c21be560e2498e4",
".git/objects/83/b2937e3fa4084c65619f3869fb71b5e6ec0928": "036035ae6138fa76b90ea5dd7918070e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/948f9f0f931be5c2dfe4ce8b63aea0f5726f23": "1a17b688ba103cc8a140d70b42ca7fb3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/ee223dd1c6c5769377060f2abf4d178fa12c9e": "96febf1a89979466434631cf3d1f8c09",
".git/objects/98/2008942a6686c5071dd98b40a62500f275f0b6": "da1d7b43f4adb613182fc7e7f05a3337",
".git/objects/99/220b0a811289e6b1281174e93fe7dd6e521d3f": "21f42ec444fdb151e424790776a7e985",
".git/objects/9c/7d2f0b9f5fbf86cf3cfd6652c1f30366434b7b": "630c903bff125dab267153d512c99cf7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/573e526ba8e13ff9f6a040ecc968e78d54bf6d": "f980acdbda6b31292bc72bec1788042a",
".git/objects/a7/a5f740c19f5875b65722757baa921340e7283f": "dd7f457c124033cb27c967d54d4f2b44",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/d7e7326fc20a667ea3a9e786def81df0ecc592": "c053e3735a027012a00dff5c568a6fee",
".git/objects/c3/72cf11a720883f172202dbbb2492d6b0aa682d": "3551973c88a45d0ad03baf05980daff4",
".git/objects/c9/30bdcef786d5031314273f99f697a3123da68a": "738f2b6f2953621cb9eeacee02b4990f",
".git/objects/ca/d7e9b398e06cee1dd764ed3257e3c1627e5b6e": "c95db2b50dc281f2f156c103c3c28649",
".git/objects/cf/043098b42cf9a7ab189491f7b0484bf23ec4b6": "cd255fdae3f5c425f1ce13186fe2480f",
".git/objects/d0/963fc758ae5874ae99a8869dd0c44693b2ac73": "6fefca76633efd7cb031f651b67427d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/4dbea8544736bfa55954513816c5576161941e": "57b0d1510dbf5513ccd308fcd886a34d",
".git/objects/dc/08437c02c0d635ee75455e1bf8c0466d08123f": "2090cdd9034f8d78223a3c1ab5d44ec3",
".git/objects/e0/b7cb08f3d3bdb7f9895492e6a135300e060f8b": "95a0ec48c4a86ed87db8d7d0f087cd10",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/c1bb237cbbd97e95e48f54c2684b0d78a13caf": "709aa8d6f39ec843e5a262efe7f28672",
".git/objects/ea/74e72ca0ec8afbc57588fcab6bf1f151bb18f3": "ea6ef91fbd8d35681b5c62244712ccac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/91070e30be34143d892c80a6b4c6b02d861ad6": "513f14d4703e1fed54d44a76b59bae56",
".git/objects/ff/0371c234807d070e5ae5523af3c765744d2765": "9be066ffd6a53ebf421d4ab0b95e490f",
".git/refs/heads/main": "b905b41818277478722cf8336493d155",
".git/refs/remotes/origin/main": "b905b41818277478722cf8336493d155",
"assets/AssetManifest.json": "c5545cc381e38e648befa44d412f0bbf",
"assets/assets/icons/airplane.png": "39cbdfaf8a7110693b4915295256e05c",
"assets/assets/icons/blocked.png": "66eca91800f7960418ac42d91fe23ebb",
"assets/assets/icons/direct-flight.png": "099983c426882d1c5dbac4bb9f9ffe0b",
"assets/assets/icons/globe.png": "9df3a2d0314f19cd4e3d50876deab4c6",
"assets/assets/icons/google.jpg": "d3be0aac5b59064d503df82d85cef889",
"assets/assets/images/air.png": "e16fd318edf85c89088d24f3dcfba91b",
"assets/assets/images/airplane-ticket.png": "83ce024c54e81ae43396dcb451518194",
"assets/assets/images/airport.jpg": "fd7a5a2d574354875e855b7a6a91aabb",
"assets/assets/images/avatar.jpg": "e96736afe1cd0a014fd88d83c92d0aee",
"assets/assets/images/bar-chart.png": "c42d4fcfba957e5565ae74bbc21a554a",
"assets/assets/images/bardcode.png": "81d5e9145fe5cd5c81ca8eb5fc8ce8ae",
"assets/assets/images/calendar.png": "dba9e53c1d65f4d2ed50ae2e0f7ab8af",
"assets/assets/images/card.png": "3d35f6e135b8b18d16581da4edc21fa2",
"assets/assets/images/folders.png": "663d3c09429063dd1c69bd2336c076db",
"assets/assets/images/password-manager.png": "2587db1f3de33db62dd081d94598fc6e",
"assets/assets/images/plane-ticket.png": "a7487623a46d9236a6939a7a585df6da",
"assets/assets/images/plane.jpg": "f314fa2bf6aee360573dc157d87d400f",
"assets/assets/images/resume.png": "77df3f1dd61603b9fd64370036fe8be5",
"assets/assets/images/seat.png": "190803d2b955be55f95919f453ce8ba4",
"assets/assets/images/splash_gif.gif": "f07dff6966ac48982773fbb149bfde48",
"assets/assets/images/vecteezy_airplane.jpg": "8f645436b31f4a4da2aee7a72bf44f4e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b56c9d3cbec264722e402ad500d7075f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "97cecf658d5e1578e488cba925e7c1fc",
"/": "97cecf658d5e1578e488cba925e7c1fc",
"main.dart.js": "522d55a375aeb150bdd89499c5690204",
"main.dart.js_1.part.js": "76c575b993b6856d338b9bde4307ebf8",
"manifest.json": "31ccd05bf1a41a98b6c9aa4b0e109527",
"version.json": "b038e7fca0b462e8db715bcccbc7a498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
