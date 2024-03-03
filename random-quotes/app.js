let btn = document.getElementById('btn-change-quote')
let quote = document.getElementById('quote')
let author = document.getElementById('author')

function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function changeQuote() {
  let randomIndex = generateRandomInt(0, quotes.length)
  quote.innerText = quotes[randomIndex].quote
  author.innerText = quotes[randomIndex].author
}

changeQuote()
btn.addEventListener('click', changeQuote)