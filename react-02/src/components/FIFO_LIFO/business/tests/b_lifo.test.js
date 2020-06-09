import Stacks from '../lifo.js'

test('Testing Stacks with object - pop, push, peek', () => {
    const stack = new Stacks()
    expect(stack.peek()).toBe(null)
    stack.push({ name: 'Shelly', species: 'Asian', gender: 'male', about: 'Enjoys eating dirt' })
    stack.push({ name: 'Eric', species: 'African', gender: 'male', about: 'Hates eating dirt' })
    stack.push({ name: 'Sir Elephenne', species: 'Blue', gender: 'male', about: 'Prestigous elephant' })
    // console.log(stack)
    expect(stack.peek()).toBe('Sir Elephenne')
    expect(stack.pop()).toBe('Sir Elephenne')
    // console.log(stack)
    expect(stack.peek()).toBe('Eric')
})