const factElement = document.getElementById('fact');
const newFactBtn = document.getElementById('newFactBtn');
const copyBtn = document.getElementById('copyBtn');
const shareBtn = document.getElementById('shareBtn');

function fetchFact() {
    factElement.textContent = 'Loading fact...';

    fetch('https://dog-api.kinduff.com/api/facts') 
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                factElement.textContent = data.facts[0];
            } else {
                throw new Error('No fact found');
            }
        })
        .catch(error => {
            console.error('Error fetching fact:', error);
            factElement.textContent = 'Failed to load fact. Please try again.';
        });
}

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(factElement.textContent).then(() => {
        alert('Fact copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
});

shareBtn.addEventListener('click', () => {
    const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(factElement.textContent)}`;
    window.open(tweetURL, '_blank');
});

newFactBtn.addEventListener('click', fetchFact);

fetchFact();
