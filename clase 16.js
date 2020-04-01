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

//acceder a una propiedad del array, lo puedo realizar de la siguiente forma 

personas[0].altura; //accedemos a la altura del primer elemento del array
personas[0]['altura'];

//recorrer un array con for in 
for (let v in personas){
    console.log('v es igual: ', v, 'su tipo es: ', typeof(v));
}

//reccorre las claves del objeto, lo cual va imprimir nombre, apellido, edad, altura
for (let v in anibal){
    console.log(v);
}


//recorrer un array con for-of

for (let v of personas) {
    console.log(`${v.nombre} mide ${v.altura}mts`);
}


//recorrer el array con un for 

for (var i = 0;  i <= personas.length; i++){
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura}mts`);
}

