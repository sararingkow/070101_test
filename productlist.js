window.addEventListener("DOMContentLoaded", init);

const URLParams = new URLSearchParams(window.location.search);
const category = URLParams.get("category");

function init() {
  fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
    .then((res) => res.json())
    .then(showProducts);
}

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".read-more").href = `products.html?id=${product.id}`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = "DKK " + product.price + ",-";
  copy.querySelector(".articletype").textContent = product.articletype;
  copy.querySelector(".productname").textContent = product.brandname;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  document.querySelector("main").appendChild(copy);
}
