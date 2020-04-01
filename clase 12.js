/*
La estructura de control bucle for, se utiliza para repetir una o mas instrucciones en un
determinado numero de veces.
Para escvribir un bucle for se coloca la palabra for seguida de parentesis y llaves

De la siguiente manera: 
for(En esta parte iran las condiciones para ejecutar el bucle) {
    En esta parte iran las instrucciones que se deben de repetir 
}
*/

var anibal = {
    nombre: 'Anibal',
    apellido: 'Ortega',
    edad: 27,
    peso: 86
}

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;

const adelgazar = persona => persona.peso -= INCREMENTO_PESO;


console.log(`Al inicio del año ${anibal.nombre} pesa ${anibal.peso}kg`);

for (var i = 1; i<=DIAS_DEL_ANO; i++) {
    var random = Math.random();
    
    if(random < 0.25) {
        aumentarDePeso(anibal);
    }
    else if (random < 0.5) {
        adelgazar(anibal);
    }else{
        console.log('Cero calorias');
    }
    
}

console.log(`Al final del año ${anibal.nombre} pesa ${anibal.peso.toFixed(1)}kg`);
