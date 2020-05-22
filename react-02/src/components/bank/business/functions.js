class Account {
    static lastKey = 0
    constructor(obj) {
        const defaults = { accountName: '', balance: '', key: '' }
        const data = { ...defaults, ...obj }

        this.accountName = data.accountName;
        this.balance = data.balance;
        this.key = data.key;
    }

    newKey() {
        Account.lastKey++;
        this.key = Account.lastKey;
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
        this.accounts = {}
        this.lastKey = 0;
    }

    getDefaults() {
        return new Account({})
    }

    getAccountByKey(key) {
        return this.accounts[key]
    }

    checkLength() {
        return Object.keys(this.accounts).length
    }

    checkName(nameToCheck) {
        for (let key in this.accounts) {
            if (nameToCheck === this.accounts[key].accountName) {
                return true;
            }
        }
        //Turn to array version
        // let allNames = [];
        // for (let key in this.accounts) {
        //     allNames.push(this.accounts[key].accountName)
        // }

        // for (let i = 0; i < allNames.length; i++) {
        //     if (nameToCheck === allNames[i]) {
        //         return true;
        //     }
        // }
    }

    addAccount(account) {
        this.lastKey++
        account.key = this.lastKey;
        this.accounts[account.key] = account
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

