const someString = "lorem ipsum";

/*
    someString = {
        length: 11,
        toLowerCase: () => {}
    }
*/

someString.length; //devuelve el valor de la propiedad
someString.toLowerCase; //devulevle el valor de la propiedad
someString.toLowerCase(); //ejecuta el método

const someOtherString = "TEXTO EN MAYÚSCULAS";

console.log(someString);

console.log(someString.length);

const capString = someString.toUpperCase();
const lowerString = someOtherString.toLowerCase();
const splittedString = someString.split("");

console.log(capString);
console.log(lowerString);
console.log(splittedString);

const phrase = "La mejor forma de predecir el futuro es creándolo";

/*
 se requiere:
    1.- Saber cuántos caracteres tiene la frase
    2.- Saber cuántas letras tiene la frase
    3.- Saber cuántas palabras tiene la frase
    4.- Obtener la misma frase pero en mayúsculas
    5.- Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
*/

const countWords = (text) => text.split(" ").length;

const replacePart = (text, toReplace, replacement) =>
  text.replaceAll(toReplace, replacement);

let countTestOne = countWords("el perro ladra");
console.log(countTestOne);

let regex = /[aáAÁ]/g;
let replacementTestOne = replacePart(phrase, "aá", "4");

console.log(replacementTestOne);

let names = [
  ["Israel", "Salinas Martínez"],
  ["Naomi", "López Puertos"],
];
/*Israel*/
let israName = names; //["Israel","Salinas Martínez"]

/*
 1.- Se requiere conocer la cantidad de letras de una palabra dentro de la frase. La palabra se debe seleccionar por su posicion.
  ( quiero saber la longitud de la segunda palabra)
  si preguntamos por una posicion que no existe en la frase, devolvemos un mensaje que indique el error
    2.- De la frase, necesitamos eliminar una palabra con base en su posicion, y recibir una nueva frase sin la palabra borrada
    3.- Se requiere eliminar todas las palabras cortas de la frase, considerando que una palabra corta es aquella que tiene 3 caracteres o menos, y debemos obtener la nueva frase sin palabras cortas
*/
