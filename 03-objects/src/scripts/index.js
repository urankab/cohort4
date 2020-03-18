import { Account, AccountController } from './account.js'

//Box1
const container = document.getElementsByClassName("grid-container")
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

let setAccount = new Account("Uranka", 100) //Account

let addSetAccount = document.createElement("OPTION");
addSetAccount.appendChild(document.createTextNode("Testing"))
accList.appendChild(addSetAccount)


//let newAccDiv = document.createElement("DIV");
// newAccDiv.classList.add("box")

console.log(setAccount);

let userAccs = new AccountController();

document.body.addEventListener("click", e => {
    //console.log(e.target.textContent); //NAME OF BUTTON
    // console.log(e.target.nodeName); //BUTTON
    // console.log(e.target); //BUTTON STUFF

    if (e.target.nodeName === 'BUTTON') {
        if (e.target.textContent === 'Add') {
            let newAccount = document.createElement("OPTTION");
            userAccs.addAccount(accNameInput, initBalInput);
            let newAccDiv = document.createElement("DIV")
            newAccDiv.appendChild(newAccount);


            // userAccs.addAccount(accNameInput.value, initBalInput.value)
            // userAccs = document.createElement('option')
            // userAccs.appendChild(document.createTextNode("testing"))
            // accList.appendChild(userAccs);



            // let createAccount = document.createElement("OPTION")
            // let accountName = document.createTextNode(accNameInput);
            // let list = document.
            message2.textContent = 'Added'
        } else if (e.target.textContent === "Show All Accounts") {
            console.log(e.target);
            // let node = document.createElement("LI")
            // let textnode = document.createTextNode(accNameInput)
            // let textBal = document.createTextNode(initBalInput)
            // list.appendChild(textnode, textBal)
        } else if (e.target.textContent === "Delete") {
            // userAccs.removeAccount(e.target.parentElement);
        }
    }
});