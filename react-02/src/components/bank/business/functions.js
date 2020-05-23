export class Account {
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

export class AccountController {
    constructor() {
        this.accounts = {}
        this.lastKey = 0;
        this.selectedName = ''
    }

    getDefaults() {
        return new Account({})
    }

    getAccountByKey(key) {
        return this.accounts[key]
    }

    // getAccountNameByKey(thekey) {
    //     for (let key in this.accounts) {
    //         console.log(thekey)
    //         if (Number(thekey) === this.accounts[key].key) {
    //             // this.selectedName = this.accounts[key].accountName
    //             // console.log(this.accounts[key].accountName)
    //             return this.accounts[key].accountName
    //         } else {
    //             return `fail: ${this.accounts[key].key}`
    //         }
    //     }
    // }

    getAccountNameByKey(thekey) {
        for (let key in this.accounts) {
            if ((Number(thekey) === this.accounts[key].key)) {
                return this.accounts[key].accountName
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

    addAccount(account) {
        this.lastKey++
        account.key = this.lastKey;
        this.accounts[account.key] = account
    }

    removeAccount(nameToDelete) {
        for (let key in this.accounts) {
            if (nameToDelete === this.accounts[key].accountName) {
                delete this.accounts[key]
            }
        }
    }

    renameAccount(accountName, newName) {
        for (let key in this.accounts) {
            if (accountName === this.accounts[key].accountName) {
                this.accounts[key].accountName = newName;
            }
        }
    }

    totalBalance() {
        let total = 0
        for (let key in this.accounts) {
            total += Number(this.accounts[key].balance)
        }
        return `$${total}`
    }

    highestAccount() {
        let highestBal = 0;
        let highestName;
        for (let key in this.accounts) {
            if (this.accounts[key].balance > highestBal) {
                let currentName = this.accounts[key].accountName;
                highestBal = Number(this.accounts[key].balance);
                highestName = currentName;
            }
        }
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
        return `${lowestName} - $${lowest}`
    }

    showAll() {
        let stuff = ''
        for (let key in this.accounts) {
            stuff += `${this.accounts[key].accountName} - $${this.accounts[key].balance}\n`
        }
        return stuff;
    }

    //Works - prints on next
    // showAll() {
    //     let str = '';
    //     for (let key in this.accounts) {
    //         const { accountName, balance } = this.accounts[key];
    //         str += `Name: ${accountName} Balance:  ${balance} \n`;
    //     }
    //     return str;
    // }
}

// export default { Account, AccountController }

