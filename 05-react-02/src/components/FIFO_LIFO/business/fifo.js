export default class Queues {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
        this.size = 0
        this.lastKey = 0
    }

    enqueue(element) {
        this.lastKey++
        element['key'] = this.lastKey
        this.storage[this.tail] = element //Adds to the end of list - at the tail
        this.tail++
        this.size++
    }

    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head] //Deletes the last added which is the current head
        this.head++
        this.size--
        return removed
    }

    peek() { //Check the next item that would be removed - the head
        if (this.size >= 1) {
            return this.storage[this.head].name
        }
        else {
            return null
        }
    }
}