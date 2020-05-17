import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import EditAccounts from './EditAccounts'

test('Test dropdown for accounts', () => {
   const mockAccounts = {
      1: { accountName: 'House', balance: 100, key: '0' },
      2: { accountName: 'Cats', balance: 1000, key: '1' }
   }

   render(<EditAccounts
      accounts={mockAccounts}
   />)

   //getByDisplayValue shows selected value of select dropdwon
   //screen.getByDisplayValue('House - $100')
   screen.getByText('House - $100')
   screen.getByText('Cats - $1000')

})

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}