const someString = "The evil that men do";

const countVowels = (phrase /*este es el phrase que estoy evaluando*/) => {
  const vowelsList = /[AEIOUaeiouÁÉÍÓÚáéíóúÜü]/g;
  const phraseLength = phrase.length; /*longitud del texto que estoy evaluando*/
  let total = 0;

  //for( inicio, condición para terminar, incremento)

  for (let i = 0; i < phraseLength; i++) {
    let isVowel = vowelsList.test(phrase.charAt(i));
    if (isVowel) {
      total++;
    }
  }
  return total;
};

let test1 = countVowels(someString);
let test2 = countVowels("Amor de mis amores");

console.log(test1);
console.log(test2);
