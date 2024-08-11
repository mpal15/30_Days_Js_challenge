// Write a regular expression to match all digits in a string . log the matches

const text = "The year is 2024, and I have 2 cats and 3 dogs.";
const regex = /\d/g;

const matches = text.match(regex);

if (matches) {
    console.log("Matches found:", matches);
} else {
    console.log("No matches found.");
}
