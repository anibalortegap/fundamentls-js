/**
 * La recursividad es un concepto muy importante en cualquier lenguaje de programación. 
 * Una función recursiva es básicamente aquella que se llama (o se ejecuta) a sí misma de forma controlada, 
 * hasta que sucede una condición base.
 */

 /*
 Vamos a dividir 13/4
 
 13 |_4__

 13 - 4 = 9    asignamos 1
 9 - 4 = 5     asignamos 1
 5 - 4 = 1     asignamos 1
 1 - 4 = -3 No se cumple y este es  nuestro caso base
 */

 function divisionEntera(dividendo, divisor) {
     if(dividendo < divisor) {
         return 0;
     }
     return 1 + divisionEntera(dividendo - divisor, divisor);
 }