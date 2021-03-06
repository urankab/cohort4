export default class Stacks {
    constructor() {
        this.storage = {}
        this.size = 0
        this.lastKey = 0
    }

    push(element) {
        this.lastKey++
        this.size++
        element['key'] = this.lastKey
        this.storage[this.size] = element //Each new item will be added at the end
    }

    pop() {
        let removed = this.storage[this.size]
        delete this.storage[this.size] //Deletes last time (last size)
        this.size--
        return removed.name
    }

    peek() { //Let's us see the last element that would be deleted
        if (this.size >= 1) {
            return this.storage[this.size].name
        }
        else {
            return null
        }
    }
}

