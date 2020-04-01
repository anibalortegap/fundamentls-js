var anibal = {
    nombre: 'anibal',
    apellido: 'ortega',
    edad: 27
}

var dario = {
    nombre: 'dario',
    apellido: 'sunisky',
    edad: 27
}

function imprimirNombreYEdad(persona) {
    console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años`);
}

imprimirNombreYEdad(anibal);
imprimirNombreYEdad(dario);