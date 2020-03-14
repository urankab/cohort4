export default class Account {
    constructor(accountName, balance) {
        this.accountName = accountName;
        this.balance = balance;
    }

    deposit(valueIn) {
        this.balance += valueIn;
    }

    withdraw(valueOut) {
        this.balance -= valueOut;
    }

    showBalance() {
        return this.balance;
    }
}