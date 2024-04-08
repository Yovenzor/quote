document.addEventListener('DOMContentLoaded', function() {
      const quoteElement = document.getElementById('quote');
      const newQuoteButton = document.getElementById('new-quote-btn');  

      function fetchQuote() {
      fetch('https://api.quotable.io/random')
            .then(response => {
                  if (!response.ok) {
                        throw new Error('Failed to fetch the quote.');
                  }
                  return response.json();
            })
            .then(data => {
                  displayQuote(data);
            })
            .catch(error => {
                  quoteElement.textContent = error.message;
            });
      }

      function displayQuote(quoteData) {
            quoteElement.innerHTML = `
                  <p>${quoteData.content}</p>
                  <p>&sim; ${quoteData.author}</p>
            `;
      }

      fetchQuote();  
      newQuoteButton.addEventListener('click', fetchQuote);
});
