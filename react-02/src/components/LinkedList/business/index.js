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
      this.currentNode = null
      this.size = 0
   }

   first() {
      this.currentNode = this.head
      return this.currentNode
   }

   last() {
      this.currentNode = this.tail
      return this.currentNode
   }

   prev() {
      this.currentNode = this.currentNode.prev
      return this.currentNode
   }

   next() {
      this.currentNode = this.currentNode.next
      return this.currentNode
   }

   insert(subject, amount) {
      //If the list is empty, make it the head and current node
      if (!this.head) {
         this.head = this.tail = new Node(subject, amount)
         this.currentNode = this.head
      }
      //If the current node is the head, make new node the head
      else if (this.currentNode === this.head) {
         let oldHead = this.head
         this.head = new Node(subject, amount)
         oldHead.prev = this.head
         this.head.next = oldHead
         this.currentNode = this.head
      }
      //If there is stuff, add before the currentNode, then make it the new current node
      else {
         let oldCurrent = this.currentNode
         this.currentNode = new Node(subject, amount)
         let temp = oldCurrent.prev; //Temp is old current node's prev
         temp.next = this.currentNode
         this.currentNode.prev = temp
         this.currentNode.next = oldCurrent
         oldCurrent.prev = this.currentNode
      }
      this.size++
   }

   delete() {
      //If list is empty
      if (!this.head) {
         return null
      }
      else {
         let removedNode = this.currentNode
         //If list only has 1 item
         if (this.head === this.tail) {
            this.head = this.tail = null
            console.log('1')
            this.size--
            return `Deleted ${removedNode.subject}`
         }
         //If the CN is the head, return null and let head.next be new head
         else if (removedNode === this.head) {
            this.head = this.head.next
            this.head.prev = null
            this.currentNode = this.head
            console.log('2')
            this.size--
            return `Deleted ${removedNode.subject}`
         }
         //If the CN is the tail, return null and let tail.prev be new tail
         else if (removedNode === this.tail) {
            this.tail = this.tail.prev
            this.tail.next = null
            this.currentNode = this.tail
            console.log('3')
            this.size--
            return `Deleted ${removedNode.subject}`
         }
         else {
            //If current node is inbetween head and tail, new Current is the prev
            let tempPrev = this.currentNode.prev
            let tempNext = this.currentNode.next
            this.currentNode = tempPrev
            tempPrev.next = tempNext
            this.size--
            console.log('4')
            return `Deleted ${removedNode.subject}`
         }
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
         // str += ` -| ${curr.subject} - ${curr.amount} |- `
         str += `${curr.subject} - ${curr.amount}\n`
         curr = curr.next
      }
      console.log(str)
      // return str
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
