import React from 'react'
import { render, screen } from '@testing-library/react'
import Summary from '../Summary'
import funcs from '../../business/functions'

test('Test summary output for accounts', () => {
    const acctCtrl = new funcs.AccountController()

    acctCtrl.addAccount('House', 100)
    acctCtrl.addAccount('Cat', 120)
    acctCtrl.addAccount('Food', 10)

    const mockTotal = acctCtrl.totalBalance()
    const mockHighest = acctCtrl.highestAccount()
    const mockLowest = acctCtrl.lowestAccount()
    const mockShowAll = acctCtrl.showAll()

    render(<Summary
        totalStuff={mockTotal}
        highestStuff={mockHighest}
        lowestStuff={mockLowest}
        showAllAccts={mockShowAll}
    />)

    screen.getByText('$230')
    expect(getTextContent('total')).toBe('$230')
    expect(getTextContent('highest')).toBe('Cat - $120')
    expect(getTextContent('lowest')).toBe('Food - $10')
    expect(getTextContent('all')).toBe(' House - $100  Cat - $120  Food - $10 ')
})

function getTextContent(name) {
    return document.getElementById(`${name}`).textContent;
}