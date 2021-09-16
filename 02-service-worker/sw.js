self.addEventListener('fetch', (event) => {
    let resp = fetch(event.request)
        .then(resp => resp.ok ? resp : fetch('img/sw-overview-1.png'));

    event.respondWith(resp);
});