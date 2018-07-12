"use strict";var precacheConfig=[["./index.html","296447273feb6b48d67dd47ca3d5928f"],["./static/css/main.43e93aa2.css","867f8e9008fe9281129ce53c3885f907"],["./static/js/main.cf1e20d1.js","8e301e4f1a1abb4ef0c4e58e042e69cf"],["./static/media/Roboto-Bold.470488ec.eot","470488ec54d9a21c8565fd6640d7f389"],["./static/media/Roboto-Bold.5ed48907.woff","5ed489077dde2ddf998d00f0690aeb61"],["./static/media/Roboto-Bold.ee7b96fa.ttf","ee7b96fa85d8fdb8c126409326ac2d2b"],["./static/media/Roboto-Light.97b9f3ce.eot","97b9f3cef53936fc52da2c6eacb0ac84"],["./static/media/Roboto-Light.f3ca8cac.woff","f3ca8cac0b6978dab6b1f38a5bace3c2"],["./static/media/Roboto-Light.fc84e998.ttf","fc84e998bc29b297ea20321e4c90b6ed"],["./static/media/Roboto-Regular.3e1af3ef.ttf","3e1af3ef546b9e6ecef9f3ba197bf7d2"],["./static/media/Roboto-Regular.947d4eb3.eot","947d4eb3b5e0a4ca56cfb0710f4739da"],["./static/media/Roboto-Regular.99433f7d.woff","99433f7d92c3a5c1179fa7ebb1ba0a48"],["./static/media/ae.6da0e477.svg","6da0e477e2e0014abb5644928de6fc02"],["./static/media/balance.64e820b1.svg","64e820b14c63673ec168912208577b13"],["./static/media/balance_custom.24569066.svg","245690661754fb0cbeb9c754e92d057c"],["./static/media/balance_off.986c2ae2.svg","986c2ae279d6ede382534bb934afd2b6"],["./static/media/bnb.12b439ab.svg","12b439ab3b67d4036b31c9aab3b96584"],["./static/media/btc.e0adcf1a.svg","e0adcf1af944f90c669cd024e10260d4"],["./static/media/eos.1db93971.svg","1db939712533074392225ba63b2dd358"],["./static/media/eth.892f3f34.svg","892f3f3489c1d9385b7f538325e26c85"],["./static/media/ico_delete.d4c6ecee.svg","d4c6eceede6aa084276f75fb34ccca61"],["./static/media/ico_edit.c110cfe4.svg","c110cfe474b6b66d199119493bc1f0ac"],["./static/media/ico_info.ed62a34f.svg","ed62a34f766f18ea31a13cc8204e0a49"],["./static/media/ico_telegram.ab3cd160.svg","ab3cd160656c41c20497c81eccbd24bb"],["./static/media/ico_web.257f2fd5.svg","257f2fd5f65e7e12a1582f4c018b46f8"],["./static/media/icx.f6dc6a0c.svg","f6dc6a0c671e1becc308e1dd591e3936"],["./static/media/logo.2391e00e.svg","2391e00e67c238a082fe6cfb1240ada0"],["./static/media/omg.c6a8dc69.svg","c6a8dc69d921e261e67e1b118a87de15"],["./static/media/trx.3dd1e58d.svg","3dd1e58d2f53dcf71a9c57190142e371"],["./static/media/usdt.a1a30773.svg","a1a3077382f418fae3301b18d5e9da61"],["./static/media/ven.7507efda.svg","7507efdac0450d9b868ac5b0e934bf52"],["./static/media/zil.ece8b591.svg","ece8b591ff06d7f652d847bdd9d21be2"],["./static/media/zrx.d36e0038.svg","d36e003801e9443eba2347486b4e1812"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});