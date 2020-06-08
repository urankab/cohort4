import Queue from './fifo.js'

test('Test Queue methods - push, unshift', () =>{
    let queue = new Queues()

    queue.enqueue('mangos') //1
    queue.enqueue('apples') //2
    queue.enqueue('juice') //3

    queue.dequeue() //removes mangos
    queue.dequeue() //removes apples
    console.log(queue)
})