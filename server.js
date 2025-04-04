const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid'); // this is a library that generates unique ids
// this is a library that generates unique ids

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
        const id=  uuidv4();
       quotes.push({id ,quote, person});
       saveQuotes(quotes);
       res.send({quote:{id,quote, person}});
    }else{
        res.status(400).send(`Failed requires both quote and person fields`);
    }

});

app.put('/api/quotes/:id', (req, res, next) => {
    const { id } = req.params;
    const { quote, person } = req.query;

    const index = quotes.findIndex(quote => quote.id === id);
    if(index !== -1){
        quotes[index] = {quote, person};
        saveQuotes(quotes);
        res.send({quote:{quote, person}});
    }else{
        res.status(404).send(`Quote with id ${id} not found`);
    }
});


app.delete('/api/quotes/:id', (req, res, next) => {
    const { id } = req.params;
    const index = quotes.findIndex(quote => quote.id === id);
    if(index !== -1){
        quotes.splice(index, 1);
        saveQuotes(quotes);
        res.send({message:`Quote with id ${id} deleted`});
    }else{
        res.status(404).send(`Quote with id ${id} not found`);
    }
});
// this is the main entry point of the application
// it listens for incoming requests on the specified port
// and starts the server
// the server will listen for incoming requests on port 4001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

