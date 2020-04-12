import { Account, AccountController } from './account.js'

//Box1
const numInput = document.getElementById("numInput") //NUM INPUT TO ADD/WITHDRAW
const renameInput = document.getElementById("renameInput") //RENAME INPUT
const dropDownList = document.getElementById("account1") //DROPDOWN LIST
const message1 = document.getElementById("messageArea1") //MESSAGE AREA

//Box 2
const accNameInput = document.getElementById("newAccNameInput") //ACC NAME INPUT
const initBalInput = document.getElementById("initBalInput") //INIT BALANCE INPUT
const message2 = document.getElementById("messageArea2") //MESSAGE AREA

//Box 3
const message3 = document.getElementById("messageArea3") //MESSAGE AREA

let accountManager = new AccountController();

document.body.addEventListener("click", e => {
    if (e.target.nodeName === 'BUTTON') {
        if (e.target.textContent === "Add") {
            if (accNameInput.value && initBalInput.value != "") {
                if (accountManager.checkName(accNameInput.value)) {
                    message1.textContent = "Acc name already exists"
                } else {
                    accountManager.addAccount(accNameInput.value, initBalInput.value)
                    console.log("length " + accountManager.accArray.length)
                    message1.textContent = `Created ${accNameInput.value} with $${initBalInput.value}`
                    accNameInput.value = '';
                    initBalInput.value = '';
                    //Add To DropDown
                    let addToList = document.createElement("option");
                    console.log(accountManager)
                        //addToList.appendChild(document.createTextNode(`${accountManager.accArray[i].accountName}`))
                    addToList.appendChild(document.createTextNode(accountManager.accArray[accountManager.accArray.length - 1].showName()))
                    dropDownList.appendChild(addToList)
                }
            } else {
                message1.textContent = 'Please enter some values'
            }
        }

        if (e.target.textContent === 'Show Balance') {
            for (let i = 0; i < accountManager.accArray.length; i++) {
                if ((dropDownList.value).includes(accountManager.accArray[i].accountName)) {
                    message2.textContent = accountManager.accArray[i].showBalance();
                }
            }
        }

        if (e.target.textContent === 'Deposit') {
            for (let i = 0; i < accountManager.accArray.length; i++) {
                if ((dropDownList.value).includes(accountManager.accArray[i].accountName)) {
                    accountManager.accArray[i].deposit(numInput.value)
                    console.log(accountManager.accArray[i].balance)
                    message2.textContent = `Added $${numInput.value} to ${accountManager.accArray[i].accountName}`
                    numInput.value = ''
                }
            }
        }

        if (e.target.textContent === "Withdraw") {
            for (let i = 0; i < accountManager.accArray.length; i++) {
                if ((dropDownList.value).includes(accountManager.accArray[i].accountName)) {
                    accountManager.accArray[i].withdraw(numInput.value)
                    message2.textContent = `Withdrawed $${numInput.value} from ${accountManager.accArray[i].accountName}`
                    numInput.value = ''
                }
            }
        }

        if (e.target.textContent === "Delete") {
            for (let i = 0; i < accountManager.accArray.length; i++) {
                if ((dropDownList.value).includes(accountManager.accArray[i].accountName)) {
                    //For the IF: dropDownList.options[dropDownList.selectedIndex].text also works
                    //console.log(i, dropDownList.value, accountManager.accArray[i].accountName)
                    accountManager.removeAccount(accountManager.accArray[i].accountName)
                    console.log(accountManager)
                        //console.log(dropDownList.selectedIndex)
                    message2.textContent = "Removed account"
                }
            }
            dropDownList.remove(dropDownList.selectedIndex) //Remove from list
        }

        if (e.target.textContent === "Rename") {
            for (let i = 0; i < accountManager.accArray.length; i++) {
                if ((dropDownList.value).includes(accountManager.accArray[i].accountName)) {
                    accountManager.renameAccount(accountManager.accArray[i].accountName, renameInput.value)
                    let reAddToList = document.createElement("option");
                    message2.textContent = "Renamed account to " + accountManager.accArray[i].accountName;
                    //Add new name to list
                    reAddToList.appendChild(document.createTextNode(accountManager.accArray[i].showName()))
                    console.log(accountManager)
                    dropDownList.add(reAddToList, dropDownList[1]) //Adds to index 1 of dropdownlist
                        //dropDownList.appendChild(reAddToList)
                    dropDownList.remove(dropDownList.selectedIndex) //Removes old name from list
                    renameInput.value = ''
                }
            }
        }

        if (e.target.textContent === "Highest Account") {
            if (accountManager.accArray.length > 0) {
                message3.textContent = accountManager.highestAccount();
            }
        }

        if (e.target.textContent === "Lowest Account") {
            if (accountManager.accArray.length > 0) {
                message3.textContent = accountManager.lowestAccount();
            }
        }

        if (e.target.textContent === "Total Balance") {
            if (accountManager.accArray.length > 0) {
                message3.textContent = accountManager.totalBalance();
            }
        }

        if (e.target.textContent === "Show All Accounts") {
            if (accountManager.accArray.length > 0) {
                message3.textContent = accountManager.showAll();
            } else if (accountManager.accArray.length < 1) {
                message3.textContent = "There are no accounts"
            }
        }
    }
});