//  Write a function that generates unique Ids. Use a closure to keep track of the last generated ID and increment it with each call

function generatesID(){
    let ID = 123;
    return{
        increment:function(){
            ID++;
        },
        getId:function(){
            return `last ID : ${ID}`;
        }
    }
}

const myID = generatesID();
myID.increment();
myID.increment();

console.log(` my ${myID.getId()}`);