import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import AccCtrl from '../AccCtrl'
import { AccountController } from '../../business/functions'


test('Testing some validation - missing dep/withdraw fields', () => {
   const acctCtrl = new AccountController()
   const accounts = acctCtrl.accounts

   const mockUserMsgCallBack = jest.fn()
   const mockEditMsgCallBack = jest.fn()
   const mockUpdateSumCallBack = jest.fn()

   const mockDeleteCallBack = jest.fn()
   const mockRenameCallBack = jest.fn()

   acctCtrl.addAccount({ accountName: 'Doggy', balance: 10 })

   render(<AccCtrl
      acctCtrl={acctCtrl}
      accounts={accounts}
      userMsg={mockUserMsgCallBack}
      userEditMsg={mockEditMsgCallBack}

      updateSummary={mockUpdateSumCallBack}
      delete={mockDeleteCallBack}
      rename={mockRenameCallBack}
   />)

   screen.getByText('Doggy - $10')

   click('Deposit')

   expect(mockEditMsgCallBack.mock.calls.length).toBe(1)
   expect(mockEditMsgCallBack.mock.calls[0][0]).toBe('Please enter an amount to deposit')

   click('Withdraw')
   expect(mockEditMsgCallBack.mock.calls[1][0]).toBe('Please enter an amount to withdraw')

   let e = document.getElementById('dropdown')
   let value = e.options[e.selectedIndex].value
   expect(value).toBe('Doggy')

   click('Delete Account')
   expect(mockEditMsgCallBack.mock.calls[2][0]).toBe('Deleted Doggy')
})

test('Testing some validation - no accounts', () => {
   const acctCtrl = new AccountController()
   const accounts = acctCtrl.accounts

   const mockUserMsgCallBack = jest.fn()
   const mockEditMsgCallBack = jest.fn()
   const mockUpdateSumCallBack = jest.fn()

   const mockDeleteCallBack = jest.fn()
   const mockRenameCallBack = jest.fn()

   render(<AccCtrl
      acctCtrl={acctCtrl}
      accounts={accounts}
      userMsg={mockUserMsgCallBack}
      userEditMsg={mockEditMsgCallBack}

      updateSummary={mockUpdateSumCallBack}
      delete={mockDeleteCallBack}
      rename={mockRenameCallBack}
   />)

   click('Deposit')

   expect(mockEditMsgCallBack.mock.calls[0][0]).toBe('No accounts to deposit too')

   click('Withdraw')
   expect(mockEditMsgCallBack.mock.calls[1][0]).toBe('No accounts to withdraw from')

   click('Delete Account')
   expect(mockEditMsgCallBack.mock.calls[2][0]).toBe('No accounts to delete')

   click('Change Name')
   expect(mockEditMsgCallBack.mock.calls[3][0]).toBe('No accounts to rename')
})

test('Test validation, depositing/withdrawing to accounts', () => {
   const acctCtrl = new AccountController()
   const accounts = acctCtrl.accounts

   const mockUserMsgCallBack = jest.fn()
   const mockEditMsgCallBack = jest.fn()
   const mockUpdateSumCallBack = jest.fn()

   acctCtrl.addAccount({ accountName: 'Kitty', balance: 100 })
   acctCtrl.addAccount({ accountName: 'Doggy', balance: 10 })

   render(<AccCtrl
      acctCtrl={acctCtrl}
      accounts={accounts}
      userMsg={mockUserMsgCallBack}
      userEditMsg={mockEditMsgCallBack}
      updateSummary={mockUpdateSumCallBack}
   />)

   screen.getByText('Kitty - $100')
   screen.getByText('Doggy - $10')

   updateValue('amount', 100)

   let e = document.getElementById('dropdown')
   let value = e.options[e.selectedIndex].value
   expect(value).toBe('Kitty')

   click('Deposit')

   expect(mockEditMsgCallBack.mock.calls.length).toBe(1)
   expect(mockEditMsgCallBack.mock.calls[0][0]).toBe('Deposited $100 to Kitty')

   fireEvent.change(screen.getByLabelText('Select Account:'), {
      target: { value: 'Doggy' }
   })

   updateValue('amount', 2)

   click('Withdraw')

   expect(mockEditMsgCallBack.mock.calls.length).toBe(2)
   expect(mockEditMsgCallBack.mock.calls[1][0]).toBe('Withdrawed $2 to Doggy')
})

