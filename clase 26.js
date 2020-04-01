const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true}
const onPeolpleResponse = (persona) => console.log(`Hola yo soy, ${persona.name}`);

$.get(lukeUrl, opts, function (data){
    console.log(`Hola yo soy, ${data.name}`);
})

//Otra forma de escribir la function para obtener la respuesta del API  
$.get(lukeUrl, opts, onPeolpleResponse);