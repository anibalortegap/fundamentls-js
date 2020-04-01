/**
 * Async-await es la manera más simple y clara de realizar tareas asíncronas.
 * Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. 
 * Para poder utilizar esta forma, hay que colocar async antes de la definición de la función, 
 * y encerrar el llamado a Promises.all() dentro de un bloque try … catch.
 */

//Declaración de variable de la URL de la API
const URL_API = 'https://swapi.co/api/'
//Declaración de variable para el PATH de API's para obtener los personajes
const URL_PEOPLE = 'people/:id';
//Declaración de las opciones para la petición Http de JQuery
const opts = { crossDomain: true }

//Definición de la función para la generación del error
function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`);
}

//Definición de función que retorna una promesa con la respuesta de los personajes de la API de Star Wars
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

//Definición de funcioón asincrona para obtener un array de promesas y ejecutarla al mismo tiempo
async function obtenerPersonajes() {
    //Declaración de array con el numero de personajes de consultar
    var ids = [1, 2, 3, 4, 5, 6, 7];
    //Declaración de array de promesas con el metodo de transformación map
    var promesas = ids.map(id => obtenerPersonaje(id));
    try {
        //Llamado de multiples promesas con await de forma asincrona
        var personajes = await Promise.all(promesas);
        console.log(personajes);

    } catch (id) {
        onError(id);
    }

}

//Llamado a ejecutar la función obtenerPersonaje()
obtenerPersonajes()
