import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import LinkedListDisplay from './LinkedListDisplay'

test('Test some validation', () => {

   render(<LinkedListDisplay
   />)

   screen.getByText(/linked list fun!/i)

   let subject = screen.getByPlaceholderText('Subject')
   let amount = screen.getByPlaceholderText('#')
   let searchInput = screen.getByPlaceholderText('Enter subject or amount')

   click('Add')
   screen.getByText('Please enter a subject/value')
   fireEvent.change(subject, { target: { value: 'Cats' } })
   click('Add')
   screen.getByText('Please enter an amount')
   expect(getTextContent('msg')).toBe('Please enter an amount')
   click('Delete')
   expect(getTextContent('msg')).toBe('Nothing to delete')
   expect(getTextContent('currentNode')).toBe('Current Node: None')

   click('Prev Node')
   expect(getTextContent('msg')).toBe('Nothing to move back too')
   click('Next Node')
   expect(getTextContent('msg')).toBe('Nothing to move next too')

   fireEvent.change(subject, { target: { value: 'Cats' } })
   fireEvent.change(amount, { target: { value: 50 } })
   click('Add')
   screen.getByText('Created Cats')

   click('First Node')
   click('Last Node')
   screen.getAllByText('Only 1 item in list')
   click('Show All')
   screen.getAllByText('| Cats - 50')
   click('Delete')
   click('First Node')
   click('Last Node')
   screen.getAllByText('Nothing in list')
})

test('Test adding, deleting, next, prev, first, last, search', () => {

   render(<LinkedListDisplay
   />)

   let subject = screen.getByPlaceholderText('Subject')
   let amount = screen.getByPlaceholderText('#')
   let searchInput = screen.getByPlaceholderText('Enter subject or amount')

   fireEvent.change(subject, { target: { value: 'Cats' } })
   fireEvent.change(amount, { target: { value: 50 } })
   click('Add')
   screen.getByText(/cats - 50/i)
   fireEvent.change(subject, { target: { value: 'Doggy' } })
   fireEvent.change(amount, { target: { value: 10 } })
   click('Add')
   fireEvent.change(subject, { target: { value: 'Jello' } })
   fireEvent.change(amount, { target: { value: 50 } })
   click('Add')

   screen.getByText(/doggy - 10/i)
   expect(getTextContent('currentNode')).toBe('Current Node: Jello ~ 50')

   click('Delete')
   expect(getTextContent('currentNode')).toBe('Current Node: Doggy ~ 10')
   screen.getByText(/size: 2/i)

   click('Prev Node')
   expect(getTextContent('currentNode')).toBe('Current Node (Head): Doggy ~ 10')

   click('Next Node')
   expect(getTextContent('currentNode')).toBe('Current Node (Tail): Cats ~ 50')

   fireEvent.change(subject, { target: { value: 'DOO' } })
   fireEvent.change(amount, { target: { value: 5 } })
   click('Add')

   fireEvent.change(subject, { target: { value: 'DAA' } })
   fireEvent.change(amount, { target: { value: 2 } })
   click('Add')

   screen.getByText(/size: 4/i)
   expect(getTextContent('currentNode')).toBe('Current Node: DAA ~ 2')
   click('First Node')
   expect(getTextContent('currentNode')).toBe('Current Node (First): Doggy ~ 10')
   click('Last Node')
   expect(getTextContent('currentNode')).toBe('Current Node (Last): Cats ~ 50')
   click('Delete')
   expect(getTextContent('currentNode')).toBe('Current Node: DOO ~ 5')

   fireEvent.change(subject, { target: { value: 'DAA' } })
   fireEvent.change(amount, { target: { value: 5 } })
   click('Add')
   screen.getByText(/size: 4/i)

   //| Doggy - 10 | DAA - 2 | DAA - 5 | DOO - 5

   fireEvent.change(searchInput, { target: { value: 'DAA' } })
   click('Sort by Subject')
   expect(getTextContent('list')).toContain(' | DAA ~ 2\n | DAA ~ 5')

   fireEvent.change(searchInput, { target: { value: 5 } })
   click('Sort by Amount')
   expect(getTextContent('list')).toContain(' | DAA ~ 5\n | DOO ~ 5')

   fireEvent.change(subject, { target: { value: 'Middle' } }) //Current Node
   fireEvent.change(amount, { target: { value: 2 } })
   click('Add')

   //| DOG | DAA | MIDDLE | DAA | DOO 

   expect(getTextContent('currentNode')).toBe('Current Node: Middle ~ 2')
   click('Next Node')
   expect(getTextContent('currentNode')).toBe('Current Node: DAA ~ 5')
   click('Prev Node')
   expect(getTextContent('currentNode')).toBe('Current Node: Middle ~ 2')
})

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}

function getTextContent(id) {
   return document.getElementById(id).textContent
}