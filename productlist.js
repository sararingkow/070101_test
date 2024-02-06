fetch("https://kea-alt-del.dk/t7/api/products?limit=10")
  .then((response) => response.json())
  .then(showProductLists);

function showProductLists(products) {
  products.forEach(showProductList);
}

function showProductList(product) {
  console.log(product);

  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".articletype").textContent = product.articletype;
  copy.querySelector(".productname").textContent = product.brandname;
  copy.querySelector(".price").textContent = "DKK " + product.price + ",-";
  copy.querySelector(".discount_price").classList.add("hide");

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector(".discount_percentage").classList.remove("hide");
    copy.querySelector(".discount_percentage").textContent = product.discount + "%";
    copy.querySelector(".discount_price").classList.remove("hide");
  }

  document.querySelector("main").appendChild(copy);
}

/*
 <main>
        <h2>Miscellaneous</h2>
        <template id="smallProductTemplate">
            <article class="smallProduct">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/1525.webp" alt="white sweatshirt">
                <h3>White plain sweatshirt</h3>
                <p class="subtle"><span class="articletype">Shirts</span> | <span class="productname">Other
                        Brands</span></p>
                <p class="price"><span>Prev.</span> DKK 1595,-</p>
                <div class="discounted">
                    <p>Now DKK 1560,-</p>
                    <p>-34%</p>
                </div>
                <a class="read-more" href="product.html">Read More</a>
            </article>
        </template>
    </main>
    */
