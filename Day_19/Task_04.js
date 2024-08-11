// Write a regular expression to macth all sequence of one or more digits in a string.log the matches


const text = "In 2024, I have 2 cats, 15 fish, and 3 dogs.";
const regex = /\d+/g;

const matches = text.match(regex);

if (matches) {
    console.log("Matches found:", matches);
} else {
    console.log("No matches found.");
}