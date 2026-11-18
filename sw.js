/* ancienne adresse : ce service worker se désinstalle et renvoie vers la nouvelle */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{
  for(const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for(const c of await self.clients.matchAll({type:'window'})) c.navigate('https://kouakoukouabenan-blip.github.io/ujdm/jed2026/');
})()));
