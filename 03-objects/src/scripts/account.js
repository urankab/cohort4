class Account {
    constructor(accountName, balance) {
        this.accountName = accountName;
        this.balance = Number(balance);
    }

    deposit(valueIn) {
        this.balance += Number(valueIn);
    }

    withdraw(valueOut) {
        this.balance -= Number(valueOut);
    }

    showBalance() {
        return `${this.accountName}: $${this.balance}`;
    }

    showName() {
        return this.accountName;
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
        this.accArray = [];
    }

    addAccount(accountName, balance) {
        this.accArray.push(new Account(accountName, balance)); //Push to array
    }

    checkName(accountName) { //Check that you don't add acc with same name
        for (let i = 0; i < this.accArray.length; i++) {
            if (accountName == this.accArray[i].accountName) {
                console.log(this.accArray[i].accountName)
                return true;
            }
        }
    }

    removeAccount(accountName) {
        for (let i = 0; i < this.accArray.length; i++) {
            if (accountName == this.accArray[i].accountName) {
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
            total += Number(this.accArray[i].balance); //Hold onto balances in arrays thru iteration
        }
        return `Total: $${total}`;
    }

    highestAccount() {
        let highestBal = 0; //Initialize
        let highestName; //Initialize
        for (let i = 0; i < this.accArray.length; i++) {
            if (this.accArray[i].balance > highestBal) {
                let currentName = this.accArray[i].accountName;
                highestBal = Number(this.accArray[i].balance);
                highestName = currentName;
            }

            //Also works:
            // let high = this.accArray[0].balance; //Start at index 0
            // let current = this.accArray[i].balance; //Iterating through the balances of account
            // let currentName = this.accArray[i].accountName; //Iterating through the names of each acc
            // if (high < current) {
            //     console.log(current)
            //     high = current;
            //     highestBal = high;
            //     highestName = currentName;
            // }
        }
        return `Highest Acc: ${highestName}: $${highestBal}`
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
        return `Lowest Acc: ${ lowestName }: $${ lowest }`
    }

    showAll() {
        return this.accArray.map((f) => ` ${f.accountName}: $${f.balance} `);
    }

    //OLD
    // showAll() {
    //     let string = ''
    //     for (let i = 0; i < this.accArray.length; i++) {
    //         string += ` ${Object.values(this.accArray[i])} `;
    //     }
    //     return string;
    // }
}

export { Account, AccountController };

// Account { accountName: 'House', balance: 515 },
// Account { accountName: 'Kids', balance: 900 },
// Account { accountName: 'Doggy Business', balance: 3000 },
// Account { accountName: 'Video Games', balance: 300 }