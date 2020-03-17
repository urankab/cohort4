class Account {
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
        return `Your balance is ${this.balance}`;
    }
}

// We need the ability to have multiple accounts for the same person
// We need the ability to add and remove accounts
// We need the ability to name our accounts things like: saves, car fund, checking...
// We need the ability to get the total of our accounts
// We need the ability to know our highest value account (well, I want that so you can practice with logic)
// We need the ability to know our lowest value account (same as above)

class AccountController {
    constructor() {
        this.accArray = []; //Create array for new accs
    }

    addAccount(accountName, balance) {
        let newAccount = new Account(accountName, balance); //New Account
        this.accArray.push(newAccount); //Push to array
    }

    removeAccount(accountName) {
        for (let i = 0; i < this.accArray.length; i++) {
            if (accountName = this.accArray[i].accountName) {
                this.accArray.splice(i, 1)
            }
        }
    }

    renameAccount(accountName, newName) {
        for (let i = 0; i < this.accArray.length; i++) {
            if (accountName == this.accArray[i].accountName) {
                this.accArray[i].accountName = newName;
            }
        }
    }

    totalBalance() {
        let total = 0;
        for (let i = 0; i < this.accArray.length; i++) {
            let temp = this.accArray[i].balance; //Hold onto balances in arrays thru iteration
            total += temp; //add them together
        }
        return total;
    }

    highestAccount() {
        let highestBal = 0; //Initialize
        let highestName; //Initialize
        for (let i = 0; i < this.accArray.length; i++) {
            let currentName = this.accArray[i].accountName; //Iterating through the acc names
            if (this.accArray[i].balance > highestBal) {
                highestBal = this.accArray[i].balance;
                highestName = currentName;
            }

            //Also works:
            // let high = this.accArray[0].balance; //Start at index 0
            // let current = this.accArray[i].balance; //Iterating through the balances of account
            // let currentName = this.accArray[i].accountName; //Iterating through the names of each acc
            // if (high < current) {
            //     console.log(current)
            //     high = current;
            //     highestAcc = high;
            //     highestName = currentName;
            // }
        }
        return `Highest Balance Account: ${highestName}, $${highestBal}`
    }

    lowestAccount() {
        let lowest = Number.POSITIVE_INFINITY;
        let lowestName;
        for (let i = this.accArray.length - 1; i >= 0; i--) {
            let currentName = this.accArray[i].accountName;
            let currentBal = this.accArray[i].balance;
            if (currentBal < lowest) {
                lowestName = currentName;
                lowest = currentBal;
            }
        }
        return `Lowest Balance Account: ${lowestName}, $${lowest}`
    }

    showAllAccounts() {
        let showAll;
        for (let i = 0; i < this.accArray.length; i++) {
            return showAll += this.accArray; //Put all the accounts into a string to return
        }
    }
}


export { Account, AccountController };