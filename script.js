const apiKey = "eidpPCBXRmPUnJKyOVp1CqAN0iWTJMW3";

const img = document.querySelector("img");
const searchForm = document.querySelector("form");
const searchInput = document.querySelector(".search-input");
const refreshBtn = document.querySelector(".refresh-btn");

let prevQuery;

function loadGif (query) {
  img.src = "./img/loader.svg";

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${query}`, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    if (response.data.length === 0) {
      img.src = "./img/not-found.jpg";
    } else {
      img.src = response.data.images.original.url;
    }
  })
  .catch(function(error) {
    img.src = "./img/error.jpg";
    console.log(error);
  })
  ;
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  loadGif(searchInput.value);
  prevQuery = searchInput.value;

  searchInput.value = "";
});

refreshBtn.addEventListener("click", (e) => {
  loadGif(prevQuery);
});

loadGif("cats");
prevQuery = "cats";