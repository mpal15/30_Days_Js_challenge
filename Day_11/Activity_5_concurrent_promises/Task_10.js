// Use Promise.race to log the value of the first promise that resolves among multiple promises

async function fetchfirstData(urls){
    try {
        const fetchPromises = urls.map(url=>fetch(url));
        const firstresponse = await Promise.race(fetchPromises);
        if(!firstresponse.ok){
            throw new Error(`HTTP error! Status: ${firstresponse.status}`);
        }
        const data = await firstresponse.json();
    } catch (error) {
        console.log('erorr', error);
    }
}

const urls = [];


fetchfirstData(urls);