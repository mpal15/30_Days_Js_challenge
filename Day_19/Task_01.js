// Write a regular expression to match a simple pattern(e.g.., match all occurrences of the word "javascript"in a string).log the matches.


const text = "JavaScript is a versatile language. I love javascript because JavaScript can be used for both front-end and back-end development. JAVASCRIPT is everywhere!";
const regex = /\bjavascript\b/gi;

const matches = text.match(regex);

if(matches){
    console.log("Matches found:",matches);  
}else{
    console.log("No matches found");   
}