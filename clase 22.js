function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}


/*
This dentro de las arrow function hace referencia al objeto global Windows 
Por lo cual si hacemos this === Windows esto nos retorna true. Por lo cual vamos
a refactorizar la funcion nuevamente de la forma tradicional
*/
Persona.prototype.soyAlto = function () {
    return this.altura > alturaMaxima;
} 

/*
Persona.prototype.soyAlto = function() {
    if(this.altura > alturaMaxima){
        console.log(`${this.nombre} cumple con la altura maxima`);
    }else{
        console.log(`${this.nombre} no cumples la altura maxima`);
    }
}
*/

const alturaMaxima = 1.80;

var anibal = new Persona('Anibal','Ortega', 1.45);
var jose = new Persona('Jose', 'Jimenez', 1.83);
var pedro = new Persona('Pedro', 'Rodriguez', 1.90);

anibal.saludar();
jose.saludar();
pedro.saludar();


