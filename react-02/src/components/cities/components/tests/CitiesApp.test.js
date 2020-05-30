import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import CitiesApp from '../CitiesApp'

test('Testing CitiesApp', () => {
   render(<CitiesApp
   />)

   screen.getByText(/Cities/)

   click('Create City')

   screen.getByText(/Please enter a city name/)

   expect(document.getElementById('addMsg').textContent).toBe('Please enter a city name')
})

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}