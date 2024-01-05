let url = "https://api.api-ninjas.com/v1/quotes";
let options = {
  method: "GET",
  headers: {
    "X-Api-Key": "", //api-key here
    "Content-Type": "application/json",
  },
};

function getQuote() {
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      let quoteDiv = document.querySelector(".quoteText");
      quoteDiv.textContent = data[0].quote;

      let quoteAuthor = document.querySelector(".authorname");
      quoteAuthor.textContent = data[0].author;
    });
}

document.querySelector(".quoteButton").addEventListener("click", getQuote);

getQuote();
