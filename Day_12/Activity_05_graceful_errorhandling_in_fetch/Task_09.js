// Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. log an appropriate error message

async function fetchApi(url){
    try {
        const data = await fetch(url);
        console.log(data);
    } catch (error) {
        console.error("error is caught..",error);
    }
}
fetchApi('https://pokeapi.co/api/v2/pokemon/ditto');