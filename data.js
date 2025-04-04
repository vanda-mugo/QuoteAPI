const fs = require('fs'); // NOde.js file system module, which allows you to work with the file system on your computer
const path = require('path'); // Node.js path module, which provides utilities for working with file and directory paths
const QUOTES_FILE = path.join(__dirname, 'quotes.json'); // Path to the quotes.json file in the same directory as this script
// __dirname is a Node.js global variable that gives the directory name of the current module

const loadData = () => {
  // Check if the quotes.json file exists
  if (fs.existsSync(QUOTES_FILE)) {
    // If it exists, read and parse the JSON data from the file
    const data = fs.readFileSync(QUOTES_FILE, 'utf-8'); // Read the file synchronously and decode it as UTF-8
    // JSON.parse converts the JSON string into a JavaScript object
    // The data is expected to be an array of quotes
    // Each quote is an object with a 'quote' and 'person' property
    return JSON.parse(data);
  } else {
    // If it doesn't exist, return an empty array
    return [];
  }
};

/**
 * 
 * @param {*} data - The data to save to the quotes.json file
 * @returns {void}
 * This function saves the provided data to the quotes.json file.
 * It first converts the data to a JSON string using JSON.stringify.
 * Then, it writes the JSON string to the file using fs.writeFileSync.
 * The file is saved in the same directory as this script.
 */
const saveQuotes = (data) => {
  // Convert the data to a JSON string
  const jsonData = JSON.stringify(data, null, 2); // The second argument is for pretty-printing the JSON with 2 spaces of indentation
  // Write the JSON string to the quotes.json file
  fs.writeFileSync(QUOTES_FILE, jsonData, 'utf-8'); // Write the file synchronously and encode it as UTF-8
};

let quotes = loadData(); // Load the existing quotes from the file


module.exports = {
  quotes, // Export the loaded quotes
  saveQuotes, // Export the function to save quotes
};
