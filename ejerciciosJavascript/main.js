const movies = [
  {
    director: "Christopher Nolan",
    genre: "Ciencia Ficción",
    country: "Estados Unidos",
    duration: "148 minutos",
    protagonists: [
      { name: "Leonardo DiCaprio", age: 35 },
      { name: "Joseph Gordon-Levitt", age: 29 },
    ],
    releaseYear: 2010,
    title: "Inception",
    synopsis:
      "Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños, se le da la tarea inversa de plantar una idea en la mente de un CEO.",
    oscarAwards: 4,
    rating: "PG-13",
  },
  {
    director: "Alfonso Cuarón",
    genre: "Drama",
    country: "México",
    duration: "135 minutos",
    protagonists: [
      { name: "Yalitza Aparicio", age: 26 },
      { name: "Marina de Tavira", age: 44 },
    ],
    releaseYear: 2018,
    title: "Roma",
    synopsis:
      "La película sigue a Cleo, una joven sirvienta trabajando en la México de los años 70 para una familia de clase media en el barrio de Roma.",
    oscarAwards: 3,
    rating: "R",
  },
  {
    director: "Guillermo del Toro",
    genre: "Fantasía",
    country: "España",
    duration: "119 minutos",
    protagonists: [
      { name: "Ivana Baquero", age: 13 },
      { name: "Sergi López", age: 45 },
    ],
    releaseYear: 2006,
    title: "El laberinto del fauno",
    synopsis:
      "En la España de posguerra, una niña fascinada con los cuentos de hadas es enviada junto a su madre embarazada para vivir con su nuevo padrastro, un oficial fascista cruel.",
    oscarAwards: 3,
    rating: "R",
  },
  {
    director: "Peter Jackson",
    genre: "Fantasía",
    country: "Nueva Zelanda",
    duration: "201 minutos",
    protagonists: [
      { name: "Elijah Wood", age: 20 },
      { name: "Ian McKellen", age: 62 },
    ],
    releaseYear: 2001,
    title: "El Señor de los Anillos: La Comunidad del Anillo",
    synopsis:
      "Un humilde hobbit de la Comarca y ocho compañeros se embarcan en un viaje para destruir el poderoso Anillo Único y salvar a la Tierra Media del Señor Oscuro Sauron.",
    oscarAwards: 4,
    rating: "PG-13",
  },
  {
    director: "Damien Chazelle",
    genre: "Musical",
    country: "Estados Unidos",
    duration: "128 minutos",
    protagonists: [
      { name: "Ryan Gosling", age: 36 },
      { name: "Emma Stone", age: 28 },
    ],
    releaseYear: 2016,
    title: "La La Land",
    synopsis:
      "Un músico de jazz y una aspirante a actriz se enamoran mientras persiguen sus sueños en Los Ángeles, enfrentando decisiones que pueden alterar sus vidas y sus carreras.",
    oscarAwards: 6,
    rating: "PG-13",
  },
  {
    director: "Martin Scorsese",
    genre: "Biografía",
    country: "Estados Unidos",
    duration: "180 minutos",
    protagonists: [
      { name: "Leonardo DiCaprio", age: 40 },
      { name: "Jonah Hill", age: 31 },
    ],
    releaseYear: 2013,
    title: "El lobo de Wall Street",
    synopsis:
      "Basada en la verdadera historia de Jordan Belfort, desde su ascenso a una vida llena de riquezas y excesos hasta su caída involucrando crimen, corrupción y el gobierno federal.",
    oscarAwards: 0,
    rating: "R",
  },
  {
    director: "Steven Spielberg",
    genre: "Drama",
    country: "Estados Unidos",
    duration: "195 minutos",
    protagonists: [
      { name: "Liam Neeson", age: 40 },
      { name: "Ben Kingsley", age: 50 },
    ],
    releaseYear: 1993,
    title: "La lista de Schindler",
    synopsis:
      "En Polonia durante la Segunda Guerra Mundial, Oskar Schindler gradualmente se preocupa por su fuerza laboral judía tras presenciar su persecución por los nazis.",
    oscarAwards: 7,
    rating: "R",
  },
  {
    director: "Ridley Scott",
    genre: "Ciencia Ficción",
    country: "Estados Unidos",
    duration: "117 minutos",
    protagonists: [
      { name: "Sigourney Weaver", age: 30 },
      { name: "Tom Skerritt", age: 45 },
    ],
    releaseYear: 1979,
    title: "Alien, el octavo pasajero",
    synopsis:
      "La tripulación de la nave espacial Nostromo es despertada de su sueño criogénico para investigar una transmisión desconocida de un planeta cercano, solo para descubrir una forma de vida hostil.",
    oscarAwards: 1,
    rating: "R",
  },
  {
    director: "Francis Ford Coppola",
    genre: "Crimen",
    country: "Estados Unidos",
    duration: "175 minutos",
    protagonists: [
      { name: "Marlon Brando", age: 47 },
      { name: "Al Pacino", age: 32 },
    ],
    releaseYear: 1972,
    title: "El Padrino",
    synopsis:
      "La envejecida patriarca de una dinastía del crimen organizado decide transferir el control de su imperio clandestino a su reacio hijo.",
    oscarAwards: 3,
    rating: "R",
  },
  {
    director: "Quentin Tarantino",
    genre: "Western",
    country: "Estados Unidos",
    duration: "165 minutos",
    protagonists: [
      { name: "Jamie Foxx", age: 45 },
      { name: "Christoph Waltz", age: 56 },
    ],
    releaseYear: 2012,
    title: "Django sin cadenas",
    synopsis:
      "Con la ayuda de un cazador de recompensas alemán, un esclavo liberado se propone rescatar a su esposa de un brutal dueño de una plantación en Mississippi.",
    oscarAwards: 2,
    rating: "R",
  },
  {
    director: "Wes Anderson",
    genre: "Comedia",
    country: "Estados Unidos",
    duration: "100 minutos",
    protagonists: [
      { name: "Bill Murray", age: 50 },
      { name: "Owen Wilson", age: 33 },
    ],
    releaseYear: 2001,
    title: "Los Tenenbaums, una familia de genios",
    synopsis:
      "Una familia de genios excéntricos se reúne cuando uno de sus miembros anuncia que tiene una enfermedad terminal.",
    oscarAwards: 0,
    rating: "R",
  },
  {
    director: "Ang Lee",
    genre: "Drama",
    country: "Taiwán",
    duration: "120 minutos",
    protagonists: [
      { name: "Tony Leung", age: 38 },
      { name: "Maggie Cheung", age: 36 },
    ],
    releaseYear: 2000,
    title: "Tigre y dragón",
    synopsis:
      "En la China del siglo XIX, un guerrero en busca de una espada mágica y una noble guerrera se enfrentan a obstáculos personales y a rivales mortales.",
    oscarAwards: 4,
    rating: "PG-13",
  },
  {
    director: "David Fincher",
    genre: "Misterio",
    country: "Estados Unidos",
    duration: "151 minutos",
    protagonists: [
      { name: "Brad Pitt", age: 31 },
      { name: "Edward Norton", age: 33 },
    ],
    releaseYear: 1999,
    title: "El club de la pelea",
    synopsis:
      "Un oficinista insomne y un fabricante de jabón carismático forman un club de lucha subterráneo que evoluciona en algo mucho más grande.",
    oscarAwards: 0,
    rating: "R",
  },
  {
    director: "James Cameron",
    genre: "Ciencia Ficción",
    country: "Estados Unidos",
    duration: "162 minutos",
    protagonists: [
      { name: "Sam Worthington", age: 33 },
      { name: "Zoe Saldana", age: 31 },
    ],
    releaseYear: 2009,
    title: "Avatar",
    synopsis:
      "Un exmarine parapléjico es enviado al planeta Pandora en una misión única, pero se encuentra entre los intereses corporativos y los habitantes indígenas del planeta que luchan por su supervivencia.",
    oscarAwards: 3,
    rating: "PG-13",
  },
  {
    director: "George Lucas",
    genre: "Ciencia Ficción",
    country: "Estados Unidos",
    duration: "121 minutos",
    protagonists: [
      { name: "Mark Hamill", age: 25 },
      { name: "Harrison Ford", age: 35 },
    ],
    releaseYear: 1977,
    title: "Star Wars: Episodio IV - Una nueva esperanza",
    synopsis:
      "Luke Skywalker se une a un caballero Jedi, un piloto arrogante, un wookiee y dos droides para salvar la galaxia del Imperio, mientras intenta rescatar a la Princesa Leia del misterioso Darth Vader.",
    oscarAwards: 6,
    rating: "PG",
  },
  {
    director: "Stanley Kubrick",
    genre: "Drama",
    country: "Reino Unido",
    duration: "136 minutos",
    protagonists: [
      { name: "Malcolm McDowell", age: 28 },
      { name: "Patrick Magee", age: 50 },
    ],
    releaseYear: 1971,
    title: "La naranja mecánica",
    synopsis:
      "En un futuro distópico, un joven delincuente es sometido a un tratamiento experimental para curar su adicción a la violencia, pero el remedio tiene sus propios efectos devastadores.",
    oscarAwards: 0,
    rating: "X",
  },
  {
    director: "Tim Burton",
    genre: "Fantasía",
    country: "Estados Unidos",
    duration: "126 minutos",
    protagonists: [
      { name: "Johnny Depp", age: 37 },
      { name: "Helena Bonham Carter", age: 34 },
    ],
    releaseYear: 1999,
    title: "El joven manos de tijera",
    synopsis:
      "Un joven artificialmente creado, equipado con tijeras en lugar de manos, es llevado a una nueva comunidad después de vivir en aislamiento.",
    oscarAwards: 1,
    rating: "PG-13",
  },
  {
    director: "Sofia Coppola",
    genre: "Drama",
    country: "Estados Unidos",
    duration: "102 minutos",
    protagonists: [
      { name: "Bill Murray", age: 53 },
      { name: "Scarlett Johansson", age: 19 },
    ],
    releaseYear: 2003,
    title: "Perdidos en Tokio",
    synopsis:
      "Un actor en declive y una joven mujer desencantada forman un vínculo poco probable después de encontrarse en Tokio.",
    oscarAwards: 1,
    rating: "R",
  },
  {
    director: "Alejandro González Iñárritu",
    genre: "Drama",
    country: "México",
    duration: "154 minutos",
    protagonists: [
      { name: "Gael García Bernal", age: 26 },
      { name: "Goya Toledo", age: 32 },
    ],
    releaseYear: 2000,
    title: "Amores perros",
    synopsis:
      "Tres historias entrelazadas sobre la vida en la Ciudad de México se revelan después de un trágico accidente de coche.",
    oscarAwards: 0,
    rating: "R",
  },
  {
    director: "Paul Thomas Anderson",
    genre: "Drama",
    country: "Estados Unidos",
    duration: "158 minutos",
    protagonists: [
      { name: "Daniel Day-Lewis", age: 50 },
      { name: "Paul Dano", age: 24 },
    ],
    releaseYear: 2007,
    title: "Petróleo sangriento",
    synopsis:
      "Un minero de plata convertido en magnate del petróleo en su camino para consolidar su imperio durante el boom petrolero en California a principios del siglo XX.",
    oscarAwards: 2,
    rating: "R",
  },
  {
    director: "Ron Howard",
    genre: "Drama",
    country: "Estados Unidos",
    duration: "135 minutos",
    protagonists: [
      { name: "Russell Crowe", age: 37 },
      { name: "Ed Harris", age: 50 },
    ],
    releaseYear: 2001,
    title: "Una mente brillante",
    synopsis:
      "Basada en la vida de John Nash, un noble matemático que lucha contra la esquizofrenia mientras hace importantes descubrimientos en su carrera.",
    oscarAwards: 4,
    rating: "PG-13",
  },
  {
    director: "Jonathan Demme",
    genre: "Suspense",
    country: "Estados Unidos",
    duration: "118 minutos",
    protagonists: [
      { name: "Jodie Foster", age: 29 },
      { name: "Anthony Hopkins", age: 54 },
    ],
    releaseYear: 1991,
    title: "El silencio de los corderos",
    synopsis:
      "Una joven agente del FBI busca la ayuda de un asesino en serie encarcelado para atrapar a otro asesino en serie que desolla a sus víctimas.",
    oscarAwards: 5,
    rating: "R",
  },
  {
    director: "Michael Bay",
    genre: "Acción",
    country: "Estados Unidos",
    duration: "151 minutos",
    protagonists: [
      { name: "Bruce Willis", age: 43 },
      { name: "Ben Affleck", age: 26 },
    ],
    releaseYear: 1998,
    title: "Armageddon",
    synopsis:
      "Un grupo de perforadores de petróleo es enviado al espacio para detener un asteroide gigante en curso de colisión con la Tierra.",
    oscarAwards: 0,
    rating: "PG-13",
  },
  {
    director: "Robert Zemeckis",
    genre: "Aventura",
    country: "Estados Unidos",
    duration: "116 minutos",
    protagonists: [
      { name: "Tom Hanks", age: 38 },
      { name: "Robin Wright", age: 27 },
    ],
    releaseYear: 1994,
    title: "Forrest Gump",
    synopsis:
      "La historia de un hombre con un coeficiente intelectual bajo que presencia y, sin darse cuenta, influye en varios eventos históricos importantes en el siglo XX en Estados Unidos.",
    oscarAwards: 6,
    rating: "PG-13",
  },
  {
    director: "Bong Joon Ho",
    genre: "Suspense",
    country: "Corea del Sur",
    duration: "132 minutos",
    protagonists: [
      { name: "Song Kang-ho", age: 53 },
      { name: "Lee Sun-kyun", age: 44 },
    ],
    releaseYear: 2019,
    title: "Parásitos",
    synopsis:
      "Una familia empobrecida se infiltra en la vida de una familia rica, desencadenando una serie de eventos inesperados.",
    oscarAwards: 4,
    rating: "R",
  },
  {
    director: "Greta Gerwig",
    genre: "Drama",
    country: "Estados Unidos",
    duration: "135 minutos",
    protagonists: [
      { name: "Saoirse Ronan", age: 25 },
      { name: "Timothée Chalamet", age: 24 },
    ],
    releaseYear: 2019,
    title: "Mujercitas",
    synopsis:
      "Cuatro hermanas crecen en América después de la Guerra Civil, cada una luchando por vivir a su manera.",
    oscarAwards: 1,
    rating: "PG",
  },
  {
    director: "Todd Phillips",
    genre: "Drama",
    country: "Estados Unidos",
    duration: "122 minutos",
    protagonists: [
      { name: "Joaquin Phoenix", age: 45 },
      { name: "Robert De Niro", age: 76 },
    ],
    releaseYear: 2019,
    title: "Joker",
    synopsis:
      "Arthur Fleck, un comediante fracasado, se embarca en una espiral descendente hacia la locura y el caos criminal mientras se transforma en una figura icónica de la rebelión.",
    oscarAwards: 2,
    rating: "R",
  },
  {
    director: "Jordan Peele",
    genre: "Terror",
    country: "Estados Unidos",
    duration: "116 minutos",
    protagonists: [
      { name: "Lupita Nyong'o", age: 36 },
      { name: "Winston Duke", age: 33 },
    ],
    releaseYear: 2019,
    title: "Nosotros",
    synopsis:
      "Una familia enfrenta a sus siniestros dobles después de una serie de extraños encuentros en una casa de playa.",
    oscarAwards: 0,
    rating: "R",
  },
  {
    director: "Denis Villeneuve",
    genre: "Ciencia Ficción",
    country: "Canadá",
    duration: "163 minutos",
    protagonists: [
      { name: "Ryan Gosling", age: 37 },
      { name: "Harrison Ford", age: 75 },
    ],
    releaseYear: 2017,
    title: "Blade Runner 2049",
    synopsis:
      "Un joven blade runner descubre un secreto largamente oculto que podría sumergir lo que queda de la sociedad en el caos y lo lleva a buscar a Rick Deckard, un antiguo blade runner que está desaparecido hace 30 años.",
    oscarAwards: 2,
    rating: "R",
  },
  {
    director: "Edgar Wright",
    genre: "Acción",
    country: "Reino Unido",
    duration: "113 minutos",
    protagonists: [
      { name: "Ansel Elgort", age: 23 },
      { name: "Kevin Spacey", age: 58 },
    ],
    releaseYear: 2017,
    title: "Baby Driver",
    synopsis:
      "Un joven conductor de escapadas se ve involucrado en un atraco condenado al fracaso después de ser coaccionado para trabajar para un jefe del crimen.",
    oscarAwards: 0,
    rating: "R",
  },
];

