// Use try-catch within an async function to handle error from a promise that randomly resolvers or rejects, and log the error message.
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

async function HandleError(){
    try {
        const data = await randomPromise();
        console.log(data);
    } catch (error) {
        console.error("warning",error.message);
    }

}

HandleError();