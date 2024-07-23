// Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const myPromises = new Promise((resolve,reject)=>{
    setTimeout(() => {
        
       resolve("promises is resolve");
    }, 2000);
})

myPromises.then(result =>{
    console.log(result);
})