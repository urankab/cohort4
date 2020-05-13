class Account {
    constructor(accountName, balance, key) {
        this.accountName = accountName;
        this.balance = Number(balance);
        this.key = key;
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

class AccountController {
    constructor() {
        this.accArray = [];
        this.counter = 1;
    }

    makeKey() {
        return this.counter++;
    }

    addAccount(accountName, balance) {
        let key = this.makeKey();
        this.accArray.push(new Account(accountName, balance, key));
    }

    createItem() {
        let nameInput = document.getElementById('newAccNameInput')
        let initBalInput = document.getElementById('initBalInput')
        let msg1 = document.getElementById('messageArea1')
        let ddl = document.getElementById('account1')
        if (nameInput.value && initBalInput.value != 0) {
            if (this.checkName(nameInput.value)) {
                msg1.textContent = 'Account name already exists';
            } else {
                this.addAccount(nameInput.value, initBalInput.value)
                msg1.textContent = `Created ${nameInput.value} with $${initBalInput.value}`
                nameInput.value = ''
                initBalInput.value = ''
                let addToList = document.createElement('option')
                console.log(this.accArray);
                addToList.appendChild(document.createTextNode(this.accArray[this.accArray.length - 1].showName()))
                ddl.appendChild(addToList)
            }
        } else {
            msg1.textContent = 'Please enter some values'
        }
    }

    checkName(accountName) {
        for (let i = 0; i < this.accArray.length; i++) {
            if (accountName == this.accArray[i].accountName) {
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
            total += Number(this.accArray[i].balance);
        }
        return `Total: $${total}`;
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
        return `Lowest Acc: ${lowestName}: $${lowest}`
    }

    showAll() {
        return this.accArray.map((f) => ` ${f.accountName}: $${f.balance} `);
    }
}

export { Account, AccountController };

