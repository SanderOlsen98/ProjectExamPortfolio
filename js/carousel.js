var url =
  "https://sanderolsentestsites.one/wp-json/wc/store/products?per_page=100";
var postsContainer = document.querySelector("#latest");

async function getPosts(url) {
  var response = await fetch(url);
  var posts = await response.json();

  for (i = 3; i < 8; i++) {
    postsContainer.innerHTML += `
                <div class="post">
                    <a href="blogspecifics.html?post=${posts[i].name}">
                    <img src="${posts[i].images[0].src}" class="slider-image">
                    <h4>${posts[i].name}</h4>
                    </a>
                </div>`;
  }
  console.log(posts);
}

getPosts(url);
