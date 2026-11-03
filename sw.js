// 何もキャッシュしない最小のService Worker（インストール可能にするためのもの）
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
