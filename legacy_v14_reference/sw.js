"use strict";
// V14.2: cache the actual app shell, including its versioned resource URLs.
const CACHE='stewardship-os-v14-2-dev';
const SHELL=['./','./index.html','./styles.css?v=20261022-v14-2-dev',
 './app.js?v=20261022-v14-2-dev','./study.js?v=20261022-v14-2-dev',
 './sanctuary-invitations.js?v=20261022-v14-2-dev',
 './classic-layout.js?v=20261022-v14-2-dev','./backup-core.js',
 './prayer-library.js','./manifest.webmanifest','./assets/icon.svg',
 './assets/good-shepherd-approved.png','./assets/leather-crosses.svg'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('stewardship-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 event.respondWith((async()=>{
   const cache=await caches.open(CACHE);
   const cached=await cache.match(req,{ignoreSearch:true});
   try{
     const response=await fetch(req);
     if(response.ok&&response.type==='basic'){
       event.waitUntil(cache.put(req,response.clone()).catch(()=>{}));
     }
     return response;
   }catch(_){
     if(cached)return cached;
     if(req.mode==='navigate')return (await cache.match('./index.html'))||Response.error();
     return Response.error();
   }
 })());
});
