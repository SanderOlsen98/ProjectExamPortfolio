const productsContainer = document.querySelector("#featuredAPI");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("post");
const url =
  "https://sanderolsentestsites.one/wp-json/wc/store/products?per_page=100";

console.log(id);

async function fetchDetails() {
  try {
    const response = await fetch(url);
    var products = await response.json();

    for (post in products) {
      if (products[post].name == id) {
        var postDetails = products[post];
        console.log(postDetails);
      }
    }

    createHtml(postDetails);
  } catch (error) {
    console.log(error);
  }
}

fetchDetails();

function createHtml(postDetails) {
  productsContainer.innerHTML = `
    <div class="products" class="post">
        <h3>My Trip to ${postDetails.name}</h3>
        <p>${postDetails.description}</p>
        <img id="myImg" src="${postDetails.images[0].src}" alt="Picture">
        </div>
    </div>`;
}

// var modal = document.getElementById("myModal");

// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function () {
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// };

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function () {
//   modal.style.display = "none";
// };
