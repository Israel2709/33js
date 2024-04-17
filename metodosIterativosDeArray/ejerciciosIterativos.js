const canes = [
  {
    nombre: "Rex",
    tipo: "Perro",
    edad: 4,
    vacunado: true,
    pais: "México",
    direccion: {
      calle: "Calle del Parque",
      numero: 23,
      colonia: "San José",
      codigoPostal: 78900,
    },
  },
  {
    nombre: "Bella",
    tipo: "Perro",
    edad: 6,
    vacunado: true,
    pais: "México",
    direccion: {
      calle: "Avenida Libertad",
      numero: 56,
      colonia: "El Bosque",
      codigoPostal: 78500,
    },
  },
  {
    nombre: "Max",
    tipo: "Perro",
    edad: 3,
    vacunado: false,
    pais: "Colombia",
    direccion: {
      calle: "Callejón del Puente",
      numero: 12,
      colonia: "Villa Hermosa",
      codigoPostal: 78850,
    },
  },
  {
    nombre: "Rocky",
    tipo: "Perro",
    edad: 2,
    vacunado: false,
    pais: "Ecuador",
    direccion: {
      calle: "Camino Real",
      numero: 34,
      colonia: "Las Palmas",
      codigoPostal: 78600,
    },
  },
];

/*
  1.- Necesito conocer la edad promedio de todos los perros
*/

const getAgeAverage = (dataArray) =>
  dataArray.reduce(
    (accum, current) => accum + current.edad / dataArray.length,
    0
  );

console.log(getAgeAverage(canes));

/*
  2.- Necesito obtener una lista de perros basados en el país al que pertenecen
*/

const getDogsByCountry = (dataArray, country) => {
  let result = dataArray.filter(
    (dog) => dog.pais.toLowerCase() === country.toLowerCase()
  );

  if (!result.length) {
    /*si no hay perros de ese país*/
    return `No hay perros que pertenezcan a ${country}`;
  } else {
    return result;
  }
};

console.log(getDogsByCountry(canes, "Ecuador"));
console.log(getDogsByCountry(canes, "China"));

/*
  3.- Necesito una lista de los códigos postales de los perros
*/

const getZipCodes = (dataArray) =>
  dataArray.map((dog) => dog.direccion.codigoPostal);

console.log(getZipCodes(canes));

/*
  4.- Necesito una lista que contenga la lista de países a los que pertenecen los perros, pero sin repetidos
*/

const getCountryList = (dataArray) =>
  dataArray.reduce(
    (accum, current) =>
      accum.includes(current.pais) ? accum : [...accum, current.pais],
    []
  );

console.log(getCountryList(canes));
