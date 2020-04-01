const URL_API = 'https://swapi.co/api/'
const URL_PEOPLE = 'people/:id';
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const URL = `${URL_API}${URL_PEOPLE.replace(":id", id)}`;
        $
            .get(URL, opts, (data) => {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
    .then((personaje)=> {
        console.log(`Hola, yo soy ${personaje.name}`);
        return obtenerPersonaje(2)
    })
    .then(personaje2 => {
        console.log(`Hola, yo soy ${personaje2.name}`);
        return obtenerPersonaje(3);
    })
    .then(personaje3 => {
        console.log(`Hola, yo soy ${personaje3.name}`);
        return obtenerPersonaje(4);
    })
    .then(personaje4 => {
        console.log(`Hola, yo soy ${personaje4.name}`);
        return obtenerPersonaje(5);
    })
    .then(personaje5 => {
        console.log(`Hola, yo soy ${personaje5.name}`);
        return obtenerPersonaje(6);
    })
    .then(personaje6 => {
        console.log(`Hola, yo soy ${personaje6.name}`);
        return obtenerPersonaje(7)
    })
    .then(personaje7 => {
        console.log(`Hola, yo soy ${personaje7.name}`);
    })
    .catch(onError);