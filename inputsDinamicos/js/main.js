let productsArray = [
  {
    name: "Taco de pastor",
  },
];

const printProductInputs = (productsArray) => {
  let form = document.getElementById("products-form");
  form.innerHTML = "";
  productsArray.forEach((product, index) => {
    let currentInputs = form.innerHTML;
    form.innerHTML =
      currentInputs +
      `
        <div class="form-group">
            <label for="">Qué producto quieres?</label>
            <input type="text" class="form-control product-input" data-product-index=${index} value="${product.name}"/>
        </div>`;
  });
  let inputs = document.querySelectorAll(".product-input");
  inputs.forEach((input) => {
    input.addEventListener("keyup", (event) => {
      let index = event.target.dataset.productIndex;
      let value = event.target.value;
      console.log(`${index}:${value}`);
      console.log(productsArray);
      productsArray[index] = { name: value };
    });
  });
};

printProductInputs(productsArray);

document.getElementById("add-product").addEventListener("click", () => {
  productsArray.push({ name: "" });
  printProductInputs(productsArray);
  console.log(productsArray);
});
