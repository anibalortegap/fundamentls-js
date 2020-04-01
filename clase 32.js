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

var ids = [1, 2, 3, 4, 5, 6, 7];
var promesas = ids.map(function (id) {
    return obtenerPersonaje(id);
})

Promise.all(promesas)
    .then(personajes => {
        for(let persona of personajes) {
            console.log(persona.name);
        }
    })
    .catch(onError)

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}