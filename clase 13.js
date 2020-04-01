/*
Estructura de control While: Esta estructura repetitiva se ejecuta unicamente 
mientras la condición que se esta evaluando es verdadera.
Una forma facil de hacer debug en nuestro navegador es utilizando la palabra clave debugger 
en donde quieres hacer el debug
*/

var anibal = {
    nombre: 'Anibal',
    apellido: 'Ortega',
    edad: 27,
    peso: 86
}

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_AÑO = 365;
const META = anibal.peso - 3;
var dias = 0;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const realizaDeporte =  () => Math.random() < 0.4;
const comeMucho = () => Math.random() < 0.3 


while (anibal.peso > META){

    if(realizaDeporte()){
        adelgazar(anibal);
    }
    if(comeMucho()){
        aumentarDePeso(anibal);
    }

    dias +=1;
}

console.log(`pasaron ${dias} dias hasta que ${anibal.nombre} adelgazo 3kg`);

