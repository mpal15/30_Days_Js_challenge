// Use the fetch API to get data from a public API and log the response data to the console using promises

fetch('https://api.exaample.com/data')
.then(response=>response.json())
.then(data =>{
    console.log(data);
}).catch(error=>{
    console.error('error:',error);
})