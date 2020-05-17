import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import ReactTestUtils from 'react-dom/test-utils';

import Accounts from './Accounts'
import funcs from '../business/functions'

// import { shallow, mount, render } from 'enzyme';
// import ReactDOM from 'react-dom'

test('Test creating an accounts', () => {
    const mockCreateAccCallback = jest.fn()
    const accCtrl = new funcs.AccountController()

    render(<Accounts
        handleCreateClick={mockCreateAccCallback}

    />)

    //Expect to fail adding an account since there are no values
    expect(getValue('name')).toBe('')
    expect(getValue('startBal')).toBe('')

    click('Create Account')

    expect(getTextContent('errorMsg')).toBe("Please enter an account name")
    screen.getByText(/Please enter an account name/)

    //Adding values to input boxes then click Create Account
    // updateValue('name', 'House')
    // updateValue('startBal', 100)

    // expect(getValue('name')).toBe('House')
    // expect(getValue('startBal')).toBe('100')

    //Simulate input values
    const inputName = document.querySelector(`[id=name]`)
    const inputBal = document.querySelector(`[id=startBal]`)

    ReactTestUtils.Simulate.change(inputName, { name: 'name', value: 'House' })
    ReactTestUtils.Simulate.change(inputBal, { name: 'startBal', value: 100 })


    click('Create Account')

    // expect(mockCreateAccCallback.mock.calls.length).toBe(1)
    screen.getByText(/Created House account/)
})


function getValue(name) {
    return document.querySelector(`[id=${name}]`).value
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