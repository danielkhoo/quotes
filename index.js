var quotes = [];
fetch(`${window.location.href}/quotes.json`)
  .then((response) => response.json())
  .then((data) => {
    quotes = data.quotes;
    var quote = document.getElementById('quote');
    quote.innerText = quotes[0];
  });

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function next() {
  var quote = document.getElementById('quote');
  var newquote = getRandomQuote(quotes);

  while (quote.innerText === newquote) {
    var newquote = getRandomQuote(quotes);
  }
  quote.innerText = newquote;
}
