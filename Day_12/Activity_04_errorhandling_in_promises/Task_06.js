// create a promises that randomly resolve or reject ,Use .catch() to handle the rejection and log an appropriate message to the console.


function randomPromise(){
    return new Promise((resolve,reject)=>{
        const randomNumber = Math.random();
        if(randomNumber <0.5){
            resolve("Promises resolve succesfully");
        }else{
            reject("Promises rejected with an error")
        }
    });
}

randomPromise()
.then(result =>{
    console.log(result);
}).catch(error=>{
    console.error("Caught an error");
})