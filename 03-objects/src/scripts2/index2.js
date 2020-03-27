import { Account, AccountController } from './account3.js'

//Box1
const container = document.getElementsByClassName("grid-container") //CONTAINER
const dptBtn = document.getElementById("depositBtn") //DEPOSIT BTN
const wdrawBtn = document.getElementById("withdrawBtn") //WITIHDRAW BTN
const delBtn = document.getElementById("deleteBtn") //DELETE BTN
const reBtn = document.getElementById("renameBtn") //RENAME BTN     
const numInput = document.getElementById("numInput") //NUM INPUT TO ADD/WITHDRAW
const renameInput = document.getElementById("renameInput") //RENAME INPUT
const dropDownList = document.getElementsByClassName("accountList") //DROPDOWN LIST
const message1 = document.getElementById("messageArea1") //MESSAGE AREA

//Box 2
const accNameInput = document.getElementById("newAccNameInput") //ACC NAME INPUT
const initBalInput = document.getElementById("initBalInput") //INIT BALANCE INPUT
const addBtn = document.getElementById("addBtn") //ADD BUTN
const message2 = document.getElementById("messageArea2") //MESSAGE AREA

//Box 3
const hBtn = document.getElementById("highBtn") //HIGH
const lBtn = document.getElementById("lowBtn") //LOW
const tBtn = document.getElementById("totalBtn") //TOTAL
const showAll = document.getElementById("showBtn") //SHOW ALL ACCS
    //const list = document.getElementById("olList") //DISPLAY
const message3 = document.getElementById("messageArea3") //MESSAGE AREA

//Initial Accounts
// let userAccounts = new Account("Uranka", 100);
// let addToList = document.createElement("option")
// addToList.appendChild(document.createTextNode(userAccounts.showBalance()))
// accList1[0].appendChild(addToList)

let accounts = new Account();
let accountManager = new AccountController();
let accListArray = [];

document.body.addEventListener("click", e => {
    //console.log(e.target);
    let accountName = accNameInput.value;
    let startingBalance = initBalInput.value;
    if (e.target.nodeName === 'BUTTON') {
        if (e.target.textContent === 'Deposit') { //NOT DONE YET

            message1.textContent = `Added ${depAmount} to ${accountName}`
        } else if (e.target.textContent === "Withdraw") {

            message1.textContent = `Withdrawled ${depAmount} from ${accountName}`
        } else if (e.target.textContent === "Delete") { //NOT DONE YET

        } else if (e.target.textContent === "Delete") {

        } else if (e.target.textContent === "Rename") {

        } else if (e.target.textContent === "Add") {
            if (accNameInput.value && initBalInput.value != "") {
                accountManager.addAccount(accountName, startingBalance)
                accListArray.push(accountManager)
                    // console.log(accountManager)
                message2.textContent = `Created ${accountName} with $${startingBalance}`
                accNameInput.value = '';
                initBalInput.value = '';
            } else {
                message2.textContent = 'Please enter some values'
            }

        } else if (e.target.textContent === "Highest Account") {
            if (accListArray.length > 0) {
                console.log(accountManager)
                message3.textContent = accountManager.highestAccount();
            }
        } else if (e.target.textContent === "Lowest Account") {
            if (accListArray.length > 0) {
                message3.textContent = accountManager.lowestAccount();
            }
        } else if (e.target.textContent === "Total Balance") {
            if (accListArray.length > 0) {
                message3.textContent = accountManager.totalBalance();
            }
        } else if (e.target.textContent === "Show All Accounts") {
            if (accListArray.length > 0) {
                for (let i = 0; i < accListArray.length; i++) {
                    message3.textContent = accountManager.showAll();
                }
            } else if (accListArray.length <= 0) {
                message3.textContent = "There are no accounts"
            }
        }
    }
});