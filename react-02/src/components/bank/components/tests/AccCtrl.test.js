import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import AccCtrl from '../AccCtrl'
import funcs from '../../business/functions'

test('Test dropdown for accounts', () => {
   const acctCtrl = new funcs.AccountController()
   const mockAccounts = acctCtrl.accounts
   const mockUserMsgCallBack = jest.fn()

   acctCtrl.addAccount({ accountName: 'Kitty', balance: 100 })
   acctCtrl.addAccount({ accountName: 'Doggy', balance: 10 })
   expect(Object.values(acctCtrl.accounts)[0]).toEqual({ "accountName": "Kitty", "balance": 100, "key": 1 })
   expect(Object.values(acctCtrl.accounts)[1]).toEqual({ "accountName": "Doggy", "balance": 10, "key": 2 })

   render(<AccCtrl
      accounts={mockAccounts}
      userMsg={mockUserMsgCallBack}
   />)

   screen.getByText('Kitty - $100')
   screen.getByText('Doggy - $10')

   //getByDisplayValue shows selected value of select dropdwon
   //screen.getByDisplayValue('House - $100')

})

// test('Test dropdown for accounts', () => {
//    const mockAccounts = {
//       1: { accountName: 'House', balance: 100, key: '0' },
//       2: { accountName: 'Cats', balance: 1000, key: '1' }
//    }

//    render(<AccCtrl
//       accounts={mockAccounts}
//    />)

//    screen.getByText('House - $100')
//    screen.getByText('Cats - $1000')

//    //getByDisplayValue shows selected value of select dropdwon
//    //screen.getByDisplayValue('House - $100')

// })

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