import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CreateAccount from '../CreateAccount'
import { Account, AccountController } from '../../business/functions'

test('Test the Create Account form', () => {
   const acctCtrl = new AccountController()
   const account = acctCtrl.getDefaults()

   const mockAddCallBack = jest.fn()
   const mockMsgCallBack = jest.fn()
   const mockCheckNameCallBack = jest.fn()
   const mockMsgTxtCallBack = ''

   //Creating default values for an account
   account.accountName = 'House'
   account.balance = 100;
   account.key = 1;

   render(<CreateAccount
      add={mockAddCallBack}
      account={account}
      userMsg={mockMsgCallBack}
      checkName={mockCheckNameCallBack}
      message={mockMsgTxtCallBack}
   />)

   //Check that the names rendered to the input text defaultValue
   expect(getValue('accountName')).toBe('House');
   expect(getValue('balance')).toBe('100');

   click('Create Account')

   expect(mockAddCallBack.mock.calls.length).toBe(1)

   const addAccount = mockAddCallBack.mock.calls[0][0]

   expect(addAccount.accountName).toBe('House')
   expect(addAccount.balance).toBe('100')
   expect(addAccount.key).toBe(1)
})

test('Test validation of the form', () => {
   const acctCtrl = new AccountController()
   const account = acctCtrl.getDefaults()
   const accounts = acctCtrl.accounts

   const mockAddCallBack = jest.fn()
   const mockMsgCallBack = jest.fn()
   const mockCheckNameCallBack = jest.fn()

   render(<CreateAccount
      checkName={mockCheckNameCallBack}
      add={mockAddCallBack}
      account={account}
      accounts={accounts}
      userMsg={mockMsgCallBack}
   />)

   click('Create Account')

   //Expecting input values to be the default values
   expect(getValue('accountName')).toBe('')
   expect(getValue('balance')).toBe('')

   expect(mockAddCallBack.mock.calls.length).toBe(0)
   expect(mockMsgCallBack.mock.calls.length).toBe(1)
   expect(mockMsgCallBack.mock.calls[0][0]).toMatch(/Please enter an account name/)

   updateValue('accountName', 'House')
   click('Create Account')

   expect(getValue('accountName')).toBe('House')
   expect(mockAddCallBack.mock.calls.length).toBe(0)
   expect(mockMsgCallBack.mock.calls.length).toBe(2)
   expect(mockMsgCallBack.mock.calls[1][0]).toMatch(/Please enter a starting balance/)

   updateValue('balance', '100')
   click('Create Account')

   expect(mockAddCallBack.mock.calls.length).toBe(1)
   expect(mockMsgCallBack.mock.calls.length).toBe(3)
   expect(mockMsgCallBack.mock.calls[2][0]).toMatch(/Created House account/)

   const fakeAccount = mockAddCallBack.mock.calls[0][0]
   expect(fakeAccount.accountName).toBe('House')
   expect(fakeAccount.balance).toBe('100')
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