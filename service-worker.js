"use strict";var precacheConfig=[["./index.html","e113a47625ddd8ad7edc53061f4a6c2a"],["./static/css/main.d5f3ac5b.css","3f4b05a6bfb3e36cf6e6cd100dfc0c46"],["./static/js/main.fd073065.js","104c16d579a7508004c8a52deed2dc32"],["./static/media/Roboto-Bold.470488ec.eot","470488ec54d9a21c8565fd6640d7f389"],["./static/media/Roboto-Bold.5ed48907.woff","5ed489077dde2ddf998d00f0690aeb61"],["./static/media/Roboto-Bold.ee7b96fa.ttf","ee7b96fa85d8fdb8c126409326ac2d2b"],["./static/media/Roboto-Light.97b9f3ce.eot","97b9f3cef53936fc52da2c6eacb0ac84"],["./static/media/Roboto-Light.f3ca8cac.woff","f3ca8cac0b6978dab6b1f38a5bace3c2"],["./static/media/Roboto-Light.fc84e998.ttf","fc84e998bc29b297ea20321e4c90b6ed"],["./static/media/Roboto-Regular.3e1af3ef.ttf","3e1af3ef546b9e6ecef9f3ba197bf7d2"],["./static/media/Roboto-Regular.947d4eb3.eot","947d4eb3b5e0a4ca56cfb0710f4739da"],["./static/media/Roboto-Regular.99433f7d.woff","99433f7d92c3a5c1179fa7ebb1ba0a48"],["./static/media/logo-mtkn.f0f35a8b.svg","f0f35a8bbc384c75b59041ae8587317d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});