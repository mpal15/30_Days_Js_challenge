// Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit,and one special character).log wheather the password is valid.
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

const password1 = "MyPassword123!";
const password2 = "weakpassword";

console.log("Password 1 is valid:", validatePassword(password1)); // true
console.log("Password 2 is valid:", validatePassword(password2)); // false