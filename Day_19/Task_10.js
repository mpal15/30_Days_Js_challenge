// Write a regular expression to validate a URL. Log wheather the URL is valid

function validateURL(url) {
    const regex = /^(https?:\/\/)?([a-z0-9\-]+\.)+[a-z]{2,}(:\d{1,5})?(\/[^\s]*)?$/i;
    return regex.test(url);
}

// Test URLs
const url1 = "https://www.example.com";
const url2 = "http://example.com:8080/path/to/resource?query=string#fragment";
const url3 = "ftp://example.com"; // Invalid
const url4 = "invalid-url";

console.log("URL 1 is valid:", validateURL(url1)); // true
console.log("URL 2 is valid:", validateURL(url2)); // true
console.log("URL 3 is valid:", validateURL(url3)); // false
console.log("URL 4 is valid:", validateURL(url4)); // false