import { LinkedList, Node } from './index.js'

// test('Testing LinkedList funcs - adding', () => {
//    const list = new LinkedList()

//    list.insert('Dogs', 5) //Dogs is new head
//    list.insert('Cats', 10) //Cats is new head
//    list.insert('Mice', 2) //Mice is new head

//    expect(list.size).toBe(3)
//    expect(list.currentNode.subject).toBe('Mice')
//    expect(list.head.subject).toBe('Mice')
//    expect(list.tail.subject).toBe('Dogs')
//    expect(list.first().subject).toBe('Mice')
//    expect(list.last().subject).toBe('Dogs')
//    expect(list.currentNode.subject).toBe('Dogs')

//    list.insert('Food', 2) //Added before Dogs, Food is current node now
//    expect(list.size).toBe(4)
//    expect(list.currentNode.subject).toBe('Food')
//    expect(list.head.subject).toBe('Mice')
//    expect(list.tail.subject).toBe('Dogs')
//    list.prev() //Expect current node to be Food, prev will be Cats
//    expect(list.currentNode.subject).toBe('Cats')
//    list.insert('BISCUITS', 100) //Insert before Cats
//    // console.log(list)
//    list.printList()
// })

test('Testing LinkedList funcs - deleting', () => {
   const list = new LinkedList()

   list.insert('Dogs', 5) //Dogs is new head
   list.insert('Cats', 10) //Cats is new head
   list.insert('Mice', 2) //Mice is new head

   expect(list.size).toBe(3)
   expect(list.currentNode.subject).toBe('Mice')
   expect(list.head.subject).toBe('Mice')
   expect(list.tail.subject).toBe('Dogs')
   expect(list.first().subject).toBe('Mice')
   expect(list.last().subject).toBe('Dogs')
   expect(list.currentNode.subject).toBe('Dogs')

   expect(list.delete()).toBe('Deleted Dogs') //Deletes current node (Dogs)
   expect(list.size).toBe(2)
   expect(list.currentNode.subject).toBe('Cats') //Current is now Cats
   // console.log(list)
   // list.printList()

   list.insert('Juice', 98)
   list.insert('Cola', 1)
   list.insert('Oranges', 55)

   // Mice - 2
   // Oranges - 55
   // Cola - 1
   // Juice - 98
   // Cats - 10

   expect(list.size).toBe(5)
   expect(list.currentNode.subject).toBe('Oranges')
   list.next() //Cola
   expect(list.currentNode.subject).toBe('Cola')
   list.delete() //Deleting Cola, next current node is Orange (the prev)
   expect(list.size).toBe(4)
   expect(list.currentNode.subject).toBe('Oranges')
   list.delete()
   expect(list.size).toBe(3)
   expect(list.currentNode.subject).toBe('Mice')
   list.delete()
   expect(list.size).toBe(2)
   expect(list.currentNode.subject).toBe('Juice')
   list.next() //Cats
   list.delete() //Deleting Cats
   expect(list.size).toBe(1)
   expect(list.currentNode.subject).toBe('Juice') //Juice is the last item in list
   // console.log(list)
   // list.printList()
})


// test('Testing LinkedList funcs - adding, search, deleting', () => {
//    const list = new LinkedList()

//    //Adding to end of list
//    list.append('Cats', 5) //4
//    list.append('Cats', 10) //5
//    list.append('Mice', 2) //6
//    expect(list.size).toBe(3)
//    expect(list.head.show()).toBe('Subject: Cats --- Amount: 5')

//    // //Add to beginning
//    list.prepend('Books', 60) //3
//    list.prepend('Food', 12) //2
//    expect(list.head.subject).toBe('Food')
//    expect(list.tail.subject).toBe('Mice')
//    expect(list.size).toBe(5)

//    // //Test search functions
//    expect(list.search('Cats', 5)).toBeTruthy()
//    expect(list.search('Cats', 333)).toBe(null)
//    expect(list.search('Cats', 5).subject).toBe('Cats')

//    list.prepend('Cats', 1000) //1
//    expect(list.size).toBe(6)
//    // expect(list.searchBySubject('Cats')).toBe()

//    // //Test deleting nodes
//    list.deleteHead() //Deleting Cats, 100 
//    expect(list.head.subject).toBe('Food') //New head is Food
//    list.deleteTail() //Deleting Mice, 2
//    expect(list.tail.subject).toBe('Cats')
//    expect(list.tail.amount).toBe(10)
//    expect(list.size).toBe(4)

//    list.deleteTail()
//    list.deleteTail()
//    list.deleteHead()
//    list.deleteHead()
//    expect(list.size).toBe(0)
//    //List should be empty
//    // console.log(list)
// })

// test('Test getting total amounts from all nodes and showing all', () => {
//    const list = new LinkedList()

//    list.append('Cats', 5)
//    list.append('Cats', 10)
//    list.append('Mice', 2)

//    //Get total amounts
//    expect(list.totalAmounts()).toBe(17)
//    expect(list.printList()).toContain(' -| Cats - 5 |-  -| Cats - 10 |-  -| Mice - 2 |- ')
//    expect(list.head.next.subject).toBe('Cats')
// })