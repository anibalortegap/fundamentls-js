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

const pasarAlturaACms = persona => {
    //persona.altura = persona.altura * 100;
    console.log(persona);
    return { 
        ...persona, //Con esto creamos un nuevo objeto persona paara no modificar el actual 
        altura: persona.altura * 100
    }
}


//Otra forma de retornar el objeto en arrow functions
const pasarAlturaACms = persona => ({
        ...persona, //Con esto creamos un nuevo objeto persona paara no modificar el actual 
        altura: persona.altura * 100
})


var personasCms = personas.map(pasarAlturaACms);
console.log(personasCms);


