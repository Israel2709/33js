/*.map()*/
/*
Map es un método iterativo de array
Recorre cada elemento del array, y le aplica un callback, luego, crea un nuevo array con el resultado (valor de retorno) del callback, y devuelve ese nuevo array
*El array resultante SIEMPRE tiene la misma cantidad de elementos que el array original
*/

let numbers = [2, 4, 6];

/*
función sin sintetizar

const getSquareNumbers = (numbersArray) => {
  let result = numbers.map((item, index, arr) => {
  let squareNumber = item * item;
  console.log(squareNumber);
  return squareNumber;
});
  return result;
};*/

const getSquareNumbers = (numbersArray) =>
  numbersArray.map((number) => number * number);

let testSquaresForEach = getSquareNumbers(numbers);
console.log(testSquaresForEach);
