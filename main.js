async function getQuotes(params) {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const api =
    "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxy + api);
    const data = await response.json;
    console.log(data);
  } catch (error) {
    console.log("whoo", error);
  }
}

getQuotes();
