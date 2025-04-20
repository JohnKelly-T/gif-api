const apiKey = "eidpPCBXRmPUnJKyOVp1CqAN0iWTJMW3";

const img = document.querySelector("img");
const searchForm = document.querySelector("form");
const searchInput = document.querySelector(".search-input");
const refreshBtn = document.querySelector(".refresh-btn");

let prevQuery;

async function loadGif (query) {
  img.src = "./img/loader.svg";

  try {
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${query}`, {mode: 'cors'});
    const responseData = await response.json();

    if (responseData.data.length === 0) {
      img.src = "./img/not-found.jpg";
    } else {
      img.src = responseData.data.images.original.url;
    }
  } catch (error) {
    img.src = "./img/error.jpg";
    console.log(error);
  }
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