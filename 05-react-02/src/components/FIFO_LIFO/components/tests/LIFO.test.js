import React from 'react'
import LIFO from '../LIFO'
import { fireEvent, screen, render } from '@testing-library/react'
import Stacks from '../../business/lifo.js'

test('Testing adding to list with LIFO and removing', () => {
   const lifo = new Stacks()
   const tempElephant = {
      name: 'Willy',
      species: 'African',
      gender: 'female',
      about: 'Big feet, loves to play in puddles'
   }

   lifo.push(tempElephant)

   const mockRemoveCallback = jest.fn()
   const mockLIFOMsgCallback = jest.fn()
   const mockUserMsgCallback = jest.fn()

   render(
      <LIFO
         LIFOelephants={lifo.storage}
         LIFOTail={lifo.peek()}
         LIFOSize={lifo.size}
         LIFOMsg={mockLIFOMsgCallback}
         userMsg={mockUserMsgCallback}
         remove={mockRemoveCallback}
      />)

   screen.getByText('Tail: Willy')
   screen.getByText(/Big feet, loves to play in puddles/i)

   click('Take Out LIFO')

   expect(mockRemoveCallback.mock.calls.length).toBe(1)
   expect(mockLIFOMsgCallback.mock.calls[0][0]).toBe('Removed Willy')
})

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}