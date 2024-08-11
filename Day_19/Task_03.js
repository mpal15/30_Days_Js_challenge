// Write a regular expression to match all words in a string that start with a capital letter. log the matches

const text = "The quick Brown Fox jumps over the Lazy Dog. JavaScript is a popular language.";
const regex = /\b[A-Z]\w*/g;

const matches = text.match(regex);

if (matches) {
    console.log("Matches found:", matches);
} else {
    console.log("No matches found.");
}