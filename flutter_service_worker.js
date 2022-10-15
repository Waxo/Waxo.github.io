'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "ae636f94abb2f30294cdf17e5ac83036",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "3e2fc750d3642362975df0b162e94682",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0108d013b4d69f218b57869d29f4714b",
".git/logs/refs/heads/main": "0108d013b4d69f218b57869d29f4714b",
".git/logs/refs/remotes/origin/main": "24c8ec4fd073d9f00565c37215a142b2",
".git/objects/10/e5121ea63d83db5820be06f2db675392e59838": "bf2654f70c1afd368a02118e614f7eda",
".git/objects/14/8ad77774a1ec8f67ef1ab8d8601f4acc7e790e": "66a18de2d7ef6fc03d967749d510d2ce",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/c09f610404826406b89b3a687f8acc942aa1a2": "225d85e00d87579670ce37b31414b38d",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2e/ba79d96a80a86a0f15980aefd2efb834b3f78f": "0ca40ddc4db43c7ee80e8bbaebff5bf2",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/4a9cf81673e1775ed36b5b03ca73368ba8ec87": "bef6c5f3d4b1e9de8fcc64cd2df2a648",
".git/objects/50/ce6c8144cd2f30eadda2977031560197eb2765": "62b330b90393e74df98756e5bee5ee5b",
".git/objects/70/efe47907b1d72133f33e60d6d8c3753677e9a6": "099bfd8f5c49a285eb32b095006bb79c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/82/f2d2a960cbf6cfb17a1e2a21de664e9b3317d0": "d4ec2b9924971505f10a88074873c9d7",
".git/objects/83/40c4abf47d5d36409cc04c49601b0f523bc3c8": "2dfe7739b6ef5c9985f3290bd2bb22e4",
".git/objects/88/63a30c3800c2532ec87a539ece80a1688bb906": "55145cfb7b3e853969f518bda33c6f49",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/cb0fbdac8571a2eaf5f9fb70797743c72f9881": "eaabb63bfa49c9f30ac00918301b7808",
".git/objects/91/24d3d74796d29535600faf9be30b214c436888": "5dcdc0b3ffe5381807aabdd75f719023",
".git/objects/94/606952f3afbc6d366cd3188f78c41433909eb9": "01e430ac7d51b57310b5ec2d564d64cf",
".git/objects/95/f4c9e42c0c6c5134af0c627e9ab8b1554ada72": "1f33b605d73980c3a97d19183c871a84",
".git/objects/97/55a8913251ad8d1c890c4e42a2061664df537e": "06619300a21519f1e2c1f6240f030fc6",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/0ffa83f66d4d58010fbfcf43c72763ca7f5aae": "fceb612b0bd8a5baf315759210eceb52",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/fca3bae7f25efe932374949982b9cbd4645491": "edb874e02f85ae0841b089800d7ef888",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/c201f5a96a365be15164e36d4dbeeeb9e49f5d": "a31b2cd4616e9f6a54d3467e40e7312c",
".git/objects/c0/ceeae76beff77ba2c07bfcb340a26a70d43455": "9a7afd752c8c07ce17530364ef6dcfe9",
".git/objects/c4/770d14699533ac09392f19d80d6c3d57d6d60e": "a4ff3613b0fa2c9e16b58cd73c3b0882",
".git/objects/cb/4217c332202f18d2fb3d11f0887b217c357ff3": "c493ab063d195bba810562c29574c432",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/8dc50f12fc841ff8762959a6c3cdb88654f940": "e06933b948cf573ed1738f2a4d645745",
".git/objects/dc/0e03435fb1fc11f9540be1b9c5b8144c5daa28": "bd3cd08211cfb2b66c67a89921553beb",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/1ff3d6c3cadbe087fd28d281c8ece0fd6049cf": "4ab48e1ab78ee8edc2b052985b30350d",
".git/objects/e6/bcf75fcbf0241558096d6c5e2a8b8305ec23b6": "bece1b755fd177a9e4291db8d1d29f74",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/f085821191adfbf4bc1ac82522b79a28563663": "003378cc14025fba466f0cc292190d10",
".git/objects/f1/7a64143d7a4718e26bc99a8c156dbd8bd2e5a0": "fb31f7b12b9c8d85d1a5f746a86c3a52",
".git/objects/f8/6134632b931e6cc09dc1e98d2cd5937710ce92": "e9584b4b7da4dbfa00cb2bbe5dea8dd8",
".git/objects/fb/565d2bde72126fcb40001b5f52759471b5dcab": "8634bdaec1ca5b513adb43a32c819df1",
".git/objects/fe/9a4b012f04df8b069c185602739d82b2d96869": "338c809bf6724b865e8df5c416b005da",
".git/refs/heads/main": "46cb7f4e065882ba6f26b575547cfb0d",
".git/refs/remotes/origin/main": "46cb7f4e065882ba6f26b575547cfb0d",
"assets/AssetManifest.json": "d3acfff93d85897c6f7a7804c2fe6110",
"assets/assets/images/gta5-map-clear.png": "552b5f8150382ea30ab1209fc0930a4c",
"assets/assets/images/gta5-map.png": "d6a50ce4ec2dfa89928f9542e64b955f",
"assets/FontManifest.json": "26f9ec9181202cac02b6d9ee4712a59a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "479b4073a53defe5fb6203e77054735d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_tabler_icons/assets/fonts/tabler-icons.ttf": "7a74f61f77cd9424f01f2a03922cd195",
"assets/shaders/ink_sparkle.frag": "9eb8a7030c1073cc04ae1667e267e9e2",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "562273019bfc14e97cdcd0bd8fea3d11",
"/": "562273019bfc14e97cdcd0bd8fea3d11",
"main.dart.js": "a00e88e2ad7468e4fb4e2c6b4c1e2cf6",
"manifest.json": "9f140d20516c490e3cf0de7b32544888",
"version.json": "fa514e1974801db5d1f6eddb5b1a772e"
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
