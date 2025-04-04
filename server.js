const express = require('express');
const app = express();

const { quotes, saveQuotes } = require('./data');// this is an array with prepopulated quotes about technology
const { getRandomElement } = require('./utils');//this takes an array and returns a random element from the array 

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
/** 
 * this line ensures that all files in the public directory like index.html,
 * styles.css and script.js are served statically . this means that if you navigate to 
 * http://localhost:4001 your index.html will be served automatically 
 * */ 

// Parse incoming JSON
app.use(express.json());

app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    const quoteObject = {quote: randomQuote};
    res.send(quoteObject);
});

app.get('/api/quotes', (req, res, next) => {
    const personName  = req.query.person;

    if(!personName){
        // in this case there is no query params 
        const quotesObject = {quotes};
        res.send(quotesObject);
        }else{
        // in this case we do have a name 
        returnArr = quotes.filter(quote => quote.person === personName);
        res.send({quotes: returnArr});
    }
});

app.post('/api/quotes', (req, res, next) => {
    const { quote , person } = req.query;
    console.log(`${quote} ${person}`);
    // if both quote and person are present
    // then we push the quote to the quotes array
    // and save the quotes array to the file
    // if either quote or person is not present
    // then we return a 400 error
    // and send a message to the client
    if(quote && person){
       quotes.push({quote, person});
       saveQuotes(quotes);
       res.send({quote:{quote, person}});
    }else{
        res.status(400).send(`Failed requires both quote and person fields`);
    }

})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

