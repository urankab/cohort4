import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import AccCtrl from '../AccCtrl'
import funcs from '../../business/functions'

test('Test error messages and verification', () => {
   const mockCreateButton = jest.fn()
   const mockNameHandle = jest.fn()
   const mockBalInput = jest.fn()

   const acctCtrl = new funcs.AccountController()
   const mockAccountsArray = funcs.accArray
   const mockTotal = acctCtrl.totalBalance()
   const mockHighest = acctCtrl.highestAccount()
   const mockLowest = acctCtrl.lowestAccount()
   const mockShowAll = acctCtrl.showAll()

   render(<AccCtrl
      createAccount={mockCreateButton}
      handleStartName={mockNameHandle}
      handleStartBalance={mockBalInput}
      accounts={mockAccountsArray}

      totalStuff={mockTotal}
      highestStuff={mockHighest}
      lowestStuff={mockLowest}
      showAllAccts={mockShowAll}
   />)

   //Should ask for account name value
   click('Create Account')

   expect(mockCreateButton).toHaveBeenCalledTimes(1)
   expect(mockCreateButton.mock.calls.length).toBe(1)

   screen.getByText('Please enter an account name')
   expect(getTextContent('addMsg')).toContain('enter account name')
})

//-------------- ADDING ACCOUNTS TEST ----------------------

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

// test('Test dropdown for accounts', () => {
//    const mockAccounts = {
//       1: { accountName: 'House', balance: 100, key: '0' },
//       2: { accountName: 'Cats', balance: 1000, key: '1' }
//    }

//    render(<AccCtrl
//       accounts={mockAccounts}
//    />)

//    //getByDisplayValue shows selected value of select dropdwon
//    //screen.getByDisplayValue('House - $100')
//    screen.getByText('House - $100')
//    screen.getByText('Cats - $1000')

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