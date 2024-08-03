// Add a setter method to the Person class to update the name propertis.Update the name using the stter and log the update fullname

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter for full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter for full name
    set fullName(newFullName) {
        const [firstName, lastName] = newFullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
        console.log(`Updated full name: ${this.fullName}`);
    }
}

// Example usage
const person = new Person("John", "Doe");
console.log(`Initial full name: ${person.fullName}`);

// Updating the name using the setter
person.fullName = "Jane Smith";