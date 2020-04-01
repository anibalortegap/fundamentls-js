var anibal = {
    nombre: 'Anibal',
    apellido: 'Ortega',
    edad: 27,
    altura: 1.81
};

var mateo = {
    nombre: 'Mateo',
    apellido: 'Perez',
    edad: 18,
    altura: 1.91
};

var lucas = {
    nombre: 'Lucas',
    apellido: 'Ortiz',
    edad: 22,
    altura: 1.67
};

var juan = {
    nombre: 'Juan',
    apellido: 'Sanabria',
    edad: 50,
    altura: 1.70
};

var david = {
    nombre: 'David',
    apellido: 'Rodriguez',
    edad: 16,
    altura: 1.75
}

var saul = {
    nombre: 'Saul',
    apellido: 'Alzate',
    edad: 60,
    altura: 1.68
}

var personas = [anibal, mateo, lucas, juan, david, saul];


/*
const esAlta = (persona) => {
    return persona.altura > 1.8;
}
*/
//Otra forma de escribir la funcion y desestructurar el objeto

const esAlta  = ({ altura }) => altura > 1.8;

/*
const esBaja = (persona) => {
    return persona.altura < 1.7;
}
*/

const esBaja = ({ altura }) => altura < 1.7;

var personasAltas = personas.filter(esAlta);

var personasAltas2  = personas.filter(personas => personas.altura > 1.8);

var personasBajas = personas.filter(esBaja);


console.log('Numero total de persona: ', personas);

console.log('Personas Altas: ', personasAltas);

console.log('Personas Altas2: ', personasAltas2);

console.log('Personas Bajas: ', personasBajas);