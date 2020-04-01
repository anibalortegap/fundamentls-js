var anibal = {
    nombre: 'Anibal',
    apellido: 'Ortega',
    edad: 27,
    altura: 1.81,
    cantidadDeLibros: 10
};

var mateo = {
    nombre: 'Mateo',
    apellido: 'Perez',
    edad: 18,
    altura: 1.91,
    cantidadDeLibros: 200
};

var lucas = {
    nombre: 'Lucas',
    apellido: 'Ortiz',
    edad: 22,
    altura: 1.67,
    cantidadDeLibros: 34
};

var juan = {
    nombre: 'Juan',
    apellido: 'Sanabria',
    edad: 50,
    altura: 1.70,
    cantidadDeLibros: 20
};

var david = {
    nombre: 'David',
    apellido: 'Rodriguez',
    edad: 16,
    altura: 1.75,
    cantidadDeLibros: 56
}

var saul = {
    nombre: 'Saul',
    apellido: 'Alzate',
    edad: 60,
    altura: 1.68,
    cantidadDeLibros: 78
}

var personas = [anibal, mateo, lucas, juan, david, saul];


/**
 * Realizar la suma de la cantidad de libros del array de personas
 */

 //Forma tradicional con un ciclo for 

 var acum = 0;
 for(var idx = 0; idx < personas.length; idx++){
    acum = acum + personas[idx].cantidadDeLibros;
 }
 console.log(acum);

 //Forma utilizando Reduce 
 //const reducer =  (acum, persona) => acum + persona.cantidadDeLibros;
 const reducer =  (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;


 var totalDeLibros = personas.reduce(reducer, 0);

 console.log(`El total todos tienen ${totalDeLibros} libros`);