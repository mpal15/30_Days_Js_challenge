// Write a program to print a pattern using nested loop

let number = 5;
let pattern = "";
for(let i=0;i<number;i++){
    for(let j=0;j<i+1;j++){
        pattern+="*";
    }
    pattern+="\n";
}

console.log(pattern);