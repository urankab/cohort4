import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import AccCtrl from '../AccCtrl'
import { AccountController } from '../../business/functions'

test('Test dropdown and renaming accounts', () => {
   const acctCtrl = new AccountController()
   const accounts = acctCtrl.accounts

   const mockUserMsgCallBack = jest.fn()

   // const mockDepositCallBack = jest.fn()
   const mockRenameCallBack = jest.fn()
   const mockOnRename = jest.fn()
   // const mockDeleteCallBack = jest.fn()

   acctCtrl.addAccount({ accountName: 'Kitty', balance: 100 })
   acctCtrl.addAccount({ accountName: 'Doggy', balance: 10 })
   expect(Object.values(acctCtrl.accounts)[0]).toEqual({ "accountName": "Kitty", "balance": 100, "key": 1 })
   expect(Object.values(acctCtrl.accounts)[1]).toEqual({ "accountName": "Doggy", "balance": 10, "key": 2 })

   render(<AccCtrl
      accounts={accounts}
      onRename={mockOnRename}

      userEditMsg={mockUserMsgCallBack}
      // deposit={mockDepositCallBack}
      rename={mockRenameCallBack}
   // delete={mockDeleteCallBack}
   />)

   screen.getByText('Kitty - $100')
   screen.getByText('Doggy - $10')

   click('Change Name')

   let e = document.getElementById('dropdown')
   let value = e.options[e.selectedIndex].value
   expect(value).toBe('Kitty')

   expect(mockRenameCallBack.mock.calls.length).toBe(0)
   expect(mockUserMsgCallBack.mock.calls.length).toBe(1)
   expect(mockUserMsgCallBack.mock.calls[0][0]).toBe('Please enter a new name')

   updateValue('renameField', 'Cats')
   click('Change Name')

   expect(mockRenameCallBack.mock.calls.length).toBe(1)
   expect(mockUserMsgCallBack.mock.calls.length).toBe(2)
   expect(mockUserMsgCallBack.mock.calls[1][0]).toBe('Renamed Kitty')
})

test('Test dropdown and renaming accounts', () => {
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

   let secondSelected = document.getElementById('dropdown').selectedIndex = '1'
   expect(secondSelected).toBe('1')
   let w = document.getElementById('dropdown')
   let valuew = w.options[w.selectedIndex].value
   expect(valuew).toBe('Doggy')

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