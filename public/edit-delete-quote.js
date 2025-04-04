const deleteButton = document.getElementById('delete-quote');
const editButton = document.getElementById('edit-quote');
const quoteContainer = document.getElementById('edited-deleted-quote');


deleteButton.addEventListener('click', () => {
  const quoteId = document.getElementById('id').value;
  fetch(`/api/quotes/${quoteId}`, {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(({message}) => {
    const newQuote = document.createElement('div');
    newQuote.innerHTML = `
    <h3>Congrats, your quote was deleted!</h3>
    <div class="quote-text">${message}</div>
    <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
    `
    quoteContainer.appendChild(newQuote);
  });
}
);

editButton.addEventListener('click', () => {    
  const quoteId = document.getElementById('quote-id').value;
  const quote = document.getElementById('quote').value;
  const person = document.getElementById('person').value;
  fetch(`/api/quotes/${quoteId}?quote=${quote}&person=${person}`, {
    method: 'PUT',
  })
  .then(response => response.json())
  .then(({quote}) => {
    const newQuote = document.createElement('div');
    newQuote.innerHTML = `
    <h3>Congrats, your quote was edited!</h3>
    <div class="quote-text">${quote.id}</div>
    <div class="quote-text">${quote.quote}</div>
    <div class="attribution">- ${quote.person}</div>
    <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
    `
    quoteContainer.appendChild(newQuote);
  })
});