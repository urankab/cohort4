export class Account {
    static lastKey = 0
    constructor(obj) {
        const defaults = { accountName: '', balance: '', key: '' }
        const data = { ...defaults, ...obj }

        this.accountName = data.accountName;
        this.balance = data.balance;
        this.key = data.key;
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

export class AccountController {
    constructor() {
        this.accounts = {}
        this.lastKey = 0;
        this.selectedName = ''
    }

    getAccountByKey(key) {
        return this.accounts[key]
    }

    getAccountNameByKey(thekey) {
        for (let key in this.accounts) {
            if ((Number(thekey) === this.accounts[key].key)) {
                return this.accounts[key].accountName
            }
        }
    }

    getKeyByName(name) {
        for (let key in this.accounts) {
            if (name === this.accounts[key].accountName) {
                return this.accounts[key].key
            }
        }
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
        return false;
    }

    getDefaults() {
        return new Account({})
    }

    addAccount(account) {
        this.lastKey++
        account.key = this.lastKey
        account.balance = Number(account.balance)
        this.accounts[account.key] = new Account(account)
    }

    removeAccount(thekey) {
        for (let key in this.accounts) {
            if ((Number(thekey)) === this.accounts[key].key) {
                delete this.accounts[key]
            }
        }
    }

    renameAccount(thekey, newName) {
        for (let key in this.accounts) {
            if ((Number(thekey)) === this.accounts[key].key) {
                this.accounts[key].accountName = newName;
            }
        }
    }

    totalBalance() {
        let total = 0
        for (let key in this.accounts) {
            total += Number(this.accounts[key].balance)
        }
        if (this.checkLength() > 0)
            return `$${total}`
    }

    highestAccount() {
        let highestBal = Number.NEGATIVE_INFINITY;
        let highestName;
        for (let key in this.accounts) {
            if (this.accounts[key].balance > highestBal) {
                let currentName = this.accounts[key].accountName;
                highestBal = Number(this.accounts[key].balance);
                highestName = currentName;
            }
        }
        if (this.checkLength() > 0)
            return `${highestName} - $${highestBal}`
    }

    lowestAccount() {
        let lowest = Number.POSITIVE_INFINITY;
        let lowestName;
        for (let key in this.accounts) {
            let currentName = this.accounts[key].accountName;
            let currentBal = Number(this.accounts[key].balance);
            if (currentBal < lowest) {
                lowestName = currentName;
                lowest = currentBal;
            }
        }
        if (this.checkLength() > 0)
            return `${lowestName} - $${lowest}`
    }

    showAll() {
        let stuff = ''
        for (let key in this.accounts) {
            stuff += `${this.accounts[key].accountName} - $${this.accounts[key].balance}\n`
        }
        return stuff;
    }
}