// Create a promises that rejects with an error message after a 2-second timeout and handle the error using .catch()

const myPromises = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject(new Error("something went wrong"));
    }, 2000);
})

myPromises.then(result =>{
    console.log(result);
}).catch(error =>{
    console.log("Error caught:",error.message);
})