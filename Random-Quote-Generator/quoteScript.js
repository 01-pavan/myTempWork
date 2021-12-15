// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const quoteText = document.querySelector('.quote'),
  quoteBtn = document.querySelector('button'),
  authorName = document.querySelector('.name');
//function for random quote
function randomQuote() {
  //   console.log('clicked');
  fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(result => {
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
    });
}
quoteBtn.addEventListener('click', randomQuote);
