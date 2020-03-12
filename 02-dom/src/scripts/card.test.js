import cards from './cards'

test('Does the dom functions work?', () => {
    console.log("We are in the tests");
    const element = cards.buildCard();
    expect(element).toBeTruthy();
});

test('Does the addBefore functions work?', () => {
    const group = document.createElement("div"); //Creates Div Card
    const element = cards.buildCard("First Insert"); //Create a card
    group.appendChild(element); //Add the card to div group
    // console.log(group);
    // console.log(group.children);
    // console.log(element.parentElement);
    
    expect(group.children.length).toBe(1); //Test to have 1 entry so far

    const txt = 'New Element' //A new card
    cards.addBefore(element, txt); //add card and text before element reference

    expect(group.children.length).toBe(2); //Expect 2 card entries

    expect(group.children[0].textContent.substr(0,11)).toBe(txt);
    expect(group.children[0].textContent).toContain(txt);
    expect(group.children[1].textContent.substr(0,12)).toBe("First Insert");
    expect(group.children[1].textContent).toContain("First Insert");
});

test('Does the addAfter function work?', () => {
    const group = document.createElement("div"); //Create a div
    const element = cards.buildCard("Card 1"); //Create card 1
    group.appendChild(element); //Add card to div

    expect(group.children.length).toBe(1);

    const txt = 'Card 2' //Card 2
    cards.addAfter(element,txt); //Add Card 2 after Card 1
    
    expect(group.children.length).toBe(2); //Expect 2 cards

    expect(group.children[0].textContent).toContain("Card 1");
    expect(group.children[1].textContent).toContain("Card 2");
});

test('Does the delete function work?', () => {
    const group = document.createElement("div"); //Create a div
    const element = cards.buildCard("Card 1"); //Create card 1
    group.appendChild(element); //Add card to div

    expect(group.children.length).toBe(1); //Expect 1 card so far
    cards.deleteFunc(element); //Delete the card
    expect(group.children.length).toBe(0); //Expect no cards to exist
});