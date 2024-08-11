//  Write a script to save an object to localStorage by converting it to a JSON string, Retrive and parse the object, then log it;


const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');
// Step 1: Define an object to store
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer"
};

// Step 2: Convert the object to a JSON string and save it to localStorage
const key = "personData";
localStorage.setItem(key, JSON.stringify(person));

// Step 3: Retrieve the JSON string from localStorage
const retrievedData = localStorage.getItem(key);

// Step 4: Parse the JSON string back to an object
const retrievedObject = JSON.parse(retrievedData);

// Step 5: Log the retrieved object
console.log("Retrieved object from localStorage:", retrievedObject);