const baseUrl =
  "https://sanderolsentestsites.one/wp-json/wc/store/products?per_page=100";
const productsContainer = document.querySelector("#featuredAPI");

async function getPosts(baseUrl) {
  const response = await fetch(baseUrl);
  const products = await response.json();

  for (i = 0; i < 4; i++) {
    productsContainer.innerHTML += `
                <div class="products" class="post">
                    <a href="blogspecifics.html?post=${products[i].name}">
                    <h3>${products[i].name}</h3>
                    <p>${products[i].description}</p>
                    <img src="${products[i].images[0].src}" class="slider-image">
                    </a>
                </div>`;
  }
  console.log(products);
}

getPosts(baseUrl);
