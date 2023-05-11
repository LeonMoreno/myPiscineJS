function hola(name, miCallback) {
    setTimeout(function () {
        console.log(`Hola ${name}`);
        miCallback(name);
    }, 3000);
}

function adios(name, otroCallback) {
    setTimeout(function () {
        console.log(`Adios ${name}`);
        otroCallback();
    }, 1000);
}

console.log(`INiciando Proceso....`);

hola('Leo', function (name) {
    adios(name, function () {
        console.log(`FInalizando Proceso....`);
    })
});

