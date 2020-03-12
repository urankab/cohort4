import domStuff from './basicDom.js'

//BASIC DOM-----------------------------------------------------
const showBtn = document.getElementById("showBtn");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const list = document.getElementById("olList");


showBtn.addEventListener("click", function() {
    domStuff.showStuff(list.children);
});

addBtn.addEventListener("click", function(){
    let node = document.createElement("LI");
    let textnode = document.createTextNode("Hello");
    node.appendChild(textnode);
    list.appendChild(node);
});

deleteBtn.addEventListener("click", function(){
    list.removeChild(document.getElementById("olList").lastChild);
});


