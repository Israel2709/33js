//let products = [];

let savedProducts = JSON.parse(localStorage.getItem("shoppingCart"));

let products = savedProducts ? savedProducts : [];

let cartAlert = document.getElementById("cart-alert");

savedProducts
  ? (cartAlert.style.display = "block")
  : (cartAlert.style.display = "none");

document
  .getElementById("guardar-producto")
  .addEventListener("click", (event) => {
    event.preventDefault();
    let productName = document.getElementById("product-name").value;
    products = [...products, productName];
    printProducts(products);

    localStorage.setItem("shoppingCart", JSON.stringify({ products }));
  });

const printProducts = (productsArray) => {
  let list = document.getElementById("products-list");
  list.innerHTML = "";

  productsArray.forEach((product) => {
    let currentContent = list.innerHTML;
    list.innerHTML = currentContent + `<li>${product}</li>`;
  });
};

printProducts(products);
