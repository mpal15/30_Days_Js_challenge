// Write a function to count the occurrences of each character in a string. log the character counts;

function countCharacters(str){
    const charCount  = {};
    for(let char of str){
        if(charCount[char]){
            charCount[char]++;
        }else{
            charCount[char] = 1;
        }
    }

    for(let char in charCount){
        console.log(`${char}:${charCount[char]}`);
        
    }
}

// Example usage
const inputString = "Hello, World!";
countCharacters(inputString);