/*
Ejercicios:Crear funciones que cumplan con los siguientes requerimientos:

   1. Obtener una lista de los géneros sin repetir
   2. Obtener una lista de los nombres de los directores sin repetir
   3. Obtener una lista con únicamente los nombres de los actores protagonistas de todas las películas, sin repetir
   4. Obtener uan lista de clasificaciones (rating) sin repetir
   5. Obtener una lista de las películas que tienen una duración entre 2 rangos, por ejemplo las películas que duran entre 100 y 120 mins ( los valores de las duraciones deben ser dinámicos)
   6. Obtener una lista de películas con base en su clasificación
   7. Obtener una lista de películas películas estrenadas en un rango de años (por ejemplo, entre 2000 - 2010, los valores de los años deben ser dinámicos)
   8. Obtener una lista de películas con base en el país al que pertenecen
   9. Obtener una lista de las películas que no obtuvieron premios Óscar
*/
/*
   10. Obtener la cantidad de películas de cada clasficación. Esta información debe estar organizada de la siguiente forma:
        {
            [nombre_de_la_clasificacion]:[cantidad]
        }
        Es decir, la propiedad del objeto resultante deber ser la clasificación, y el valor de esa propiedad debe ser la cantidad de películas que pertenecen a esa clasificación
*/

/*
    11. Obtener la cantidad de películas de cada país, organizada de la siguiente forma:
        {
            [pais]:[cantidad]
        }
*/

