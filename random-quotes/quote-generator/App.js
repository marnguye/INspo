//quote
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author');
const newQuoteBtn = document.querySelector('.quote-button');
const category = 'inspirational';

//get quote
async function getQuote() {
    quoteText.textContent = 'Loading...';
    authorText.textContent = '';
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
            headers: { 'X-API-KEY': 'HIAInlpbX6Obdfj7lpGpPg==Jt3lLxaGUtiMDqQ7' }
        });
        const data = await response.json();
        if (data && data.length > 0) {
            quoteText.textContent = `"${data[0].quote}"`;
            authorText.textContent = `— ${data[0].author}`;
        } else {
            quoteText.textContent = 'No quotes found.';
            authorText.textContent = '';
        }
    } catch (error) {
        console.error('Failed to fetch quote', error);
        quoteText.textContent = 'Failed to fetch a quote.';
        authorText.textContent = '';
    }
}
//fetch new quote
newQuoteBtn.addEventListener('click', getQuote);

getQuote();
