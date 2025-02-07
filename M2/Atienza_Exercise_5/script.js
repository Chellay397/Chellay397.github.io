const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');
const shareBtn = document.getElementById('shareBtn');

// Function to fetch a random quote
function fetchQuote() {
    quoteElement.textContent = 'Loading quote...';
    authorElement.textContent = '';

    fetch('https://dummyjson.com/quotes')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            const randomQuote = data.quotes[randomIndex];

            quoteElement.textContent = `"${randomQuote.quote}"`;
            authorElement.textContent = `- ${randomQuote.author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to load quote. Please try again.';
            authorElement.textContent = '';
        });
}

// Copy quote to clipboard
copyBtn.addEventListener('click', () => {
    const textToCopy = `${quoteElement.textContent} ${authorElement.textContent}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Quote copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
});

// Share quote (Twitter)
shareBtn.addEventListener('click', () => {
    const quoteText = `${quoteElement.textContent} ${authorElement.textContent}`;
    const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}`;
    window.open(tweetURL, '_blank');
});

// Fetch a quote when the button is clicked
newQuoteBtn.addEventListener('click', fetchQuote);

// Fetch a quote when the page loads
fetchQuote();
