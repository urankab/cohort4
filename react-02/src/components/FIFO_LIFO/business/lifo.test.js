import Stacks from './lifo.js'

test('Testing Stacks with object (pop, push, peek', () => {
    const stacks = new Stacks()
    stacks.push({ name: 'Shelly', species: 'Asian', gender: 'male', about: 'Enjoys eating dirt' })
    stacks.push({ name: 'Eric', species: 'African', gender: 'male', about: 'Hates eating dirt' })
    stacks.push({ name: 'Sir Elephenne', species: 'Blue', gender: 'male', about: 'Prestigous elephant' })
    // console.log(stacks)
    expect(stacks.peek()).toBe('Sir Elephenne')
    expect(stacks.pop()).toBe('Sir Elephenne')
    console.log(stacks)
    expect(stacks.peek()).toBe('Eric')
})