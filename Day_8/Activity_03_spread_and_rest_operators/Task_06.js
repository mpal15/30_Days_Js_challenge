//  Use the rest operator in a function to accept an arbitray number of arguments, sum them and return the result;

function number(...numbers){
   let total = numbers.reduce((acc,curr)=> acc+curr,0);
    

    return total;
}

const result = number(1,2,3,4,5);
 console.log(result);