class ListNode {
   constructor(element) {
      this.next = null
      this.element = element
      this.amount = amount
   }
   show() {
      return `${this.element} amount: ${this.amount}`
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
      this.head = null;
      this.size = 0.
   }

   insert(element) {
      let node = new ListNode(element)
      let current
      //If list is empty, add the element to make it head
      if (this.head == null) {
         this.head = node
      }
      else {
         current = this.head
         //Iterate to the end of the list
         while (current.next) {
            current = current.next
         }
         //Add node
         current.next = node
      }
      this.size++
   }

   delete(element) {
      let current = this.head
      let prev = null
      //Iterate over list
      while (current != null) {
         //Compare element with current, if found, then remove 
         if (current.element === element) {
            if (prev == null) {
               this.head = current.next
            } else {
               prev.next = current.next
            }
            this.size--
            return current.element
         }
         prev = current
         current = current.ext
      }
      return -1
   }

   next(element) {

   }

   previous(element) {

   }

   first(element) {
      let node = new Node(element)
   }

   last(element) {

   }

   total() {
      return this.size
   }
}

export { ListNode, LinkedList };

//Linked list: Successful nodes are connected by pointers, last node returns null
// Allocates memory as it grows unless arrays which have a fixed size
// A linked list can easily insert or remove nodes from a list without reorganization
// of the entire dat structure

// Drawbacks: Random access of elements is not allowed, nodes must be accessed 
// starting from the first onemptied, so it is slow
// It uses more memory than arrays because of using pointers

//Single linked list: 2 parts: data and a pointer to the next node, terminates at null