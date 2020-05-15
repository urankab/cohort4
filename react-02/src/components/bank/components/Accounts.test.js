import { fireEvent, render, screen } from '@testing-library/react'
import { Accounts } from './Accounts'
import funcs from '../business/functions'

test('Test creatingn an accounts', () => {
    const mockAddAccountCB = jest.fn()

    const accounts = {
        1: { key: 1, name: 'House' },
        2: { key: 2, name: 'Dogs' }
    }

    render(<Accounts
        name={name}
    />)

})