const organizeMoviesByProperty = (dataArray, propertyName) => {
  let result = dataArray.reduce((accum, current) => {
    return accum[current[propertyName]]
      ? { ...accum, [current[propertyName]]: accum[current[propertyName]] + 1 }
      : { ...accum, [current[propertyName]]: 1 };
  }, {});
  return result;
};

let organizeByRating = organizeMoviesByProperty(movies, "rating");
let organizeByCountry = organizeMoviesByProperty(movies, "country");
let organizeByGenre = organizeMoviesByProperty(movies, "genre");

console.log(organizeByRating);
console.log(organizeByCountry);
console.log(organizeByGenre);

/*
    12. Obtener la edad promedio de los actores protagonistas
*/

/*
{
    director: "Edgar Wright",
    genre: "Acción",
    country: "Reino Unido",
    duration: "113 minutos",
    protagonists: [
      { name: "Ansel Elgort", age: 23 },
      { name: "Kevin Spacey", age: 58 },
    ],
    releaseYear: 2017,
    title: "Baby Driver",
    synopsis:
      "Un joven conductor de escapadas se ve involucrado en un atraco condenado al fracaso después de ser coaccionado para trabajar para un jefe del crimen.",
    oscarAwards: 0,
    rating: "R",
  },
*/

const getProtagonistAverageAge = (dataArray) => {
  let result = dataArray.reduce((accum, current, _, arr) => {
    let subResult = current.protagonists.reduce((accum, current, _, arr) => {
      return accum + current.age / arr.length;
    }, 0);
    return accum + subResult / arr.length;
  }, 0);
  return result;
};

console.log(getProtagonistAverageAge(movies));

/*
    13. Dado el nombre de un actor, obtener la cantidad de películas de la lista en las que aparece
*/

const getActorAppearences = (dataArray, actorName) => {
  let result = dataArray.reduce((accum, current) => {
    return current.protagonists.some((actor) => actor.name === actorName)
      ? accum + 1
      : accum;
  }, 0);
  return result;
};

console.log(getActorAppearences(movies, "Kevin Spacey"));

/*
   14. Obtener una lista que contenga objetos de cada película con el siguiente formato:
    
    {
        title: "{titulo_de_la_película} - {director} - {duración}",
        trimmedSynopsis: "{sinopsis}..."
    }

    **trimmedSynopsis debe estar limitada a 10 palabras, y debe tener puntos suspensivos al final.
*/

const getShortMoviesObject = (dataArray) => {
  let result = dataArray.map((movie) => {
    let { title, synopsis } = movie;
    let trimmedSynopsis = `${synopsis.split(" ", 10).join(" ")}...`;
    return { title, trimmedSynopsis };
  });
  return result;
};

console.log(getShortMoviesObject(movies));

/*Happy Hacking Koders!!!*/
