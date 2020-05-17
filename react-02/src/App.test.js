import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  screen.getByText(/try pressing an icon!/i)
  screen.getByAltText(/taco/i)
});

// test('test Accounts component', () => {

//   screen.getByText('/you pressed... kebab/i')
//   screen.getByText('/banking with uranka/i')
//   screen.getByText('/create an account/i')

// });

// function click(txt) {
//   fireEvent.click(
//     screen.getByText(txt)
//   );
// }

// function clickIcon(altTxt) {
//   fireEvent.click(
//     screen.get
//   );
// }