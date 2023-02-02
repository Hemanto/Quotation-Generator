const quotationContainer = document.getElementById("quotationContainer");
const quotationText = document.getElementById("quotationText");

const btnTwitter = document.getElementById("btnTwitter");
const newQutBtn = document.getElementById("newQutBtn");

const quotAuthor = document.getElementById("quoteAuthor");
console.log(quotAuthor);

async function getQuotes() {
  const proxy = "https://www.sitelike.org/similar/cors-anywhere.herokuapp.com/";
  const api =
    "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    quotAuthor.innerText = data.quoteAuthor;
    quotationText.innerText = data.quoteText;
  } catch (error) {
    getQuotes();
  }
}

function tweetQuote() {
  console.log("clcik");
  const quote = quotationText.innerText;
  const author = quotAuthor.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
}
newQutBtn.addEventListener("click", getQuotes);
btnTwitter.addEventListener("click", tweetQuote);
getQuotes();
