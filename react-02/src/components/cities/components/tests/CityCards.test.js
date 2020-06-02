import React from 'react'
import { fireEvent, render, screen, act } from '@testing-library/react';
import CityCards from '../CityCards'
import funcs from '../../business/functions'
import { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });

describe('<CityCards/>', () => {
   const cityCtrl = new funcs.Community()

   const mockMoveInCallBack = jest.fn()
   const mockMoveOutCallBack = jest.fn()
   const mockDeleteCallBack = jest.fn()
   const mockMsgCallBack = jest.fn()
   const mockHandleInput = jest.fn()

   const fakeCities = {
      1: { key: 1, name: 'Calgary', latitude: 5, longitude: 10, population: 1000 }
   };

   let wrapper = mount(<CityCards
      cityCtrl={cityCtrl}
      cities={fakeCities}
      userMsg={mockMsgCallBack}
      moveIn={mockMoveInCallBack}
      moveOut={mockMoveOutCallBack}
      deleteCard={mockDeleteCallBack}
   />)

   it('should match snapshot?', () => {
      expect(wrapper).toMatchSnapshot()
   })

   it('card should show name, lat, long, pop, etc.', () => {
      // wrapper.find('#inputChange').simulate('change', { target: { value: 5 } });
      console.log(wrapper.debug())

      // screen.getByText('Calgary')

      // expect(getValue('inputChange')).toBe(5)

      // click(/Moved In/i)

      // expect(mockMsgCallBack.mock.calls.length).toBe(1)

   })
});


test('Test the Create City form', () => {
   const cityCtrl = new funcs.Community()

   const mockMoveInCallBack = jest.fn()
   const mockMoveOutCallBack = jest.fn()
   const mockDeleteCallBack = jest.fn()
   const mockMsgCallBack = jest.fn()
   const mockHandleInput = jest.fn()

   const fakeCities = {
      1: { key: 1, name: 'Calgary', latitude: 5, longitude: 10, population: 1000 }
   };

   render(<CityCards
      cityCtrl={cityCtrl}
      cities={fakeCities}
      userMsg={mockMsgCallBack}
      moveIn={mockMoveInCallBack}
      moveOut={mockMoveOutCallBack}
      deleteCard={mockDeleteCallBack}
   />)

   screen.getByText('Calgary')

   updateValue('inputChange', 5)
   // expect(getValue('input')).toBe(5)

   click(/Moved In/i)

   expect(mockMsgCallBack.mock.calls.length).toBe(1)
   expect(mockMsgCallBack.mock.calls[0][0]).toBe('')

   expect(mockMoveInCallBack.mock.calls.length).toBe(1)
})

function getValue(name) {
   return document.querySelector(`[name=${name}]`).value;
}

function updateValue(name, value) {
   document.querySelector(`[name=${name}]`).value = value;
}

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}