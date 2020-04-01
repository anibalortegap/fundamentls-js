/**
 * @var Es la manera más antigua de declarar variables. 
 * No es muy estricta en cuanto al alcance, ya que al declarar variables de esta forma, 
 * dichas variables podrán ser accedidas, e incluso modificaddas, 
 * tanto dentro como fuera de los bloques internos en una función.
 * 
 * @let Por otra parte, el alcance se reduce al bloque (las llaves) en el cual la variable fue declarada. 
 * Fuera de este bloque la variable no existe. Una vez declarada la variable con let, 
 * no se puede volver a declarar en ninguna otra parte de la función.
 * 
 * @const Al igual que ““let”” se define en el contexto o alcance de un bloque, 
 * a diferencia de let y var, las varibles definidas como constantes (const), 
 * ya no podrán ser modificadas ni declaradas nuevamente, 
 * en ninguna otra parte de la función o el contexto en el que ya existen.
 */

var anibal = {
    nombre: 'Anibal',
    apellido: 'Ortega',
    edad: 28
}
/**
 * Uso de funciones de forma global, al declarar mensaje con var, 
 * estamos indicando que es global y se puede utilizar fuera del bloque
 * Es por esto que al momento de realizar el console.log(mensaje la podemos utilizar
 * 
 */

function esMayorDeEdad(persona) {
    if (persona.edad >= 18) {
        var mensaje = 'Es mayor de edad';
    } else {
        var mensaje = 'Es menor de edad';
    }

    console.log(mensaje);
}
// Otra forma seria declarar mensaje con var al inicio de la función de siguiente manera
function esMayorDeEdad_v1(persona) {
    var mensaje;
    if (persona.edad >= 18) {
        mensaje = 'Es mayor de edad';
    } else {
        mensaje = 'Es menor de edad';
    }

    console.log(mensaje);
}

/**
 * Cuando definimos variables con let se limita al bloque donde es definida
 * En el siguiente error el console.log(mensaje) genera error al indicar que 
 * mensaje no existe porque esta definida en un bloque diferente
 * 
 * clase 34.js:63 Uncaught ReferenceError: mensaje is not defined
    at esMayorDeEdad_v2 (clase 34.js:63)
    at <anonymous>:1:1
 * 
 */

function esMayorDeEdad_v2(persona) {
    if (persona.edad >= 18) {
        let mensaje = 'Es mayor de edad';
    } else {
        let mensaje = 'Es menor de edad';
    }

    console.log(mensaje);
}


/**
 * Podemos definir la función de otra manera declarando mensaje con let 
 * al inicio de la función para dejarla global a la función
 */

function esMayorDeEdad_v3(persona) {
    let mensaje;
    if (persona.edad >= 18) {
        mensaje = 'Es mayor de edad';
    } else {
        mensaje = 'Es menor de edad';
    }

    console.log(mensaje);
}

/**
 * Definición de constantes tienen el mismo alcance de Let, pero
 * no pueden ser redefinidas nuevamente.
 * vamos a definir una constante para asignar que 18 es la constante 
 * Para ser mayor de edad en colombia
 */

function esMayorDeEdad_v4(persona) {
    const MAYORIA_DE_EDAD = 18;
    let mensaje;
    if (persona.edad >= MAYORIA_DE_EDAD) {
        mensaje = 'Es mayor de edad';
    } else {
        mensaje = 'Es menor de edad';
    }

    console.log(mensaje);
}

/**
 * En esta ocasión trataremos de asignar nuevamente la variable
 * MAYORIA_DE_EDAD y genera error
 * Uncaught TypeError: Assignment to constant variable.
    at esMayorDeEdad_v5 (clase 34.js:115)
    at <anonymous>:1:1
 */
function esMayorDeEdad_v5(persona) {
    const MAYORIA_DE_EDAD = 18;
    let mensaje;
    MAYORIA_DE_EDAD = 23;
    if (persona.edad >= MAYORIA_DE_EDAD) {
        mensaje = 'Es mayor de edad';
    } else {
        mensaje = 'Es menor de edad';
    }
    
    console.log(mensaje);
}