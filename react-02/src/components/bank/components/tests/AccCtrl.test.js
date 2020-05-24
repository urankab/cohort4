import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import AccCtrl from '../AccCtrl'
import { Account, AccountController } from '../../business/functions'

test('Test dropdown for accounts', () => {
   const acctCtrl = new AccountController()
   const accounts = acctCtrl.accounts
   const selectedName = acctCtrl.selectedName

   const mockUserMsgCallBack = jest.fn()
   const mockGetTheName = jest.fn()
   const mockDeleteCallBack = jest.fn()

   acctCtrl.addAccount({ accountName: 'Kitty', balance: 100 })
   acctCtrl.addAccount({ accountName: 'Doggy', balance: 10 })
   expect(Object.values(acctCtrl.accounts)[0]).toEqual({ "accountName": "Kitty", "balance": 100, "key": 1 })
   expect(Object.values(acctCtrl.accounts)[1]).toEqual({ "accountName": "Doggy", "balance": 10, "key": 2 })

   render(<AccCtrl
      accounts={accounts}
      selectedName={selectedName}
      userMsg={mockUserMsgCallBack}
      getTheName={mockGetTheName}
      delete={mockDeleteCallBack}
   />)

   screen.getByText('Kitty - $100')
   screen.getByText('Doggy - $10')

   click('Kitty - $100')

   click('Delete Account')
   expect(mockDeleteCallBack.mock.calls.length).toBe(1)

   // screen.debug()

   //getByDisplayValue shows selected value of select dropdwon
   //screen.getByDisplayValue('House - $100')

})

function getValue(name) {
   return document.querySelector(`[name=${name}]`).value
}

function getTextContent(name) {
   return document.getElementById(`${name}`).textContent;
}

function updateValue(name, value) {
   document.querySelector(`[id=${name}]`).value = value;
}

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}