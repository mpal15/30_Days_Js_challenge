//  Write a regular expression to capture the username and domain from a email addess.log the capture

const email = "username@example.com";
const regex = /([^@]+)@([^\s]+)/;

const matches = email.match(regex);

if (matches) {
    const username = matches[1]; // First capturing group
    const domain = matches[2];    // Second capturing group

    console.log("Username:", username);
    console.log("Domain:", domain);
} else {
    console.log("No matches found.");
}