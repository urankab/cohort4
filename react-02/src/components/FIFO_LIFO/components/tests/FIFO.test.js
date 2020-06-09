import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import FIFO from '../FIFO'
import Queues from '../../business/fifo.js'

test('Testing adding to FIFO list and removing', () => {
   const fifo = new Queues()
   const tempElephant = {
      name: 'Amber',
      species: 'Magical',
      gender: 'female',
      about: 'Can summon evil apples'
   }

   fifo.enqueue(tempElephant)

   const mockRemoveCallback = jest.fn()
   const mockFIFOMsgCallback = jest.fn()
   const mockUserMsgCallback = jest.fn()

   render(
      <FIFO
         FIFOelephants={fifo.storage}
         FIFOHead={fifo.peek()}
         FIFOSize={fifo.size}
         FIFOMsg={mockFIFOMsgCallback}
         userMsg={mockUserMsgCallback}
         remove={mockRemoveCallback}
      />)

   screen.getByText('Head: Amber')
   screen.getByText(/Can summon evil apples/i)

   click('Take Out FIFO')

   expect(mockRemoveCallback.mock.calls.length).toBe(1)
   expect(mockFIFOMsgCallback.mock.calls[0][0]).toBe('Removed Amber')
})

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}