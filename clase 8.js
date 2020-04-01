var anibal = {
    nombre: 'Anibal',
    apellido: 'Ortega',
    edad: 27
}

var dario = {
    nombre: 'Dario',
    apellido: 'Sunisky',
    edad: 28
}

function imprimirNombreMayuscula(persona) {
    //var nombre = persona.nombre;
    var { nombre } = persona;
    console.log(nombre.toUpperCase())
}

imprimirNombreMayuscula(anibal);
imprimirNombreMayuscula(dario);

function cumpleaños(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}




