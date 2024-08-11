//  Write a regular expression to match a word only if it is at the end of a string .log the matches

const text = "I love programming in JavaScript. Python is great too";
const regex = /\w+$/;

const matches = text.match(regex);

if (matches) {
    console.log("Match found:", matches[0]);
} else {
    console.log("No matches found.");
}