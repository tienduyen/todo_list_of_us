'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ebd7385edfbbb36cd3a7a5dffb134b98",
".git/config": "fe43686f43cc05bf3b0c581221faa5b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4e16cd12d7f7628b2f378f74266e1cbb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a9156ff94863fd25852155dc376b8aaf",
".git/logs/refs/heads/main": "d9fc9a9c88893562d5283c50f3d907aa",
".git/logs/refs/remotes/origin/main": "ad0d123b62f496fa6f746017e6fb4368",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/769d93028155773518c9aaaaf195a64b16c418": "d282fe8c07fd6fcf1a2e1649a5fb16e4",
".git/objects/05/5ab24752f7438b2ae8fcec8c871e5fde430190": "7fbaf1007d84fcf1c9889a7908c988ab",
".git/objects/06/08c72a839b9a7f7aa0ae5c8b0d0d3156226aa2": "dd29e68f4716bdb7bc97c32f077ac6ab",
".git/objects/1c/53314b318e3921247b1654ac8fadecf3bf50ac": "cb2e6b7fb4531170f4b7ffe78a381f53",
".git/objects/1d/69641e64983fe5e0c4bec2d003590a4091ad72": "97aadb7d110f40bca57e54b3958ffe91",
".git/objects/27/d2e1b22f59dd0deed49fec8105f51dedab87f6": "8a93f05aa4a2702a247139985307fc97",
".git/objects/2e/9adfac7eacd92cdf602ef1d28b6059e97a8ae6": "c819d299a2311597ecf2c7a311175a0a",
".git/objects/33/2ddc187690778d833b875c7f0235ae516575eb": "69c4a2a3a9a33ee5b53b0ee6034df43f",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/5ef082f1514088b86f6db2d4145ea37c3061e9": "d79b6c5ab500d81316c23cc2b7a8a173",
".git/objects/3c/ba556b1278af2aff311b41b52e1c7ed71860e0": "9a449f81a6da59b2dc0f6b8cc5db2916",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/45/d9f19c7eba26e463fdf51b0993746e0d92fce5": "98ba7ed3dc1a74b768babe3185dcb69c",
".git/objects/46/613210b080a9464a1e076e3800d26f37c7fb1b": "d87f00136d1bf9dec578d146631d90a0",
".git/objects/4a/b206729cb07ab9a38dd51fc5ec8f7d459b305b": "8e37d13836489d5db283f27991cc9da6",
".git/objects/4c/b9d4608627a128153e66548fabc860629f18a5": "c0df35ab736855e85f01152093aaa658",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/51/c2477b01e57ae1dd5e93e7f99b48837bb7788f": "c1529ed9b35223cbf70bea0e5aaa0b01",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5e/4a3a9b5e7141c0408ba60fc4c1ac82bb8a8867": "1095e99fab5e0db8c036c7111ad1fb5b",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/69/55e7cfc50084d6f9cada6fc9dfa44e977fd173": "978b32c1a71953902dbefb62dec9f946",
".git/objects/6c/0697423170e9e9f5c90df8259a52be46688913": "de66a627c02f1d3481ca6ec0fc7d66af",
".git/objects/70/591bd9a9f3737c77dbde290848660fba3b9392": "a5960722565ca887e3f83f4348d9fd10",
".git/objects/76/cb426e6cea4e2867c4355b2682acb0ae9e88d1": "6aa92febd367d0f273da31a8dbdf9703",
".git/objects/7c/d70e373ceb5db738dab4816fbe0edd39d0b17e": "9de764c72ab83a5beedaee1d8c0b4a0d",
".git/objects/81/c4dd3afb183eb4e779a1fbbb76eab03497bc60": "51f9d77e9d31d87f7fc6b58ac3a354e5",
".git/objects/85/101afb4a6f01ffd644def6fd3d29a1563ee054": "cfe96df1bacec6ba5a4aa08ea8a93845",
".git/objects/85/6e383a5368d2c50e27b64b940fbaaa20d7cef5": "9f39330901fafa9b6d986831b19d8d5b",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3d184a010b1c62b09773ba3800dda31dbe70cc": "0c61c1cc4738c314de52c140f90c8d61",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/c5b59760a88ffb838e6d4ccfc5f3e9ea15ab08": "7755c515c30c4bbf50a47417fcdf4768",
".git/objects/8d/d67c1a77121f3e388f69021457573cbbc0fe35": "d2712e78dc39277c3b6a0537e175192e",
".git/objects/8e/be29b2a0180d28a24ede40a8c8116fff739a17": "8d6a4c2bddaabdfe2e6991b1b059031f",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/922123e7847525f48a5997702788a7022d7583": "4a41eece607593a459e1f7005a710219",
".git/objects/97/45f2c045e705349e792fc6f5f7755b8a51fd19": "e0f86a48991645a3ef26bd4e0aa72165",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a1/3937445401953165b727f4d9132ddeefaa01c6": "d11d24aa213451477e48786f1ba582d1",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/18050a0087f627f3af707d206b81a0d5b3d08c": "439af3d2014769a82e10bf9207ea5803",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/6205f3b57e9d4a94468d26d20e1db3780a71fd": "82a9fb57b5477f76785a3ec32e26d47f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/b1277086272ee8da41eecdb53062194d6cf766": "02e3ce502279e45615f074bfadd7e3a2",
".git/objects/c0/563a451d7aedd6ac9b33b269e141bad1381fce": "abf74818bd7fede46198d0164817d352",
".git/objects/c1/15cec0e6e73b428ff71faf27646aeb89104235": "d61586f22e3e46e8a12070dbe3d6f527",
".git/objects/c3/58f8ca3a489c6a02f79db2d277d46963a74b9b": "68d0fb0e6afd1e9aa3afee2e623bf610",
".git/objects/c7/b3fc915199ee64b1e3ecb85f350ae889c8adf5": "484c1c73f3ea26e38303ea33e1e239f9",
".git/objects/c9/4af97ec07e47367ccb994c8720ea72c71f6889": "7254719c53e981deb10a227775c98a7d",
".git/objects/cb/838a78fed699aa36fd667ebc1c48be6c0cb1f7": "bcc0eaeaeb669613c80e46c1dbc45389",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/f4cfa9c84526dcd26c352d8147af79c5505160": "19eb4adcce9e4ce3af708a6b5fbe763e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/de/ab85fc16ef66d946b404ca9783ddbc88a61f3c": "6f4b81a3ac0bea05372986f656772964",
".git/objects/e1/5477efb52c27b1f1e95e55ed205d865f7dedd6": "a24e7440a46701d9ffcef17bb0c2ac72",
".git/objects/e4/af1ffcb87a807b6c56c34dc6dcd8f8e94d0978": "7350b8e8da40d57ceac995b567b79d1d",
".git/objects/eb/313dccf79510c1c295a6102489406b50760b9a": "1168788d9dd9a3114a8e4ca7ee6e97fc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/d64c6464c532344d78cf05fbfdc7daaa68bdab": "078f9e03d262a797851205d99dc28871",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/45abd152a39be016b2edae1f370738c1e4c72e": "efe4bdc1662493d0c55196ec3d989c79",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f7/59f879baf2f4be22ddd1b5f18fcc24d7798b17": "5088c4684e0299a839b982fa64635847",
".git/refs/heads/main": "8d095ce30f69f65d800f9d2f68f7bad6",
".git/refs/remotes/origin/main": "8d095ce30f69f65d800f9d2f68f7bad6",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "6f07d280c4028c6904c86930cb5e34b9",
"assets/NOTICES": "ccb0220b8ebd248a440477af4b32ba92",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "0ad9d8537787314ddd18c8de392ef3bf",
"icons/Icon-192.png": "e79215909170241b607880277b14bbcc",
"icons/Icon-512.png": "068beb449476c57e6953b663bbb83686",
"icons/Icon-maskable-192.png": "72082c316766fcdcf551fa809b4b8af9",
"icons/Icon-maskable-512.png": "fd06a1897dd0304ff2975b4d2b8c95a5",
"index.html": "4d9e831beadcca685e2ffd45594596d4",
"/": "4d9e831beadcca685e2ffd45594596d4",
"main.dart.js": "07092ee836abe00d5badcbbab1f9e6ba",
"manifest.json": "8af411d61098f113b665f58441f14f8f",
"version.json": "c2628d04ac19552ee2d1f32331fa955e"};
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
