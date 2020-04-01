function heredaDe(prototipoHijo, prototipoPadre){
    var noop = function(){}
    noop.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new noop
    prototipoHijo.prototype.constructor = prototipoHijo;
}


function Persona (nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function(){
    debugger
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function(){
    return this.altura > 1.8;
}

function Desarrollador(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador/a`);
}




