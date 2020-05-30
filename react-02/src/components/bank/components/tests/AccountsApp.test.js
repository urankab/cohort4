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
})

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}