fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
  document.querySelector(".purchaseBox .brands").textContent = product.brandname;
  document.querySelector(".purchaseBox .articletype").textContent = product.articletype;
  document.querySelector(".productname").textContent = product.productdisplayname;
  document.querySelector(".productcolor").textContent = product.basecolour;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
