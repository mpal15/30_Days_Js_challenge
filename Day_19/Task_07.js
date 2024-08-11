// Write a regular expression to match a word only if it is at the beginning of a string.log the matches

const text = "JavaScript is a popular language. Python is another language. I love coding.";
const regex = /^\w+/g;

const matches = text.match(regex);

if (matches) {
    console.log("Matches found:", matches);
} else {
    console.log("No matches found.");
}