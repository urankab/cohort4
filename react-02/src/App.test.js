import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Test viewing the AccountsApp component', () => {
  render(<App />);
  screen.getByText(/try pressing an icon!/i)
  screen.getByAltText(/taco/i)

  clickIcon('taco')
  screen.getByText(/you pressed ... taco!/i)
  screen.getByText(/banking with uranka/i)
  screen.getByText(/create an account/i)

  clickIcon('tictactoe')
  screen.getByText(/you pressed ... tictactoe!/i)
  screen.getByText(/Go to game start/i)

  clickIcon('icon')
  screen.getByText(/you pressed ... icon!/i)
  screen.getByText(/Learn react/i)

  clickIcon('chicken')
  screen.getByText(/you pressed ... chicken!/i)
  screen.getByText(/linked list fun!/i)

  clickIcon('pizza')
  screen.getByText(/you pressed ... pizza!/i)
  screen.getByText(/FIFO ~ LIFO/i)

  clickIcon('kebab')
  screen.getByText(/you pressed ... kebab!/i)
  screen.getByText(/cities/i)

  clickIcon('noodles')
  screen.getByText(/you pressed ... noodles!/i)
});

function clickIcon(txt) {
  fireEvent.click(
    screen.getByAltText(txt)
  );
}