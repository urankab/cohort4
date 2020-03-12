import cards from './cards.js'

let counter = 2;

document.body.addEventListener("click", e => {
    // console.log("You Clicked, at your command");
    // console.log(e.target.textContent);
    // console.log(e.target.nodeName);
    // console.log(e.target);

    //ADD BEFORE STUFF
    if (e.target.nodeName === 'BUTTON') {
        // document.body.appendChild(domfuncs.buildCard("You just added " + counter++));
        //console.log(e.target.textContent);
        if (e.target.textContent === "Add Before") {
            cards.addBefore(e.target.parentElement, "Card " + counter++);
        }

        //ADD AFTER STUFF
        else if (e.target.textContent === "Add After") {
            cards.addAfter(e.target.parentElement, "Card " + counter++);
        }

        //DELETE
        else if (e.target.textContent === "Delete") {
            cards.deleteFunc(e.target.parentElement);
        }
    }
});
