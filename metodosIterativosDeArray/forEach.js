/*.forEach()*/
/*.forEach es un método iterativo de array, que recorre cada elemento de un array, y ejecuta una función ( callback ) por cada elemento recorrido.
Este método no tiene valor de retorno*/

let koders = ["Yair", "María", "Akira"];

koders.forEach((koder, index, arr) => {
  console.log(koder);
  console.log(index);
  console.log(arr);
  let firstLetter = koder.charAt(0);
  console.log(firstLetter);
});

let kodersObjects = [
  {
    name: "Yair",
    lastname: "Guadarrama",
  },
  {
    name: "María",
    lastname: "Moreno",
  },
  {
    name: "Akira",
    lastname: "Tanno",
  },
];

const createFullName = (koderObject) => {
  let fullName = `${koderObject.name} ${koderObject.lastname}`;
  return fullName;
};

const getKodersFullName = (kodersArray) => {
  let kodersFullNames = [];
  kodersArray.forEach((koder) => {
    kodersFullNames.push(createFullName(koder));
  });
};
