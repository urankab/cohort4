import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import CityForm from '../CityForm'
import funcs from '../../business/functions'


test('Test the Create City form validation', () => {
   const cityCtrl = new funcs.Community()
   const cities = cityCtrl.cities
   const city = cityCtrl.getNewCity()

   const mockSaveCallBack = jest.fn()
   const mockMsgCallBack = jest.fn()

   city.name = 'Calgary'
   city.population = 100
   city.latitude = 2
   city.longitude = 3

   render(<CityForm
      city={city}
      save={mockSaveCallBack}
      userMsg={mockMsgCallBack}
   />)

   expect(getValue('name')).toBe('Calgary');
   expect(getValue('population')).toBe('100');

   click('Save')

   //Not working, it is saving it for some reason
   expect(mockSaveCallBack.mock.calls.length).toBe(0)
   expect(mockMsgCallBack.mock.calls.length).toBe(1)
   expect(mockMsgCallBack.mock.calls[0][0]).toMatch(/Please enter an account name/)
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