const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const QUOTES_FILE = path.join(__dirname, 'quotes.json');

// Load existing quotes
let quotes = JSON.parse(fs.readFileSync(QUOTES_FILE, 'utf8'));

// Add a unique ID to each quote
quotes = quotes.map(quote => ({
  id: uuidv4(),
  ...quote
}));

// Save the updated quotes back to the file
fs.writeFileSync(QUOTES_FILE, JSON.stringify(quotes, null, 2), 'utf8');

console.log('✅ IDs added to all quotes.');
