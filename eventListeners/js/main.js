/*Quien va a escuchar el evento*/

let testButton = document.getElementById("test-button");

testButton.addEventListener("click", () => {
  alert("hola koders!");
});

let titleInput = document.getElementById("title-input");

/*
keydown
keypress
keyup
*/
titleInput.addEventListener("keyup", (event) => {
  let text = event.target.value;
  document.getElementById("title").innerText = text;
});
