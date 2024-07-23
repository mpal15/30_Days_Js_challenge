// Write an async function that waits for a promises to resolve and then logs the resolved value.

 async function fetchandlogdata(){
    const userdata = await fetchdata("fetching user data...",2000);
    console.log("user",userdata);
 }


 function fetchdata(message,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const data = `data for "${message}"`;
     console.log(message);
    resolve(data);
    },delay);
  });
 }

 fetchandlogdata();