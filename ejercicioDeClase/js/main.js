/*let titleInput = document.getElementById("title");

let titleValue = titleInput.value;

console.log(titleValue);*/

/*esta es la NodeList con todos los inputs*/
let inputs = document.querySelectorAll("#post-form input");

/*así se ve inputs:*/

/*
[
    "0": <input 1>,
    "1": <input 2>,
    "2": <input 3>
]

*/

/*https://javascript33g-default-rtdb.firebaseio.com/blogEntries*/

const saveEntry = async (entryObject) => {
  let response = await fetch(
    `https://javascript33g-default-rtdb.firebaseio.com/blogEntries/.json`,
    {
      /*Qué método voy a usar?*/
      method: "POST",
      /*Qué es lo que voy a enviar*/
      body: JSON.stringify(entryObject),
    }
  );

  /*Aquí desempaquetamos la respuesta para poder usarla*/
  let data = await response.json();

  console.log(data);
};

let saveEntryButton = document.getElementById("save-entry-button");

saveEntryButton.addEventListener("click", () => {
  let blogEntry = {};

  /*
        {
            title:"Reseña de el diván del diablo",
            content:"Este es un libro con temas de suspenso, psicología...",
            autor:"Israel Salinas Martínez"
        }
    */

  inputs.forEach((input) => {
    blogEntry[input.name] = input.value;
  });

  console.log(blogEntry);
  saveEntry(blogEntry);
});
