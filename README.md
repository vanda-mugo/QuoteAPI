# QuoteAPI
Quote API - Vanilla javascript frontend with Express.js server for changing a data array made of of quote objects with the quote and person being included in each quote object.

# Express Quote API

## Overview

This is a simple **Express.js** web application that serves an API for managing and displaying quotes. It includes the ability to:

- Fetch all quotes.
- Fetch a random quote.
- Fetch quotes by a specific author.
- Add new quotes to the API.

The frontend is built using **vanilla JavaScript**, HTML, and CSS, with a minimalistic user interface that allows users to interact with the quotes API.

## Features

- **Display Quotes**: Fetch and display all quotes, a random quote, or quotes by a specific author.
- **Add Quotes**: Add new quotes with the person's name.
- **RESTful API**: Use GET and POST methods to interact with quotes data.

## Technologies Used

- **Backend**: Express.js (Node.js framework)
- **Frontend**: Vanilla JavaScript, HTML, CSS
- **API Routes**:
  - `GET /api/quotes/random`: Fetch a random quote.
  - `GET /api/quotes`: Fetch all quotes.
  - `GET /api/quotes?person=<author>`: Fetch quotes by a specific author.
  - `POST /api/quotes`: Add a new quote.

## Folder Structure

```bash 
/express-quote-api ├── /public # Frontend files (HTML, CSS, JS) │ ├── /styles.css # Styles for the frontend │ ├── /add-quote.html # Page for adding new quotes │ ├── /index.html # Home page for displaying quotes │ ├── /script.js # JavaScript to interact with the API │ ├── /add-quote.js # JavaScript to add new quotes │ └── /favicon.ico # Favicon ├── /data # Contains the pre-populated quotes data │ └── quotes.js # Array of quotes ├── /utils # Utility functions │ └── utils.js # Contains the getRandomElement function ├── server.js # Entry point for the Express server └── README.md # Project documentation
```



## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/express-quote-api.git
cd express-quote-api
```

### 2. Install the dependencies:
```bash 
npm install
```

### 3. Start the server:

```bash
node server.js
```

The server will start on port 4001 by default. You can access the application at:
```bash
http://localhost:4001
```

## Usage

### Homepage (index.html)

Fetch Random Quote: Click on the "Fetch a Random Quote" button to get a random quote from the API.

Fetch All Quotes: Click on the "Fetch all Quotes" button to view all the quotes available in the system.

Fetch by Author: Type an author's name in the input box and click "Fetch by Author" to see all quotes attributed to that person.

### Add a Quote Page(add-quote.html)

Submit a Quote: Fill in the "Quote text" and "Person" fields, then click the "Submit Your Quote" button to add a new quote. The new quote will be added to the system.


## Example of API Endpoints

### 1. GET /api/quotes/random

This endpoint returns a random quote from the database.
```bash 
GET http://localhost:4001/api/quotes/random
```

### 2. GET /api/quotes

This endpoint returns all quotes from the database.
```bash 
GET http://localhost:4001/api/quotes
```

### 3. GET /api/quotes?person=<author_name>
This endpoint returns all quotes by the specified author.
```bash 
GET http://localhost:4001/api/quotes?person=Albert%20Einstein
```

### 4. POST /api/quotes
This endpoint allows adding a new quote by providing the quote text and the person's name as query parameters.

```bash
POST http://localhost:4001/api/quotes?quote=Your%20quote%20here&person=Author%20name
```
Example response:

```bash
{
  "quote": {
    "quote": "Your quote here",
    "person": "Author name"
  }
}
```
## Frontend Details

    The frontend is built using vanilla JavaScript, HTML, and CSS.

    The frontend interacts with the backend API using the fetch API to send requests and receive data.

    The app is responsive, with simple navigation and UI elements for interacting with the quotes.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request.
