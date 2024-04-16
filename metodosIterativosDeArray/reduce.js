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

/*let newCanes = {
    vacunados:[{...vacunado:true}],
    noVacunados:[{...vacunado:false}]
}*/

const transformData = (dogsArray) => {
  let newData = {
    vacunados: [],
    noVacunados: [],
  };
  dogsArray.forEach((dog) => {
    dog.vacunado
      ? (newData.vacunados = [...newData.vacunados, dog])
      : [...newData.noVacunados, dog];
  });
  return newData;
};

//transformData(canes);

const reduceData = (dogsArray) =>
  dogsArray.reduce(
    (accum, current) =>
      current.vacunado
        ? { ...accum, vacunados: [...accum.vacunados, current] }
        : { ...accum, noVacunados: [...accum.noVacunados, current] },
    {
      vacunados: [],
      noVacunados: [],
    }
  );

console.log(reduceData(canes));

/*
    si el perro esta vacunado, tenemos que regresar todo lo que ya teniamos en el acumulador, y además la propiedad "vacunados" modificada con todos los perros vacunados que ya habiamos encontrado, más el nuevo perro que acabamos de encontrar
*/
