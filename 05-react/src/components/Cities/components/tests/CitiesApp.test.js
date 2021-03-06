import React from 'react'
import { fireEvent, screen, render, act } from '@testing-library/react'
import CitiesApp from '../CitiesApp'

test('Testing CitiesApp', async () => {
   const fakeCities = [
      { key: 1, name: 'Calgary', latitude: 5, longitude: 10, population: 1000 },
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

   expect(document.getElementById('total').textContent).toBe('Total Population:1000')
   expect(document.getElementById('north').textContent).toBe('Most Northern City:Calgary at 5°')
   expect(document.getElementById('south').textContent).toBe('Most Southern City:Calgary at 5°')

   click('Save')
   screen.getByText(/Please enter a city name/)
   expect(document.getElementById('errorMsg').textContent).toBe('*Please enter a city name')

   screen.getByText('Calgary')
   click(/Moved In/i)
   expect(document.getElementById('errorMsg').textContent).toBe('Population increase must be atleast 1')

   let input = screen.getByTestId('content-input')

   fireEvent.change(input, { target: { value: '23' } })
   await act(async () => {
      click(/Moved In/i)
   })
   expect(document.getElementById('addMsg').textContent).toBe('23 moved to Calgary')

   fireEvent.change(input, { target: { value: '2' } })
   await act(async () => {
      click(/Moved Out/i)
   })
   expect(document.getElementById('addMsg').textContent).toBe('2 moved out from Calgary')

   await act(async () => {
      click(/Delete/i)
   })
   expect(document.getElementById('addMsg').textContent).toBe('Deleted city')

   await act(async () => {
      click(/Random City/i)
   })
   screen.getByText('Loaded a random city')

   updateValue('name', 'Doggy City')
   updateValue('population', 2000)
   updateValue('latitude', 20)
   updateValue('longitude', 2)
   await act(async () => {
      click(/Save/i)
   })
   expect(document.getElementById('addMsg').textContent).toBe('Saved Doggy City')
})

function updateValue(name, value) {
   document.querySelector(`[name=${name}]`).value = value;
}

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}

