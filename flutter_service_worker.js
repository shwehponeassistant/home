'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4fa879f8c4a4a15e4c3f0ebd5bc78c8e",
"index.html": "de36c33aa12eeb89c473dd7deec8e35c",
"/": "de36c33aa12eeb89c473dd7deec8e35c",
"main.dart.js": "e9f1a624136f25122c3cc4090e10b4e7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "599dd126b152154f4313cb07c326043e",
".git/objects/61/379c68b9531a710591c0847005a441f5ed88d0": "48e3b5467361873a06b4073e09a2befc",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/03/fca03c5224356146e5be2f441f59c12ef34995": "5a50c56df143f69b49facc8f4a7e270c",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/6a/118c885ff7932a3248f409e1dfab06f8d798bc": "9a262659ff21ef71f526a700fa0ef6e6",
".git/objects/6a/e9cf8b9370eada215ad665509aaa6b31bab79b": "a1a49a6b98ed8fe43b5b0499336b48a0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/33/d2027d15176ab4882b3154ce68844595daa31a": "8d53028fe240312fd6df2fb39ce1eddd",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ad/8af832aa3108e94da2891eb7ffdb06be24a3ad": "b3b5d7a3a51143342487117c7c9326af",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b3/ae813ae232144f6891beab5f9f6f01a095b704": "89f64738f121ef168f45ea2c56ff66d2",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c0/068d753ba6d2ce12b24ed8d71652d54bb0b977": "8d1c986d2a3cdbf34079eee2ba8ec1a3",
".git/objects/f2/94df3d738b87b3b52ec1ecd0fd4f3e4fe03bf2": "1ded22ccab9b43f98c6d16c8e46fd6a8",
".git/objects/fe/8d536fb357e9f42a575fd521247420ad1f54e3": "b920d3daecf762a97bca951c3bfc104f",
".git/objects/fe/f7580c6f2751d9f566429a0969b9a4652671a8": "cf3a47154b642b6aa5e05c258c3e438f",
".git/objects/fb/ea7504343083ae069bbb42f2b0e8b6d944534f": "b3e469162aada7119e7ba5f8dbd4abb4",
".git/objects/89/c58821a2b6f3a17e45a7048a5f4efe78e0a5ce": "8c5077cbd094fb1011111d12926e135b",
".git/objects/87/f2f157fcd5744727d2fc1855bdf0d8afc0799e": "cc6d1cb9d7f095585e30b8354fd305b2",
".git/objects/19/8727610f5a44a900424ee49d6256e4d62d4ad7": "dfde929c763bcff8a1a18c95b644c7cc",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/961071d919f1066c5a5974bad9f3aac6dbaf49": "a14bedc0dadf191f2f1c0bb7389cedd0",
".git/objects/72/b97d5fe13fccd56c9d7bc31c00fcf624647a9b": "11a289fdbfc6958ecfa1ef7764a9566a",
".git/objects/9f/a8ea39ce05c07157d880aa7616d0b27abdd927": "dbf4145d1dfb132143b163c365be6d87",
".git/objects/00/57b0b0e23d7f2de69245aa67f312750bfa5731": "0396be8e74aebbd080c71329e639e8f2",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/98/fd5da4d1c47044a05a13e705390e3e43caf13b": "6a9bd728a1d2d6e9ec5a936268425667",
".git/objects/3f/74a28732aa8a459ef7975a1f0c4b2fa9485c36": "7a71c713fdfd4bd86be119d55e6c2050",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/22aa5e9b001b6bfc308bae7fe0ecb818eb8093": "6ee370586b1d342e672e94718ae79d0c",
".git/objects/39/e4887f9a4c0a270ab0fadc8c9e842f2b5b07f5": "ec1681d9dfaf5df9cab54c32df2882c7",
".git/objects/64/dc75aea102474af592e89cfe8fa3013eaabdb6": "eb85026f0b8d9b7ffd224b4eb1a112cc",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b0d83a4244c0b502fa215faac5206e721e4a21": "2c7f4755fe41468af9d2cd7c91d539e6",
".git/objects/b9/288dfeaeaee3b5dd05f704bfbd0fce6bd2d694": "8f885d2e1778229b3fc81d233903bd12",
".git/objects/c3/83e039aa0c8b4b1289d3f793feec607b712e99": "b5de1433bd054bf139d522d0a7b01652",
".git/objects/cc/80590d3f6dfd9231f0ef9a9135a3cf2d353823": "324035d1bc48e1636c69237ace42a27d",
".git/objects/f0/6d82e507b537e0b5e2f9b8245989cc53d009eb": "e6ee5c4d15f125bb61310ed1e10545ef",
".git/objects/f1/259d5d8526ea6837eda398cf3517eadf8b979b": "dbd1d49c6464f2fcaa03b68bae2ebf5f",
".git/objects/e7/f0556d6ce581f0991c4f31f571a948415db774": "ccbc685b427e82d6d93cdb24ffd71285",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/77/11ff6b7fcf768ae23d9fbb74a833a6e3558353": "c86c16f1c26d37fe5966ee12c1a2b1b8",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/82/83bdfcc1e21afcb72a68637030492c74cc3778": "2fb74bd9aa9bae3b8ca909ccf70f093c",
".git/objects/82/e6577b7be9002b4b30e16cdd5fa4d4a0055209": "8e31f736f8188295b39ee512ca27d756",
".git/objects/22/cc4e089d95be8403b4471a744483d8c01f88d9": "2e5bfce0b40b0bb5529211b3d50a6440",
"assets/AssetManifest.json": "7690e573f231c4532e734f1ebaaa36e7",
"assets/NOTICES": "c98caed3c7d5556f00896b02ef94e92e",
"assets/FontManifest.json": "0c765607616d53f96c58f88a2d01c0bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2189d0b0e79e533eecee48d43a7f3b0a",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "18da9f5878559bd28773cb86452139a3",
"assets/fonts/MaterialIcons-Regular.otf": "0f17dc4719b061df945d7acd0f55714b",
"assets/assets/images/transfermoneyicon.png": "e97c07f5e6e28f08f58a8f20beb3ea1c",
"assets/assets/images/shwehponeicon1.png": "7e484c0e831b1d3686892e4a3dba94cd",
"assets/assets/images/accessoriesicon.png": "f4189d1708bdc78269acbe29e9530ee1",
"assets/assets/images/shwehponeicon2.png": "6fd070c9905b7ee475528ecb87709652",
"assets/assets/images/logo.png": "ee3037469476e79de583e9450a673c8c",
"assets/assets/images/shwehponelogo.png": "1cd412cd6634c985f0702fdca86a188b",
"assets/assets/images/wavemoneyicon.png": "9a93b4f4374bcff4185e89fdbdd20387",
"assets/assets/images/serviceicon.png": "3f3c724a13fc19f8b242fed780c25fd9",
"assets/assets/images/kpayicon.png": "05fe350ea3d88ce0144b2250687b27a0",
"assets/assets/fonts/Lora-Italic-VariableFont_wght.ttf": "b1f251bc5aaa536a4d8c27223f3c3257",
"assets/assets/fonts/Pyidaungsu-2.5.3_Regular.ttf": "36ecc0bdcc82651baf8adf09715fb2bd",
"assets/assets/fonts/Pyidaungsu-2.5.3_Numbers.ttf": "376bbd8fd25414443a8b6a8a659044e9",
"assets/assets/fonts/Pyidaungsu-2.5.3_Bold.ttf": "d7d3b57983918b572e826021a00ebe55",
"assets/assets/fonts/Lora-VariableFont_wght.ttf": "ea5cbfa365fc139fc6d7b4ad26287e2e",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
