// Create a sequence of promises that simulates fetching data from server. chain the promises to log messages in a specific order.

function fetchdata(messages,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(messages);
            resolve();
        },delay);
    })
}

fetchdata("fetching user data ...",2000)
.then(()=> fetchdata("User data received",2000))
.then(()=>fetchdata("fetching user posts...",2000))
.then(()=>fetchdata("user posts received",2000))
.then(()=>fetchdata("fetching user comments",2000))
.then(()=>fetchdata("user comments received",1000))
.then(()=>console.log("All data fetched succesfully."));