import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CreateAccount from '../CreateAccount'
import funcs from '../../business/functions'

test('Test error messages and verification', () => {
   const accCtrl = new funcs.AccountController()
   const newAccount = new funcs.Account()

   const mockCreateButton = jest.fn()
   const mockMsg = jest.fn()

   const acctCtrl = new funcs.AccountController()
   const mockAccounts = funcs.accArray
   const mockMsgTxt = ''

   const mockTotal = acctCtrl.totalBalance()
   const mockHighest = acctCtrl.highestAccount()
   const mockLowest = acctCtrl.lowestAccount()
   const mockShowAll = acctCtrl.showAll()

   // newAccount.accountName = 'House'
   // newAccount.balance = 100;
   // newAccount.key = 0;

   const fakeAcc = accCtrl.getNewAccount()
   fakeAcc.name = 'House'
   fakeAcc.balance = 100;

   render(<CreateAccount
      add={mockCreateButton}
      accounts={newAccount}
      userMsg={mockMsg}
      message={mockMsgTxt}

      totalStuff={mockTotal}
      highestStuff={mockHighest}
      lowestStuff={mockLowest}
      showAllAccts={mockShowAll}
   />)


   // Did the names render correctly
   expect(getValue('name')).toBe('House');
   expect(getValue('startBal')).toBe(100);

   // //Should ask for account name value
   // click('Create Account')

   // // console.log(mockCreateButton.mock.calls.length)

   // // screen.debug()

   // expect(mockCreateButton).toHaveBeenCalledTimes(1)
   // expect(mockCreateButton.mock.calls.length).toBe(1)

   // screen.getByText('Please enter an account name')
   // // expect(getTextContent('addMsg')).toContain('enter account name')
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