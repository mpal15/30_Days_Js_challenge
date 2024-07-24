// Use the fetch API to get data from a public API and log the response data to the console using async/wait

async function fetchdata(url){
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchdata('https://pokeapi.co/api/v2/pokemon/ditto');