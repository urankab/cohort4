import React from 'react'
import { fireEvent, screen, render, getByText, waitForElement, userEvent } from '@testing-library/react'
import ReactTestUtils from 'react-dom/test-utils';

import AccountsApp from '../AccountsApp'
import AccountCard from '../AccountCard'
import funcs from '../../business/functions'

test('Testing error messages - should notify missing fields', () => {
    const mockSubmit = jest.fn()
    const accCtrl = new funcs.AccountController()

    render(<AccountsApp
        handleCreateClick={mockSubmit}
    />)

    //Expect to fail adding an account since there are no values
    expect(getValue('name')).toBe('')
    expect(getValue('startBal')).toBe('')

    click('Create Account')

    expect(getTextContent('errorMsg')).toBe("Please enter an account name")
    screen.getByText(/Please enter an account name/)
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

//-------- Old tests -----------------------------------------------

// test('1 - Testing success message and account creation', () => {
//     const mockSubmit = jest.fn()
//     const mockHandleName = jest.fn()
//     const mockBalInput = jest.fn()
//     const accCtrl = new funcs.AccountController()

//     render(<AccountsApp
//         handleCreateClick={mockSubmit}
//         handleNameInput={mockHandleName}
//         handleStartBalInput={mockBalInput}
//     />)

//     //Adding values to input boxes then click Create Account
//     updateValue('name', 'House')
//     updateValue('startBal', 100)

//     expect(getValue('name')).toBe('House')
//     expect(getValue('startBal')).toBe('100')

//     click('Create Account')

//     expect(getValue('name')).toBe('House')
//     expect(mockCreateAccCallback.mock.calls.length).toBe(1)

//     screen.getByText(/Created House account/)
// })

// test('2 - Testing success message and account creation', () => {
//     const mockSubmit = jest.fn()
//     const mockHandleName = jest.fn()
//     const mockBalInput = jest.fn()
//     const accCtrl = new funcs.AccountController()

//     render(<AccountsApp
//         handleCreateClick={mockSubmit}
//         handleNameInput={mockHandleName}
//         handleStartBalInput={mockBalInput}
//     />)

//     //Adding values to input boxes then click Create Account
//     updateValue('name', 'House')
//     updateValue('startBal', 100)

//     expect(getValue('name')).toBe('House')
//     expect(getValue('startBal')).toBe('100')

//     click('Create Account')

//     expect(getValue('name')).toBe('House')
//     expect(mockCreateAccCallback.mock.calls.length).toBe(1)

//     screen.getByText(/Created House account/)
// })



// test('3 - Testing success message and account creation', () => {
//     const mockSubmit = jest.fn()

//     const account = {
//         1: { accountName: 'House', balance: 100, key: '0' }
//     }

//     // console.log(account)

//     render(
//         <AccountsApp
//             name={account[1].accountName}
//             balance={account[1].balance}
//             handleSubmit={mockSubmit}
//         />
//     )

//     fireEvent.click(screen.getByText('Create Account'));

//     expect(mockSubmit).toHaveBeenCalledTimes(1)

//     // expect(mockSubmit.mock.calls.length).toBe(1)

//     screen.getByText(/Created House account/)

//     // expect(getTextContent('addMsg')).toBe('Created House account')

// })

// test('button click test', async () => {
//     const fakeAccount = {
//         1: { accountName: 'House', balance: 100, key: '0' },
//         2: { accountName: 'Savings', balance: 50, key: '1' }
//     };
//     const mockDelete = jest.fn();
//     const accCtrl = new funcs.AccountController()
//     accCtrl.addAccount('Pets', 25)
//     const account = accCtrl.accArray[0]

//     render(<AccountCard
//         key={0}
//         name={account.accountName}
//         balance={account.balance}
//         onDelete={mockDelete}
//     />)
//     expect(document.querySelector(".accountName").textContent).toBe(account.accountName)
//     expect(document.querySelector(".balance").textContent).toBe(account.balance.toString())

//     fireEvent.click(screen.getByText('Delete'));
//     expect(screen.getByText('Delete')).not.toBeTruthy()
//     // expect(mockDelete).toHaveBeenCalledTimes(1);
// })
