// Write a higher order function to take function and n number thern call the function n times  


function callback(){
    console.log("my name is callback");
}

function higherorder(func, num){
     for(let i=1;i<=num;i++){
        func();
     }
}
higherorder(callback,5);