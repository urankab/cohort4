import { Account, AccountController } from './account.js'

//Box1
const dptBtn = document.getElementById("depositBtn")
const wdrawBtn = document.getElementById("withdrawBtn")
const numI1 = document.getElementById("numInput1")
const message1 = document.getElementById("messageArea1")
const accList = document.getElementsByClassName("accounts")

//Box 2
const addBtn = document.getElementById("addBtn")
const delBtn = document.getElementById("deleteBtn")
const reBtn = document.getElementById("renameBtn")
const accNameInput = document.getElementById("textInput")
const initBalInput = document.getElementById("numInput2")
const message2 = document.getElementById("messageArea2")

//Box 3
const hBtn = document.getElementById("highBtn")
const lBtn = document.getElementById("lowBtn")
const tBtn = document.getElementById("totalBtn")
const showAll = document.getElementById("showBtn")
const message3 = document.getElementById("messageArea3")
const list = document.getElementById("olList")

//Create starter account with 100 init balance
const userAccounts = new AccountController();
userAccounts.addAccount("Car", 100);

addBtn.addEventListener("click", function() {
    userAccounts.addAccount(accNameInput.value, initBalInput.value)

})

showAll.addEventListener("click", function() {
    message3.textContent = userAccounts;
})

document.body.addEventListener("click", e => {
    // console.log(e.target.textContent);
    // console.log(e.target.nodeName);
    // console.log(e.target);
    if (e.target.nodeName === 'BUTTON') {

        if (e.target.textContent === 'Add') {
            //console.log(e.target.parentElement)
            let createAccount = document.createElement("OPTION")
            let accountName = document.createTextNode(accNameInput);
            let list = document.
            message2.textContent = 'Added'
        } else if (e.target.textContent === "Show All Accounts") {
            let node = document.createElement("LI")
            let textnode = document.createTextNode(accNameInput)
            let textBal = document.createTextNode(initBalInput)
            list.appendChild(textnode, textBal)
                // cards.addAfter(e.target.parentElement, "Card " + counter++);
        } else if (e.target.textContent === "Delete") {
            userAccounts.removeAccount(e.target.parentElement);
        }
    }
});