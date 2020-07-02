import React from 'react'
import { fireEvent, screen, render, act } from '@testing-library/react'
import CreateItem from '../CreateItem'

test('Testing form validation and adding a random elephant to LIFO', async () => {

   const tempElephant = [{
      name: 'Jane',
      species: 'Asian',
      gender: 'female',
      about: 'Big tummy'
   }]

   jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
         json: () => Promise.resolve(tempElephant)
      })
   );

   const mockAddToLIFOCallback = jest.fn()
   const mockUserMsgCallback = jest.fn()
   const mockLIFOMsgCallback = jest.fn()

   render(<CreateItem
      addToLIFO={mockAddToLIFOCallback}
      userMsg={mockUserMsgCallback}
      LIFOMsg={mockLIFOMsgCallback}
   />)

   click('Add LIFO')
   expect(document.getElementById('name')).toBe(document.activeElement)
   expect(mockUserMsgCallback.mock.calls.length).toBe(1)
   expect(mockUserMsgCallback.mock.calls[0][0]).toBe('Please enter a name')
   updateValue('name', 'Carl')

   click('Add LIFO')
   expect(document.getElementById('species')).toBe(document.activeElement)
   expect(mockUserMsgCallback.mock.calls[1][0]).toBe('Please enter a species')
   updateValue('species', 'African')

   click('Add LIFO')
   expect(document.getElementById('gender')).toBe(document.activeElement)
   expect(mockUserMsgCallback.mock.calls[2][0]).toBe('Please enter a gender')
   updateValue('gender', 'male')

   click('Add LIFO')
   expect(document.getElementById('about')).toBe(document.activeElement)
   expect(mockUserMsgCallback.mock.calls[3][0]).toBe('Please enter some info')
   updateValue('about', 'Beautiful and cute elephant')

   click('Add LIFO')
   expect(mockUserMsgCallback.mock.calls[4][0]).toBe('Added Carl to LIFO')

   await act(async () => {
      click('Get Random')
   });

   screen.getByDisplayValue('Jane')
   expect(document.getElementById('name').value).toBe('Jane')

   click('Add LIFO')

   expect(mockUserMsgCallback.mock.calls[5][0]).toBe('Added Jane to LIFO')
})

test('Testing form validation and adding a random elephant to FIFO', async () => {

   const tempElephant = [{
      name: 'Willy',
      species: 'African',
      gender: 'female',
      about: 'Big feet, loves to play in puddles'
   }]

   jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
         json: () => Promise.resolve(tempElephant)
      })
   );

   const mockAddToFIFOCallback = jest.fn()
   const mockUserMsgCallback = jest.fn()
   const mockFIFOMsgCallback = jest.fn()

   render(<CreateItem
      addToFIFO={mockAddToFIFOCallback}
      userMsg={mockUserMsgCallback}
      FIFOMsg={mockFIFOMsgCallback}
   />)

   await act(async () => {
      click('Get Random')
   });

   screen.getByDisplayValue('Willy')

   click('Add FIFO')

   expect(mockUserMsgCallback.mock.calls[0][0]).toBe('Added Willy to FIFO')

   click('Add FIFO')
   expect(document.getElementById('name')).toBe(document.activeElement)
   expect(mockUserMsgCallback.mock.calls[1][0]).toBe('Please enter a name')
   updateValue('name', 'Carl')

   click('Add FIFO')
   expect(document.getElementById('species')).toBe(document.activeElement)
   expect(mockUserMsgCallback.mock.calls[2][0]).toBe('Please enter a species')
   updateValue('species', 'African')

   click('Add FIFO')
   expect(document.getElementById('gender')).toBe(document.activeElement)
   expect(mockUserMsgCallback.mock.calls[3][0]).toBe('Please enter a gender')
   updateValue('gender', 'male')

   click('Add FIFO')
   expect(document.getElementById('about')).toBe(document.activeElement)
   expect(mockUserMsgCallback.mock.calls[4][0]).toBe('Please enter some info')
   updateValue('about', 'Beautiful and cute elephant')

   click('Add FIFO')
   expect(mockUserMsgCallback.mock.calls[5][0]).toBe('Added Carl to FIFO')
})

function updateValue(name, value) {
   document.querySelector(`[id=${name}]`).value = value;
}

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}