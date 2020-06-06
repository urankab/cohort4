import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import CityCards from '../CityCards'
import funcs from '../../business/functions'

test('Test the card Move In/Out functionality', () => {
   const cityCtrl = new funcs.Community()

   const mockMoveInCallBack = jest.fn()
   const mockMoveOutCallBack = jest.fn()
   const mockDeleteCallBack = jest.fn()
   const mockMsgCallBack = jest.fn()
   const mockErrorMsgCallBack = jest.fn()
   const mockHandleChangeCallBack = jest.fn()

   const fakeCities = {
      1: { key: 1, name: 'Calgary', latitude: 5, longitude: 10, population: 1000 }
   };

   cityCtrl.cities = fakeCities

   render(<CityCards
      cityCtrl={cityCtrl}
      cities={cityCtrl.cities}
      userMsg={mockMsgCallBack}
      errorMsg={mockErrorMsgCallBack}
      moveIn={mockMoveInCallBack}
      moveOut={mockMoveOutCallBack}
      deleteCard={mockDeleteCallBack}
      handleInputChange={mockHandleChangeCallBack}
   />)

   screen.getByText('Calgary')

   click(/Moved In/i)

   expect(mockErrorMsgCallBack.mock.calls.length).toBe(1)
   expect(mockErrorMsgCallBack.mock.calls[0][0]).toBe('Population increase must be atleast 1')

   let input = screen.getByTestId('content-input')
   fireEvent.change(input, { target: { value: '23' } })

   click(/Moved In/i)

   expect(mockMsgCallBack.mock.calls.length).toBe(2)
   expect(mockMsgCallBack.mock.calls[1][0]).toBe('23 moved to Calgary')

   click(/Moved Out/i)
   expect(mockErrorMsgCallBack.mock.calls.length).toBe(3)
   expect(mockErrorMsgCallBack.mock.calls[2][0]).toBe('Please enter a value to move out')

   fireEvent.change(input, { target: { value: '5' } })

   click(/Moved Out/i)

   expect(mockMsgCallBack.mock.calls.length).toBe(4)
   expect(mockMsgCallBack.mock.calls[3][0]).toBe('5 moved out from Calgary')

   // console.log(cityCtrl)

   click(/Delete/i)

   expect(mockMsgCallBack.mock.calls.length).toBe(5)
   expect(mockMsgCallBack.mock.calls[4][0]).toBe('Deleted city')
})

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}
