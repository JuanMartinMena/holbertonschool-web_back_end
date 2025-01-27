// Import the readline module to handle input and output
const readline = require('readline');

// Create an interface for reading input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display the initial message
console.log("Welcome to Holberton School, what is your name?");

// Listen for user input
rl.on('line', (input) => {
    console.log(`Your name is: ${input.trim()}`); // Ensure consistent line endings
    rl.close(); // Close the readline interface
});

// Handle the close event to display the closing message
rl.on('close', () => {
    console.log("This important software is now closing");
});
