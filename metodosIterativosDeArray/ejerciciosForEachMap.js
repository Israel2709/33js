const canes = [
  {
    nombre: "Rex",
    tipo: "Perro",
    edad: 4,
    vacunado: true,
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
    direccion: {
      calle: "Camino Real",
      numero: 34,
      colonia: "Las Palmas",
      codigoPostal: 78600,
    },
  },
];

/*
    1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )
    */

const convertHumanYearsToDogYears = (humanYears) => humanYears * 7;

const getDogYears = (dogsArray) =>
  dogsArray.map((dog) => ({
    ...dog,
    edad: convertHumanYearsToDogYears(dog.edad),
  }));
console.log(getDogYears(canes));

/*
    2.- Necesitamos conocer la cantidad de canes que ya estan vacunados
*/

const getVaccinatedDogs = (dogsArray) => {
  let total = 0;
  dogsArray.forEach((dog) => {
    if (dog.vacunado) total++;
  });
  return total;
};

console.log(getVaccinatedDogs(canes));

/*
    3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
        "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "
        */

const getDogAddress = (dogsArray) => {
  return dogsArray.map((dog) => {
    let { nombre, direccion } = dog;
    let { calle, numero, colonia, codigoPostal } = direccion;
    return `${nombre}: ${calle} #${numero}, ${colonia}, ${codigoPostal}`;
  });
};

/*const getDogAddress = (dogsArray) =>
  dogsArray.map(
    ({ nombre, direccion: { calle, numero, colonia, codigoPostal } }) =>
      `${nombre}: ${calle} #${numero}, ${colonia}, ${codigoPostal}`
  ); */

console.log(getDogAddress(canes));

/*
    4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
    5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No")
  */

const changeVaccinateValue = (dogsArray) =>
  dogsArray.map((dog) => ({ ...dog, vacunado: dog.vacunado ? "Si" : "No" }));

console.log(changeVaccinateValue(canes));
/*    
    6.- Necesitamos una nueva lista con únicamente el nombre de cada can
*/

const getDogNamesList = (dogsArray) => dogsArray.map(({ name }) => name);
/*
let perro = {
  nombre: "Rocky",
  tipo: "Perro",
  edad: 2,
  vacunado: false,
  direccion: {
    calle: "Camino Real",
    numero: 34,
    colonia: "Las Palmas",
    codigoPostal: 78600,
  },
};
*/
/*extracción normal (notación de punto)*/
/*let nombre = perro.nombre
let tipo = perro.tipo
let vacunado = perro.vacunado*/

/*destructuración*/

/*
let { nombre, tipo, vacunado } = perro;

console.log(nombre, tipo, vacunado);
*/

/*Así modificamos el valor de una propiedad de un objeto literal*/

/*perro.tipo = "can";

console.log(perro);

así agregamos una nueva propiedad a un objeto literal
perro.owner = "Israel Salinas Martínez";
console.log(perro);*/

/*operador de propagación, sirve para copiar el contenido de un array o un objeto, e insertarlo en un nuevo array/objeto*/

/*let perro2 = { ...perro };

console.log("perro2", perro2);

perro.nombre = "Boris";

console.log(perro);

console.log("perro2 despues de cambiar", perro2);
*/
