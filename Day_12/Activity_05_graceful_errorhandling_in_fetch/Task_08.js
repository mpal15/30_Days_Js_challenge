// Use the fetch API to request data from an invalid URL and handle the error using .catch(). log an appropriate error message to the console.

const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
fetch(url)
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error =>console.error("caught error",error))