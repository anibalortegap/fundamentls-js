//definición de variables
var nombre = 'Anibal';
var apellido = 'Ortega';

//convertir nombre a mayusculas
var nombreMayuscula = nombre.toUpperCase();
//convertir apellido a minuscula
var apellidoMinuscula = apellido.toLowerCase();
//imprimir el resultado
console.log(nombreMayuscula);
console.log(apellidoMinuscula);

//retornar primera letra del nombre
var primeraLetranombre = nombre.charAt(0);
console.log(primeraLetranombre);  

//retornar cantidad de letras del nombre
var cantidadLetrasnombre = nombre.length;
console.log(cantidadLetrasnombre);

//interpolación de textos
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;
console.log(nombreCompleto);

//manejo de substring
var str = nombre.substr(0,3);
console.log(str);

//desafio encuentre la ultima letra del nombre 
var nombreDesafio = 'Anibal';
var longitudnombreDesafio = nombre.length;
var ultimaLetranombre = nombreDesafio.charAt(longitudnombreDesafio-1);
console.log(ultimaLetranombre);
