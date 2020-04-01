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
    })
    .catch(onError);