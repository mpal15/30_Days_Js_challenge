// Create an instance of the Account class and test the deposit and withdraw methods,logging the balance after each operation

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

// Example usage
const myAccount = new Account(100); // Initial balance of $100
console.log(`Initial balance: $${myAccount.getBalance()}`);

// Depositing money
myAccount.deposit(50); // Deposit $50

// Withdrawing money
myAccount.withdraw(30); // Withdraw $30

// Attempting to withdraw more than the balance
myAccount.withdraw(150); // Insufficient funds

// Checking final balance
console.log(`Final balance: $${myAccount.getBalance()}`);