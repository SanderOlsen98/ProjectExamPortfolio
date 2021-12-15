const baseUrl =
  "http://sanderolsentestsites.one/wp-json/wp/v2/posts?_embed&per_page=100";
const postContainer = document.querySelector("#specifics");

function hideClass(i) {
  if (i > 7) {
    return "hideDiv ";
  } else {
    return "";
  }
}

function viewMore() {
  const divs = document.querySelectorAll(".hideDiv");
  for (const div in divs) {
    divs[div].classList.replace("hideDiv", "showDiv");
  }
}

function viewLess() {
  const divs = document.querySelectorAll(".showDiv");
  for (const div in divs) {
    divs[div].classList.replace("showDiv", "hideDiv");
  }
}

function showButtonHandler() {
  document.getElementById("change").innerHTML = "View Less";
  if (document.querySelectorAll(".hideDiv").length > 0) {
    viewMore();
  } else {
    document.getElementById("change").innerHTML = "View More";
    viewLess();
  }
}

async function getPosts(baseUrl) {
  const response = await fetch(baseUrl);
  const post = await response.json();

  let i = 0;

  post.forEach(function (post) {
    postContainer.innerHTML += `
                <div class="${hideClass(i)}products" class="post">
                <a href="blogspecifics.html?post=${post.title.rendered}">
                <h3>${post.title.rendered}</h3>
                <p>${post.content.rendered}</p>
                <img src="${post._embedded["wp:featuredmedia"][0].source_url}">
                </a>
            </div>`;
    i++;
  });
}

getPosts(baseUrl);
