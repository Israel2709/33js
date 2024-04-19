/*Recordar explicar emmet*/

const koders = ["Jair", "Daniel", "Maria", "Natalia", "Isra"];

/*Para crear elementos, tenemos el método document.createElement(tagname)
  recibe como argumento el tag del elemeto que queremos crear, y devuelve un elemento de DOM
*/

let paragraph = document.createElement("p");
console.log(paragraph);

/*Para crear texto, tenemos el método document.createTextNode(text)
  recibe como argumento un string, o una expresión de javascript que devuelva el texto que queremos crear, y devuelve un nodo de texto*/
let koderName = document.createTextNode("Gloriela");
console.log(koderName);

let koderLastname = document.createTextNode("Suárez");

let checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");

/*Para insertar un elemento dentro de otro elemento, 
tenemos el método parentElement.append(childElement)
append es un método de cualquier elemento de DOM, recibe como argumento el o los elementos que queremos insertar*/

paragraph.append(koderName, koderLastname, checkbox);

console.log(paragraph);

//let koderCard = document.getElementById("koder-card");

//koderCard.append(paragraph);

const createCard = (title) => {
  let cardBody = document.createElement("div");
  cardBody.classList.add("card", "mb-3");
  /*classlist es la lista de clases del elemento, y el método add() permite agregar una clase adicional*/

  let contentElement = document.createElement("div");
  contentElement.classList.add("card-body");

  let cardTitle = document.createElement("h3");
  let cardTitleText = document.createTextNode(title);
  cardTitle.append(cardTitleText);

  let cardParagraph = document.createElement("p");
  let cardParagraphText = document.createTextNode("Card text");
  cardParagraph.append(cardParagraphText);

  let cardButton = document.createElement("button");
  let cardButtonText = document.createTextNode("Click me!");
  cardButton.classList.add("btn", "btn-dark");
  cardButton.append(cardButtonText);

  contentElement.append(cardTitle, cardParagraph, cardButton);
  cardBody.append(contentElement);

  return cardBody;
};

let cardWrapper = document.getElementById("card-wrapper");

koders.forEach((koder) => {
  let newCard = createCard(koder);
  cardWrapper.append(newCard);
});
