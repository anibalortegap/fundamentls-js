//Definicion de variables globales
var numero1 = 5;

var numero2 = '5';

//Definicion de objetos
var anibal = {
    nombre: 'Anibal',
    edad: 28
}

var otroAnibal = {
    nombre: 'Anibal',
    edad: 28
}

var otroAnibal2 = anibal;

//Return false, son posiciones de memoria diferente y eso hace que sean objetos diferentes
console.log(anibal === otroAnibal); 
//Return true  - El doble == solo compara valor asi el tipo de dato sea diferente
console.log(numero1 == numero2); 
//Return false -  El tripe === compara tipo de dato y valor
console.log(numero1 === numero2); 
//Return true - Son la misma posición de memoria 
console.log(anibal === otroAnibal2);

//Tipos de datos primitivos
/* 
1. Boolean
2. Null
3. Undefined
4. Number
5. String
*/