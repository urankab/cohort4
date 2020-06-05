class ListNode {
   constructor(subject, amount, prev, next) {
      this.subject = subject //Holds the data of a node
      this.amount = amount
      this.prev = null
      this.next = null //Pointer to next node
   }
   show() {
      return `${this.subject} amount: ${this.amount}`
   }
}

// One of the states that must be maintained will be the position we are in the linked list. To that end implement the following functions:
// first ⇒ position to the first node
// last ⇒ position to the last node
// next ⇒ move to the next node
// previous ⇒ backup one node (how are we going to do this?)
// insert ⇒ inserts a new node after the current node (which node will be the current node after the insertion?)
// delete ⇒ delete the current node (which node will be the current node after the deletion?)

class LinkedList {
   constructor() {
      this.head = null; //Stores first node
      this.tail = null
      this.size = 0 //# of nodes in a list
   }

   //Adds an element at the end of list
   insert(subject, amount) {
      let node = new ListNode(subject, amount) //New node
      let current //To store current ndoe
      //If list is empty, add the element to make it head
      if (this.head == null) {
         this.head = node
         this.tail = node
      }
      else {
         let temp = this.tail
         this.tail = node
         node.prev = temp
         temp.next = node
      }
      this.size++
      return this
   }

   delete(subject) {
      let current = this.head
      let prev = null
      //Iterate over list
      while (current != null) {
         //Compare element with current, if found, then remove 
         if (current.subject === subject) {
            if (prev == null) {
               this.head = current.next
            } else {
               prev.next = current.next
            }
            this.size--
            return current.subject
         }
         prev = current
         current = current.ext
      }
      return -1
   }

   next() {

   }

   previous() {
      let counter = 0
      let node = this.head
      while (node) {
         if (counter === index) {
            return node
         }
         counter++
         node = node.next
      }
      return null
   }

   first() {
      return this.head
   }

   last() {
      return this.tail
   }

   total() {
      return this.size
   }

   // Prints the list items 
   printList() {
      let curr = this.head;
      let str = "";
      while (curr) {
         str += curr.element + " ";
         curr = curr.next;
      }
      console.log(str);
   }
}

export { ListNode, LinkedList };
