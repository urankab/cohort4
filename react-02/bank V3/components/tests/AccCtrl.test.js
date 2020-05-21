import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import AccCtrl from '../AccCtrl'
import funcs from '../../business/functions'

test('Test dropdown for accounts', () => {
   const mockAccounts = {
      1: { accountName: 'House', balance: 100, key: '0' },
      2: { accountName: 'Cats', balance: 1000, key: '1' }
   }

   render(<AccCtrl
      accounts={mockAccounts}
   />)

   //getByDisplayValue shows selected value of select dropdwon
   //screen.getByDisplayValue('House - $100')
   screen.getByText('House - $100')
   screen.getByText('Cats - $1000')

})

// test('Test AcctCtrl functionality', () => {
//    const acc = new funcs.AccountController()
//    const mockAccounts = funcs.accArray
//    const mockMsgTxt = ''

//    const mockMsg = jest.fn()
//    const mockDeposit = jest.fn()
//    const mockWithdraw = jest.fn()
//    const mockRename = jest.fn()
//    const mockDelete = jest.fn()

//    render(<AccCtrl
//       accounts={mockAccounts}
//       userMsg={mockMsg}
//       message={mockMsgTxt}

//       selected={selectedAccount}
//       deposit={mockDeposit}
//       withdraw={mockWithdraw}
//       rename={mockRename}
//       delete={mockDelete}
//    />)

//    click('Deposit')

//    console.log(mockDeposit.mock.calls.length)

//    // screen.debug()

//    // expect(mockCreateButton).toHaveBeenCalledTimes(1)

//    // expect(getTextContent('addMsg')).toContain('Deposited')
// })

//-------------- OLD ADDING ACCOUNTS TEST ----------------------

// test('Test account creation', () => {
//    const mockCreateButton = jest.fn()
//    const mockNameHandle = jest.fn()
//    const mockBalInput = jest.fn()
//    // const mockAddedMsg = ''

//    const acctCtrl = new funcs.AccountController()
//    const mockTotal = acctCtrl.totalBalance()
//    const mockHighest = acctCtrl.highestAccount()
//    const mockLowest = acctCtrl.lowestAccount()
//    const mockShowAll = acctCtrl.showAll()

//    // acctCtrl.addAccount('House', 100)
//    // const account1 = acctCtrl.accArray[0]

//    render(<AccCtrl
//       createAccount={mockCreateButton}
//       handleStartName={mockNameHandle}
//       handleStartBalance={mockBalInput}

//       // addMsg={mockAddedMsg}
//       totalStuff={mockTotal}
//       highestStuff={mockHighest}
//       lowestStuff={mockLowest}
//       showAllAccts={mockShowAll}
//    />)

//    updateValue('name', 'House')
//    updateValue('startBal', 100)

//    expect(getValue('name')).toBe('House')
//    expect(getValue('startBal')).toBe('100')

//    click('Create Account')

//    expect(mockCreateButton).toHaveBeenCalledTimes(1)
//    expect(mockCreateButton.mock.calls.length).toBe(1)
//    // expect(getTextContent('addMsg')).toContain('Created')
//    screen.getByText(/created House account/i)

// })

//-------- DROP DOWN TESTS -----------------------------------

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