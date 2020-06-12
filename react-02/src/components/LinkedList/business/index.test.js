import { LinkedList } from './index.js'

test('Testing LinkedList funcs - adding', () => {
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

   list.insert('Food', 2) //Added before Dogs, Food is current node now
   expect(list.size).toBe(4)
   expect(list.currentNode.subject).toBe('Food')
   expect(list.head.subject).toBe('Mice')
   expect(list.tail.subject).toBe('Dogs')
   list.prev() //Expect current node to be Food, prev will be Cats
   expect(list.currentNode.subject).toBe('Cats')
   list.insert('BISCUITS', 100) //Insert before Cats
   // console.log(list)
   // list.printList()
})

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

   expect(list.delete()).toBe('Deleted Tail: Dogs') //Deletes current node (Dogs)
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

test('Testing prev, next then deleting', () => {
   const list = new LinkedList()

   list.insert('Dogs', 5) //
   list.insert('Cats', 10) //
   list.insert('Mice', 2) //

   // | Mice - 2
   // | Cats - 10
   // | Dogs - 5

   list.next() //Cats
   list.insert('Moose', 80) //Added before Cats

   // | Mice - 2
   // | Moose - 80 //Current Node
   // | Cats - 10
   // | Dogs - 5

   list.next() //Cats
   expect(list.currentNode.subject).toBe('Cats')
   list.next() //Dogs
   expect(list.currentNode.subject).toBe('Dogs')

   list.insert('Nuts', 8) //Added before Dogs 
   expect(list.currentNode.subject).toBe('Nuts')
   expect(list.size).toBe(5)

   // | Mice - 2
   // | Moose - 80
   // | Cats - 10
   // | Nuts - 8 //CN
   // | Dogs - 5

   list.insert('Jumpers', 8) //Added before Nuts
   // list.printList()

   // | Mice - 2
   // | Moose - 80
   // | Cats - 10
   // | Jumpers - 8 //CN
   // | Nuts - 8
   // | Dogs - 5

   list.prev() //CN - Cats
   list.delete()
   expect(list.size).toBe(5)

   // | Mice - 2
   // | Moose - 80 //CN
   // | Jumpers - 8
   // | Nuts - 8
   // | Dogs - 5

   expect(list.currentNode.subject).toBe('Moose')
   list.prev() //CN - Mice
   list.delete()

   // | Moose - 80
   // | Jumpers - 8
   // | Nuts - 8
   // | Dogs - 5

   expect(list.size).toBe(4)
   expect(list.currentNode.subject).toBe('Moose')
   list.last()
   expect(list.currentNode.subject).toBe('Dogs')
   list.insert('Noo', 3)

   // | Moose - 80
   // | Jumpers - 8
   // | Nuts - 8
   // | Noo - 3
   // | Dogs - 5

   list.prev() //CN - Nuts
   list.delete()

   expect(list.size).toBe(4)
   expect(list.currentNode.subject).toBe('Jumpers')

   // | Moose - 80
   // | Jumpers - 8
   // | Noo - 3
   // | Dogs - 5

   list.next() //CN - Noo
   expect(list.currentNode.subject).toBe('Noo')

   list.delete()
   expect(list.size).toBe(3)
   expect(list.currentNode.subject).toBe('Jumpers')

   list.delete() //Deleted Jumpers
   list.delete() //Deleted Moose
   expect(list.delete()).toBe('Deleted last item: Dogs')
   expect(list.size).toBe(0)
   expect(list.delete()).toBe('Nothing to delete')
})

test('Testing searching by subject and amount', () => {
   const list = new LinkedList()

   list.insert('Dogs', 5)
   list.insert('Cats', 10)
   list.insert('Cats', 5)
   list.insert('Mice', 3)
   list.insert('Mice', 5)
   list.insert('Mice', 1)

   // list.printList()
   expect(list.searchBySubject('Cats')).toContain('| Cats ~ 5\n | Cats ~ 10')
   expect(list.searchBySubject('Mice')).toContain('| Mice ~ 1\n | Mice ~ 5\n | Mice ~ 3')

   expect(list.searchByAmount(5)).toContain('| Mice ~ 5\n | Cats ~ 5\n | Dogs ~ 5')
})

test('Testing searching by subject and amount', () => {
   const list = new LinkedList()

   list.insert('Dogs', 5)
   list.insert('Cats', 10)
   list.insert('Cats', 5)

   expect(list.search('Cats', 5)).toContain('Cats - 5 is now the Current Node')
   expect(list.search('Mice', 5)).toBe(null)
})