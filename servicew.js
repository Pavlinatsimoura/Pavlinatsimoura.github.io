self.addEventListener("install", e=> {
    e.waitUntil(
        chaces.open("static").then(cache=>
            {
                return cache.addAll(["./eurovison.html","./style.css","/javascript.js","./icon.png","./eurovision.png"])
            })
    );
        });

       
        self.addEventListener("fetch",e =>
{
    e.respondWith(
        caches.match(e.request).then( response =>
            {
                return response || fetch(e.request);
            })
        
    );
    
});