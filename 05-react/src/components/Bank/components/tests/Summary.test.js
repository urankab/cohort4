import React from 'react'
import { render, screen } from '@testing-library/react'
import Summary from '../Summary'
import { AccountController } from '../../business/functions'

test('Test summary output for accounts', () => {
    const acctCtrl = new AccountController()

    acctCtrl.addAccount({ accountName: 'Dance Party', balance: 200 })
    acctCtrl.addAccount({ accountName: 'Whiskey Party', balance: 69 })
    acctCtrl.addAccount({ accountName: 'Taco Party', balance: 100 })

    const accounts = acctCtrl.accounts
    const mockTotal = acctCtrl.totalBalance()
    const mockHighest = acctCtrl.highestAccount()
    const mockLowest = acctCtrl.lowestAccount()

    render(<Summary
        accounts={accounts}
        totalStuff={mockTotal}
        highestStuff={mockHighest}
        lowestStuff={mockLowest}
    />)

    screen.getByText('$369')
    expect(getTextContent('total')).toBe('$369')
    expect(getTextContent('highest')).toBe('Dance Party - $200')
    expect(getTextContent('lowest')).toBe('Whiskey Party - $69')
    expect(getTextContent('all')).toContain('Dance Party - $200Whiskey Party - $69Taco Party - $100')
})

function getTextContent(name) {
    return document.getElementById(`${name}`).textContent;
}