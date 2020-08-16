import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import ListDisplay from '../ListDisplay'

test('Test that everything loaded as expected', async () => {

   render(<ListDisplay />)

   screen.getByText('Create your Elephant')
   screen.getByText('LIFO - Stacks')
   screen.getByText('FIFO - Queues')

   click('Take Out LIFO')
   click('Take Out FIFO')
   screen.getAllByText('Nothing to remove')

   updateValue('name', 'Jello')
   updateValue('species', 'African')
   updateValue('gender', 'male')
   updateValue('about', 'Beautiful and cute elephant')

   click('Add LIFO')
   screen.getByText(/Added Jello to LIFO/i)
   click('Take Out LIFO')
   screen.getByText(/Removed Jello/i)

   updateValue('name', 'Jello')
   updateValue('species', 'African')
   updateValue('gender', 'male')
   updateValue('about', 'Beautiful and cute elephant')

   click('Add FIFO')
   screen.getByText(/Added Jello to FIFO/i)
   click('Take Out FIFO')
   screen.getAllByText(/Removed Jello/i)
})

function updateValue(name, value) {
   document.querySelector(`[id=${name}]`).value = value;
}

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}
