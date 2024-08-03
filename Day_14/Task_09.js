//  Define a class Account with private field for balance and a method to deposit and withdraw money,Ensure that the balance can only be updated through these methods

class Account {
    // Private field for balance
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.#balance}.`);
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
            return;
        }
        if (amount > this.#balance) {
            console.log("Insufficient funds.");
            return;
        }
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.#balance}.`);
    }

    // Method to check balance
    getBalance() {
        return this.#balance;
    }
}
