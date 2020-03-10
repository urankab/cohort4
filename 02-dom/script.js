const domStuff = {
    showStuff: () => {;
        let thing = '';
        for (let i = 0; i < document.getElementById("olList").children.length; i++) {
            thing = document.getElementById("olList").children[i].textContent;
            console.log(thing);
        } 
    }
}

export default domStuff;