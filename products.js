window.addEventListener("DOMContentLoaded", init);

const URLParams = new URLSearchParams(window.location.search);
const id = URLParams.get("id");

function init() {
  fetch("https://kea-alt-del.dk/t7/api/products/" + id)
    .then((response) => response.json())
    .then((data) => showProduct(data));
}

function showProduct(product) {
  //console.log(product);
  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
  document.querySelector(".purchaseBox .brands").textContent = product.brandname;
  document.querySelector(".purchaseBox .articletype").textContent = product.articletype;
  document.querySelector(".info .productname").textContent = product.productdisplayname;
  document.querySelector(".info .productcolor").textContent = product.basecolour;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
