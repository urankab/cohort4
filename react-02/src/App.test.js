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
});

function clickIcon(txt) {
  fireEvent.click(
    screen.getByAltText(txt)
  );
}