import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import AccCtrl from '../AccCtrl'
import { AccountController } from '../../business/functions'

test('Test depositing/withdrawing to accounts', () => {
   const acctCtrl = new AccountController()
   const accounts = acctCtrl.accounts

   const mockUserMsgCallBack = jest.fn()

   acctCtrl.addAccount({ accountName: 'Kitty', balance: 100 })
   acctCtrl.addAccount({ accountName: 'Doggy', balance: 10 })

   render(<AccCtrl
      accounts={accounts}
      userEditMsg={mockUserMsgCallBack}
   />)

   screen.getByText('Kitty - $100')
   screen.getByText('Doggy - $10')

   // fireEvent.change(screen.getByLabelText('Select Account:'), {
   //    target: { value: 'Doggy' }
   // })

   updateValue('amount', 100)

   click('Deposit')

   expect(mockUserMsgCallBack.mock.calls.length).toBe(1)
   expect(mockUserMsgCallBack.mock.calls[0][0]).toBe('Deposited $100 to Kitty')

   screen.getByText('Kitty - $200')
})

test('Test dropdown, renaming accounts & validation', () => {
   const acctCtrl = new AccountController()
   const accounts = acctCtrl.accounts

   const mockUserMsgCallBack = jest.fn()
   const mockRenameCallBack = jest.fn()
   // const mockLengthState = ''

   acctCtrl.addAccount({ accountName: 'Kitty', balance: 100 })
   acctCtrl.addAccount({ accountName: 'Doggy', balance: 10 })
   expect(Object.values(acctCtrl.accounts)[0]).toEqual({ "accountName": "Kitty", "balance": 100, "key": 1 })
   expect(Object.values(acctCtrl.accounts)[1]).toEqual({ "accountName": "Doggy", "balance": 10, "key": 2 })

   render(<AccCtrl
      accounts={accounts}
      userEditMsg={mockUserMsgCallBack}
      rename={mockRenameCallBack}
   // accLength={mockLengthState}
   />)

   screen.getByText('Kitty - $100')
   screen.getByText('Doggy - $10')

   // fireEvent.change(screen.getByLabelText('Select Account:'), {
   //    target: { value: 'Kitty' }
   // })

   let e = document.getElementById('dropdown')
   let value = e.options[e.selectedIndex].value
   expect(value).toBe('Kitty')

   click('Change Name')

   expect(mockRenameCallBack.mock.calls.length).toBe(1)
   expect(mockUserMsgCallBack.mock.calls.length).toBe(1)
   expect(mockUserMsgCallBack.mock.calls[0][0]).toBe('Please enter a new name')

   updateValue('renameField', 'Cats')
   click('Change Name')

   expect(mockRenameCallBack.mock.calls.length).toBe(1)
   expect(mockUserMsgCallBack.mock.calls.length).toBe(2)
   expect(mockUserMsgCallBack.mock.calls[1][0]).toBe('Renamed Kitty')
})

test('Test deleting accounts', () => {
   const acctCtrl = new AccountController()
   const accounts = acctCtrl.accounts

   const mockUserMsgCallBack = jest.fn()
   const mockDeleteCallBack = jest.fn()

   acctCtrl.addAccount({ accountName: 'Kitty', balance: 100 })
   acctCtrl.addAccount({ accountName: 'Doggy', balance: 10 })

   render(<AccCtrl
      accounts={accounts}
      userEditMsg={mockUserMsgCallBack}
      delete={mockDeleteCallBack}
   />)

   screen.getByText('Kitty - $100')
   screen.getByText('Doggy - $10')

   let e = document.getElementById('dropdown')
   let value = e.options[e.selectedIndex].value
   expect(value).toBe('Kitty')

   click('Delete Account')

   expect(mockDeleteCallBack.mock.calls.length).toBe(1)
   expect(mockUserMsgCallBack.mock.calls.length).toBe(1)
   expect(mockUserMsgCallBack.mock.calls[0][0]).toBe('Deleted Kitty')

   fireEvent.change(screen.getByLabelText('Select Account:'), {
      target: { value: 'Doggy' }
   })

   click('Delete Account')

   expect(mockDeleteCallBack.mock.calls.length).toBe(2)
   expect(mockUserMsgCallBack.mock.calls.length).toBe(2)
   expect(mockUserMsgCallBack.mock.calls[1][0]).toBe('Deleted Doggy')
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