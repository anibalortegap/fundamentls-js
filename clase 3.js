//definimos una variable edad 
var edad = 27;
//operador += abrevia escribir edad = edad + 1
edad += 1;
//definimos una varibale peso
var peso = 75;
//operador -= abrevia escribir peso = peso - 2
peso -= 2;
//Operadores aritmeticos 
var sandwich = 1;
peso += sandwich;

var jugarAlFutbol = 3;
peso -= jugarAlFutbol;
console.log(peso);

var pizza = 8;
var personas = 3;
var cantidadDePorcionesPorPersona = pizza / personas;
console.log(cantidadDePorcionesPorPersona);

//uso decimales en javascript
var precioDeVino = 200.3;
//uso de metodo math.round(numero) el cual nos sirve para redondear 
var total = Math.round(precioDeVino *  100 * 3) / 100;
console.log('Imprimiendo total: '+total);
//uso de metodo toFixed(numeroDecimales) el cual no sirve para indicar cuantos decimales de un numero
var totalStr = total.toFixed(3);
console.log('Imprimiendo totalStr: '+totalStr);
//uso del metodo parseFloat(numero) nos permite convertir un string a numero flotante
var totalFloat = parseFloat(totalStr);
console.log('Imprimiento totalFloat: '+totalFloat);




