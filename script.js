const apiKey = "eidpPCBXRmPUnJKyOVp1CqAN0iWTJMW3";

const img = document.querySelector("img");

fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=cats`, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response.data.images.original.url)
  });