class Account {
    constructor(accountName, balance, key) {
        this.accountName = accountName;
        this.balance = balance;
        this.key = key;
    }

    deposit(valueIn) {
        this.balance += Number(valueIn)
    }

    withdraw(valueOut) {
        this.balance -= Number(valueOut)
    }

    showBalance() {
        return `${this.accountName}: $${this.balance}`;
    }

    showName() {
        return this.accountName;
    }

}

class AccountController {
    constructor() {
        this.accArray = [];
        this.counter = 0;
    }

    newKey() {
        return this.counter++;
    }

    getAccountFromKey(key) {
        return this.accArray[key];
    }

    addAccount(accountName, balance) {
        let key = this.newKey();
        this.accArray.push(new Account(accountName, balance, key));
    }

    checkName(accountName) {
        for (let i = 0; i < this.accArray.length; i++) {
            if (accountName === this.accArray[i].accountName) {
                return true;
            }
        }
    }

    removeAccount(accountName) {
        for (let i = 0; i < this.accArray.length; i++) {
            if (accountName === this.accArray[i].accountName) {
                this.accArray.splice(i, 1)
            }
        }
    }

    renameAccount(accountName, newName) {
        for (let i = 0; i < this.accArray.length; i++) {
            if (accountName === this.accArray[i].accountName) {
                this.accArray[i].accountName = newName;
            }
        }
    }

    totalBalance() {
        let total = 0;
        for (let i = 0; i < this.accArray.length; i++) {
            total += Number(this.accArray[i].balance);
        }
        return `$${total}`;
    }

    highestAccount() {
        let highestBal = 0;
        let highestName;
        for (let i = 0; i < this.accArray.length; i++) {
            if (this.accArray[i].balance > highestBal) {
                let currentName = this.accArray[i].accountName;
                highestBal = Number(this.accArray[i].balance);
                highestName = currentName;
            }
        }
        return `${highestName} - $${highestBal}`
    }

    lowestAccount() {
        let lowest = Number.POSITIVE_INFINITY;
        let lowestName;
        for (let i = this.accArray.length - 1; i >= 0; i--) {
            let currentName = this.accArray[i].accountName;
            let currentBal = Number(this.accArray[i].balance);
            if (currentBal < lowest) {
                lowestName = currentName;
                lowest = currentBal;
            }
        }
        return `${lowestName} - $${lowest}`
    }

    showAll() {
        return this.accArray.map((f) => ` ${f.accountName} - $${f.balance} `);
    }
}

export default { Account, AccountController }

