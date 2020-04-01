/* 
Arrow Functions:  Nos permiten una nomenclatura mas corta para escribir expresiones de funciones
este tipo de funciones deben definirse antes de ser utilizadas.
Las Arrow Functions no es necesario escribir la palabra function, las llaves y el return
*/

var persona = {
    nombre: 'Anibal',
    apellido: 'Ortega',
    edad: 27
}

var persona2 = {
    nombre: 'Pedro',
    apellido: 'Navaja',
    edad: 13
}

const MAYORIA_DE_EDAD = 18;

/*function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}


Refactorizando la funcion esMayorDeEdad
Paso 1 - Asignar el valor de la funcion anonima(no tiene nombre) a una variable

var esMayorDeEdad = function(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}


Refactorizando la funcion esMayorDeEdad
Paso 2 - Ahora vamos a crear la function con la sintaxis de arrow functions
adicional cuando son variables que se le asignan funciones una buena convención
es tenerlas como constantes

const esMayorDeEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD;
} 

Refactorizando la funcion esMayorDeEdad
Paso 3 - Cuando tenemos una funcion que solo recibe un parametros le podemos
quitar los parentesis.
Tambien cuando una funcion lo unico que realiza es un return podemos quitarlo y las llaves {} tambien

const esMayorDeEdad = (persona) => persona.edad >= MAYORIA_DE_EDAD;

Refactorizando la funcion esMayorDeEdad
Paso 4 - Pasamos a desestructurar el objeto persona.edad ya que es solo ese paramtro con el que estamos trabajando
*/

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;


function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    }
    else{
        console.log(`${persona.nombre} es menor de edad`);
    }
}

imprimirSiEsMayorDeEdad(persona);
imprimirSiEsMayorDeEdad(persona2);

//Evaluación de la negación de un booleano
function permitirAcceso(persona){
    if(!esMayorDeEdad){
        console.log('ACCESO DENEGADO');
    }
}

const esMenorDeEdad = (persona) => {
    return !esMayorDeEdad(persona);
}

function imprimirSiEsMenorDeEdad(persona) {
    if(esMenorDeEdad(persona)){
        console.log(`${persona.nombre} es menor de edad`);
    }
    else {
        console.log(`${persona.nombre} es mayor de edad`);
    }
}

console.log('-------------------------');

imprimirSiEsMenorDeEdad(persona);
imprimirSiEsMenorDeEdad(persona2);
