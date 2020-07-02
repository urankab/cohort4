import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import AccountsApp from '../AccountsApp'

test('Testing AccountsApp', () => {
    render(<AccountsApp
    />)

    screen.getByText(/Banking with Uranka/)

    click('Create Account')
    screen.getByText(/Please enter an account name/)
    expect(document.getElementById('addMsg').textContent).toBe('Please enter an account name')

    updateValue('accountName', 'House')
    updateValue('balance', '100')
    click('Create Account')
    screen.getAllByText(/House/)

    updateValue('renameField', 'Cats')
    click('Change Name')
    screen.getByText('Renamed House')

    click('Delete Account')
    screen.getByText('Deleted Cats')
})

function updateValue(name, value) {
    document.querySelector(`[id=${name}]`).value = value;
}

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}