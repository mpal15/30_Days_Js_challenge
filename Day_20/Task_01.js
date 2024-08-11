// Write a script to save a string value to localStorage and retrieve it. log the retrieved value.

const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');
// Step 1: Save a string value to localStorage
const key = "myStringKey";
const valueToStore = "Hello, World!";
localStorage.setItem(key, valueToStore);

// Step 2: Retrieve the string value from localStorage
const retrievedValue = localStorage.getItem(key);

// Step 3: Log the retrieved value
console.log("Retrieved value from localStorage:", retrievedValue);