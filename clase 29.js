const URL_API = "https://swapi.co/api/";
const URL_PEOPLE = "people/:id";
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const URL = `${URL_API}${URL_PEOPLE.replace(":id", id)}`;

  $.get(URL, opts, callback).fail(() => {
    console.log(`Sucedio un error con el personaje ${id}`);
  });
}

obtenerPersonaje(1, personaje => {
  console.log(`Hola, yo soy ${personaje.name}`);

  obtenerPersonaje(2, personaje => {
    console.log(`Hola, yo soy ${personaje.name}`);

    obtenerPersonaje(3, personaje => {
      console.log(`Hola, yo soy ${personaje.name}`);

      obtenerPersonaje(4, personaje => {
        console.log(`Hola, yo soy ${personaje.name}`);

        obtenerPersonaje(5, personaje => {
          console.log(`Hola, yo soy ${personaje.name}`);

          obtenerPersonaje(6, personaje => {
            console.log(`Hola, yo soy ${personaje.name}`);
            
            obtenerPersonaje(7, personaje => {
              console.log(`Hola, yo soy ${personaje.name}`);
            });
          });
        });
      });
    });
  });
});
