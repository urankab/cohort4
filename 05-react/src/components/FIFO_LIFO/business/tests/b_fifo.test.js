import Queues from '../fifo.js'

test('Test Queue methods - push, unshift', () => {
    let queue = new Queues()

    expect(queue.peek()).toBe(null)
    queue.enqueue({ name: 'Shelly', species: 'Asian', gender: 'male', about: 'Enjoys eating dirt' })
    queue.enqueue({ name: 'Eric', species: 'African', gender: 'male', about: 'Hates eating dirt' })
    queue.enqueue({ name: 'Sir Elephenne', species: 'Blue', gender: 'male', about: 'Prestigous elephant' })
    // console.log(queue)
    expect(queue.peek()).toBe('Shelly')
    queue.dequeue() //removes Shelly
    queue.dequeue() //removes Eric
    // console.log(queue)
})