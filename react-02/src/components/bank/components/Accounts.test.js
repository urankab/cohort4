import { fireEvent, render, screen } from '@testing-library/react'
import { Accounts } from './Accounts'

test('Test Accounts key generating', () => {
    const mockShowOneCallback = jest.fn()
    const mockOnAddCallback = jest.fn()

    const accounts = {
        1: { key: 1, name: 'House' },
        2: { key: 2, name: 'Dogs' }
    }

    render(<Accounts
        accounts={accounts}
        showOne={mockShowOneCallback}
        onAdd={mockOnAddCallback}
    />)
    
})