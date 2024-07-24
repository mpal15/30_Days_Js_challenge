// write an async function that handles a rejected promises using try-catch and logs the error message

async function fetchandlogdata(){
    try {
        const userdata = await fetchdata("fetching user data",2000);
        console.log("User data",userdata);
    } catch (error) {
        console.log("something get wrong in code",error);
    }
}


function fetchdata(message,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           const data = `error is occured`;
           console.log(message);
           reject(data);
        },delay);
    })
}

fetchandlogdata();