import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import CityForm from '../CityForm'
import funcs from '../../business/functions'


test('Test the Create City form validation', () => {
   const cityCtrl = new funcs.Community()
   const city = cityCtrl.getNewCity()

   const mockSaveCallBack = jest.fn()
   const mockMsgCallBack = jest.fn()
   const mockErrorMsgCallBack = jest.fn()
   const mockRandomCity = jest.fn()

   city.name = 'Calgary'
   city.population = 100
   city.latitude = 2
   city.longitude = 3

   render(<CityForm
      city={city}
      save={mockSaveCallBack}
      userMsg={mockMsgCallBack}
      errorMsg={mockErrorMsgCallBack}
      randomCity={mockRandomCity}
   />)

   expect(getValue('name')).toBe('Calgary');

   updateValue('name', '')
   updateValue('latitude', '')
   updateValue('longitude', '')
   updateValue('population', '')

   expect(getValue('name')).toBe('');

   click('Save')

   expect(mockErrorMsgCallBack.mock.calls.length).toBe(1)
   expect(mockErrorMsgCallBack.mock.calls[0][0]).toMatch(/Please enter a city name/i)

   updateValue('name', 'Doggy City')

   click('Save')

   expect(mockErrorMsgCallBack.mock.calls.length).toBe(2)
   expect(mockErrorMsgCallBack.mock.calls[1][0]).toMatch(/Population cannot be blank/i)

   updateValue('population', 2000)

   click('Save')

   expect(mockErrorMsgCallBack.mock.calls.length).toBe(3)
   expect(mockErrorMsgCallBack.mock.calls[2][0]).toMatch(/Please enter the latitude/i)

   updateValue('latitude', 20)

   click('Save')

   expect(mockErrorMsgCallBack.mock.calls.length).toBe(4)
   expect(mockErrorMsgCallBack.mock.calls[3][0]).toMatch(/Please enter the longitude/i)

   updateValue('longitude', 2)

   click('Save')
   expect(mockMsgCallBack.mock.calls.length).toBe(5)
   expect(mockMsgCallBack.mock.calls[4][0]).toMatch(/Saved Doggy City/)

   click('Random City')
   expect(mockMsgCallBack.mock.calls.length).toBe(6)
   expect(mockMsgCallBack.mock.calls[5][0]).toMatch(/Loaded a random city/)
})

function getValue(name) {
   return document.querySelector(`[name=${name}]`).value
}

function updateValue(name, value) {
   document.querySelector(`[name=${name}]`).value = value;
}

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}