/*
Estructura de control Switch: Se utiliza para realizar diferentes acciones basadas en multiples condiciones
Cuando ingresamos un break dentro del case del switch sirve para salir del bucle.
Se evalua una expresion y se compara el valor de la expresion con una instancia case que ejecuta unas
sentencias asociadas.

Nota: Que pasa si olvidamos poner el break, se ejecutaran los siguientes casos y no rompera la 
estrucrura de control.
*/

var frutaFavorita = prompt('Ingrese su fruta favorita');

switch(frutaFavorita){
    case 'Banano':
        console.log('Su fruta favorita es la banana y la tenemos disponible');
    break

    case 'Fresa':
        console.log('Su fruta favorita es la fresa y la tenemos disponible');
    break

    case 'Mango':
        console.log('Su fruta favorita es el mango y la tenemos disponible');
    break

    case 'Uva':
        console.log('Su fruta favorita es la uva y la tenemos disponible');
    break

    case 'Mora':
        console.log('Su fruta favorita es la mora y la tenemos disponible');
    break

    case 'Pera':
        console.log('Su fruta favorita es la pera y la tenemos disponible');
    break
    
    default:
        console.log(`Su fruta favorita es: ${frutaFavorita} y no la tenemos disponible`)

}