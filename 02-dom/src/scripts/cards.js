const functions = {
    buildCard(text) {
        const div = document.createElement('div');
        div.classList.add("card") //Adds .card css to new cards
        div.appendChild(document.createTextNode(text));
        const breakLine = document.createElement('br');
        const breakLine2 = document.createElement('br');
        div.appendChild(breakLine);
        div.appendChild(breakLine2);

        //ADD BEFORE BUTTON
        const addBefore = document.createElement('button');
        addBefore.appendChild(document.createTextNode("Add Before"));
        div.appendChild(addBefore);

        //ADD AFTER BUTTON
        const addAfter = document.createElement('button');
        addAfter.appendChild(document.createTextNode("Add After"));
        div.appendChild(addAfter);

        //DELETE BUTTON
        const deleteFunc = document.createElement('button');
        deleteFunc.appendChild(document.createTextNode("Delete"));
        div.appendChild(deleteFunc);

        return div;
    },

    addBefore(node, text) {
        // console.log(node);
        //console.log(node.parentElement);      
        const div = functions.buildCard(text);
        node.parentElement.insertBefore(div, node);
    },

    addAfter(node, text) {
        console.log(node);
        console.log(node.parentElement);
        const div = functions.buildCard(text);
        node.after(div, node.nextSibling);
        //node.insertAdjacentElement('afterend', div); //Also works
    },

    deleteFunc(node) {
        node.parentElement.removeChild(node);
    }
}

export default functions;