test('Test dropdown, renaming accounts & validation', () => {
   const acctCtrl = new AccountController()
   const accounts = acctCtrl.accounts

   const mockRenameCallBack = jest.fn()
   const mockUserMsgCallBack = jest.fn()
   const mockEditMsgCallBack = jest.fn()
   const mockUpdateSumCallBack = jest.fn()

   acctCtrl.addAccount({ accountName: 'Kitty', balance: 100 })
   acctCtrl.addAccount({ accountName: 'Doggy', balance: 10 })
   expect(Object.values(acctCtrl.accounts)[0]).toEqual({ "accountName": "Kitty", "balance": 100, "key": 1 })
   expect(Object.values(acctCtrl.accounts)[1]).toEqual({ "accountName": "Doggy", "balance": 10, "key": 2 })

   render(<AccCtrl
      acctCtrl={acctCtrl}
      accounts={accounts}
      rename={mockRenameCallBack}
      userMsg={mockUserMsgCallBack}
      userEditMsg={mockEditMsgCallBack}
      updateSummary={mockUpdateSumCallBack}
   />)

   screen.getByText('Kitty - $100')
   screen.getByText('Doggy - $10')

   let e = document.getElementById('dropdown')
   let value = e.options[e.selectedIndex].value
   expect(value).toBe('Kitty')

   click('Change Name')

   expect(mockRenameCallBack.mock.calls.length).toBe(0)
   expect(mockEditMsgCallBack.mock.calls.length).toBe(1)
   expect(mockEditMsgCallBack.mock.calls[0][0]).toBe('Please enter a new name')

   updateValue('renameField', 'Cats')
   click('Change Name')

   expect(mockRenameCallBack.mock.calls.length).toBe(1)
   expect(mockEditMsgCallBack.mock.calls.length).toBe(2)
   expect(mockEditMsgCallBack.mock.calls[1][0]).toBe('Renamed Kitty')

   fireEvent.change(screen.getByLabelText('Select Account:'), {
      target: { value: 'Doggy' }
   })

   updateValue('renameField', 'PUPPERS')
   click('Change Name')

   expect(mockRenameCallBack.mock.calls.length).toBe(2)
   expect(mockEditMsgCallBack.mock.calls.length).toBe(3)
   expect(mockEditMsgCallBack.mock.calls[2][0]).toBe('Renamed Doggy')
})

test('Test deleting accounts', () => {
   const acctCtrl = new AccountController()
   const accounts = acctCtrl.accounts

   const mockDeleteCallBack = jest.fn()
   const mockUserMsgCallBack = jest.fn()
   const mockEditMsgCallBack = jest.fn()
   const mockUpdateSumCallBack = jest.fn()

   acctCtrl.addAccount({ accountName: 'Kitty', balance: 100 })
   acctCtrl.addAccount({ accountName: 'Doggy', balance: 10 })

   render(<AccCtrl
      acctCtrl={acctCtrl}
      accounts={accounts}
      delete={mockDeleteCallBack}
      userMsg={mockUserMsgCallBack}
      userEditMsg={mockEditMsgCallBack}
      updateSummary={mockUpdateSumCallBack}
   />)

   screen.getByText('Kitty - $100')
   screen.getByText('Doggy - $10')

   let e = document.getElementById('dropdown')
   let value = e.options[e.selectedIndex].value
   expect(value).toBe('Kitty')

   click('Delete Account')

   expect(mockDeleteCallBack.mock.calls.length).toBe(1)
   expect(mockEditMsgCallBack.mock.calls.length).toBe(1)
   expect(mockEditMsgCallBack.mock.calls[0][0]).toBe('Deleted Kitty')

   fireEvent.change(screen.getByLabelText('Select Account:'), {
      target: { value: 'Doggy' }
   })

   click('Delete Account')

   expect(mockDeleteCallBack.mock.calls.length).toBe(2)
   expect(mockEditMsgCallBack.mock.calls.length).toBe(2)
   expect(mockEditMsgCallBack.mock.calls[1][0]).toBe('Deleted Doggy')
})

function updateValue(name, value) {
   document.querySelector(`[id=${name}]`).value = value;
}

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}