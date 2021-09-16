// SW Ciclo de Vida

// SW Instalando
self.addEventListener('install', event => {
    // Descarga assets
    // Creamos un cache
    console.log('SW: Instalando');

    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1000);
    });

    event.waitUntil(instalacion);
});

// SW toma el control de la app
self.addEventListener('activate', event => {
    // Borra cache viejo
    console.log('SW: Activo y listo para controlar la app');
});

// SW Fetch
self.addEventListener('fetch', (event) => {
    // console.log('SW: Fetch', event.request.url);
});

// SW Sync Recuperamis la conexión a internet
self.addEventListener('sync', event => {
    console.log('SW: Sync', event);
    console.log('SW: Sync', event.tag);
});