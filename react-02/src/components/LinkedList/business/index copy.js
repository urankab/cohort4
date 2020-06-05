class Node {
   constructor(subject, amount, prev, next) {
      this.subject = subject
      this.amount = amount
      this.next = next || null
      this.prev = prev || null
   }
   show() {
      return `Subject: ${this.subject} --- Amount: ${this.amount}`
   }
}

class LinkedList {
   constructor() {
      this.head = null
      this.tail = null
      this.size = 0
   }

   // add to the end of the list / tail
   append(subject, amount) {
      // if list is empty
      if (!this.tail) {
         this.head = this.tail = new Node(subject, amount)
      }
      // if linkedlist has >= one node
      else {
         let oldTail = this.tail
         this.tail = new Node(subject, amount)
         oldTail.next = this.tail
         this.tail.prev = oldTail
      }
      this.size++
   }

   //add to beginning of list / head
   prepend(subject, amount) {
      // if list is empty
      if (!this.head) {
         this.head = this.tail = new Node(subject, amount)
      }
      // if linkedlist has >= one node
      else {
         let oldHead = this.head
         this.head = new Node(subject, amount)
         oldHead.prev = this.head
         this.head.next = oldHead
      }
      this.size++
   }

   deleteHead() {
      // if list is empty (no head)
      if (!this.head) {
         return null
      }
      // if linkedlist has >= 1 node
      else {
         let removedHead = this.head
         // if list has only 1 node left
         if (this.head === this.tail) {
            this.head = this.tail = null
         }
         //if list has >1 node
         else {
            this.head = this.head.next
            this.head.prev = null
         }
         this.size--
         return removedHead.value
      }
   }

   deleteTail() {
      // if list is empty (no tail)
      if (!this.tail) {
         return null
      }
      // if linkedlist has >= one node
      else {
         let removedTail = this.tail
         // if list has only 1 node left
         if (this.head === this.tail) {
            this.tail = this.head = null
         }
         //if list has >1 node
         else {
            this.tail = this.tail.prev
            this.tail.next = null
         }
         this.size--
         return `Deleted ${removedTail.subject}`
      }
   }

   //Search for specific subject and amount
   search(subject, amount) {
      let currentNode = this.head

      while (currentNode) {
         if (currentNode.subject === subject && currentNode.amount === amount) {
            return currentNode
         }
         currentNode = currentNode.next
      }
      return null
   }

   totalAmounts() {
      let currentNode = this.head;
      let total = 0;
      while (currentNode) {
         total += Number(currentNode.amount)
         currentNode = currentNode.next
      }
      return total
   }

   printList() {
      let curr = this.head;
      let str = '';
      while (curr) {
         str += ` -| ${curr.subject} - ${curr.amount} |- `
         curr = curr.next
      }
      return str
   }

   // searchBySubject(subject) {
   //    let currentNode = this.head
   //    let amounts = ''

   //    while (currentNode) {
   //       if (currentNode.subject === subject) {
   //          amounts += currentNode.amount
   //       }
   //       currentNode = currentNode.next
   //    }
   //    return amounts
   // }
}

export { LinkedList, Node }
