import React from 'react'
import { fireEvent, screen, render, act } from '@testing-library/react'
import LinkedListDisplay from './LinkedListDisplay'
import { Node, LinkedList } from './business/index'

test('Test adding to the front of the list', () => {
   const ll = new LinkedList()

   render(<LinkedListDisplay />)

   screen.getByText(/linked list fun!/i)

   let subject = screen.getByPlaceholderText('Subject')
   let amount = screen.getByPlaceholderText('#')

   fireEvent.change(subject, { target: { value: 'Kitty' } })
   fireEvent.change(amount, { target: { value: 100 } })

   click('Add at Start')

   screen.getByText(/kitty - 100/i)
   // screen.debug()
})

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}