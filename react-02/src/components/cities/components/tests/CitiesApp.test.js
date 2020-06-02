import React from 'react'
import { fireEvent, screen, render, act } from '@testing-library/react'
import CitiesApp from '../CitiesApp'

test('Testing CitiesApp', async () => {
   const fakeCities = [
      { key: 1, name: 'Calgary', latitude: 5, longitude: 10, population: 1000 },
      { key: 2, name: 'Bragg Creek', latitude: 10, longitude: 10, population: 100 },
   ];

   jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
         json: () => Promise.resolve(fakeCities)
      })
   );

   await act(async () => {
      render(<CitiesApp

      />)
   })

   expect(document.getElementById('total').textContent).toBe('Total Population:1100')
   expect(document.getElementById('north').textContent).toBe('Most Northern City:Bragg Creek at 10°')
   expect(document.getElementById('south').textContent).toBe('Most Southern City:Calgary at 5°')

   click('Save')

   screen.getByText(/Please enter a city name/)

   expect(document.getElementById('addMsg').textContent).toBe('*Please enter a city name')
})

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}

