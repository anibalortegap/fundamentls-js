'use strict';
//Definición de un objeto en JS
var anibal = {
    nombre: 'Anibal',
    apellido: 'Ortega',
    edad: 27,
    ingeniero: true,
    cantante: false,
    cocinero: false,
    deportista: true,
    drones: true,
    dj: false,
    guitarista: false
}

//Funcion imprimir profesiones y uso de condicionales
function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero) {
        console.log(`Ingeniero`);
    }
    else{
        console.log('No es ingeniero');
    }
    if(persona.cantante){
        console.log('Cantante');
    }
    else{
        console.log('No es cantante');
    }
    if(persona.cocinero){
        console.log('Cocinero');
    }
    else{
        console.log('No es cocinero');
    }
    if(persona.deportista){
        console.log('Deportista');
    }
    else{
        console.log('No es deportista');
    }
    if(persona.dj){
        console.log('Dj');
    }
    else{
        console.log('No es dj');
    }
    if(persona.guitarista){
        console.log('Guitarrista');
    }
    else{
        console.log('No es guitarrista');
    }
}

imprimirProfesiones(anibal);

//Definir una constante con la palabra reservada const, una convención importante es definirlas en mayusculas separadas por guioo bajo

const MAYORIAD_DE_EDAD = 18;

//Funcion que evalua la mayoria de edad de una persona y returna true o false

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIAD_DE_EDAD;
}

//Funcion imprimir si es mayor o menor de edad
function imprimirSiEsMayorEdad(persona){
    if(esMayorDeEdad(persona) ) {
        console.log(`${persona.nombre} es mayor de edad`);
    }
    else{
        console.log(`${persona.nombre} es menor de edad`);
    }
}

imprimirSiEsMayorEdad(anibal);