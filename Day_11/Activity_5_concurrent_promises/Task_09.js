// Use  Promise.all to wait for multiple promises to resolve and then log all their values.

async function fetchMultipleData(urls){
    try {
        const fetchPromises = urls.map(url=>fetch(url));
        const responses = await Promise.all(fetchPromises);

        const dataPromises = responses.map(response=>{
            if(!response.ok){
                throw new Error(`HTTP error! status:${response.status}`)
            }
            return response.json();
        });
        const data = await Promise.all(dataPromises);
        console.log(data);
    } catch (error) {
        console.log('fetch error',error);
    }
}

const urls = [
    'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
    'https://pokeapi.co/api/v2/pokemon/ditto',
]

fetchMultipleData(urls);