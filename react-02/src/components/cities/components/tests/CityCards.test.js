import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import CityCards from '../CityCards'
import funcs from '../../business/functions'

test('Test the Create City form', () => {
   const cityCtrl = new funcs.Community()
   const cities = cityCtrl.cities

   const MockMoveInCallBack = jest.fn()
   const MockMoveOutCallBack = jest.fn()
   const MockDeleteCallBack = jest.fn()

   cityCtrl.addOrUpdate({ name: 'Pho City', population: 12, latitude: 4, longitude: 8 })

   render(<CityCards
      cities={cities}
      moveIn={MockMoveInCallBack}
      moveOut={MockMoveOutCallBack}
      deleteCard={MockDeleteCallBack}
   />)

   //Only showing return before adding cards?
   // screen.getByText('Pho City')

})