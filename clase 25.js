class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura
    }

    saludar(callback){
        console.log(`Hola, Me llamo ${this.nombre} ${this.apellido}`);
        if(callback){
            callback(this.nombre, this.apellido);
        }
    }

    soyAlto(){
        return this.altura > 1.8;
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super()
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(callback){
        console.log(`Hola, Me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a `);
        if(callback){
            callback(this.nombre, this.apellido, true);
        }
    }
}


function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah mira, no sabia que eras desarrollador/a`);
    }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.72);
var anibal = new Persona('Anibal', 'Ortega', 1.81);
var ronaldo = new Desarrollador('Cristiano', 'Ronaldo', 1.83);

sacha.saludar();
anibal.saludar(responderSaludo);
ronaldo.saludar(responderSaludo);
