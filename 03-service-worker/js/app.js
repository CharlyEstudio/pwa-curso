if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            setTimeout(() => {
                reg.sync.register('posteo-gatitos');
                console.log('Se enviaron fotos de gatitos al server');
            }, 3000);
        });
}

/*fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(console.log);*/