// Write a regular expression to capture the area code,central office code, and line number from a US phone number formate(e.g,(123) 456-7890),log the captures.


const phoneNumber = "(123) 456-7890";
const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;

const matches = phoneNumber.match(regex);

if (matches) {
    const areaCode = matches[1];          // First capturing group
    const centralOfficeCode = matches[2]; // Second capturing group
    const lineNumber = matches[3];         // Third capturing group

    console.log("Area Code:", areaCode);
    console.log("Central Office Code:", centralOfficeCode);
    console.log("Line Number:", lineNumber);
} else {
    console.log("No matches found.");
}