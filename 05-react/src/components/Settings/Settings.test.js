import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import Settings from './Settings'

test('Test that changing the theme works', () => {
   render(<Settings />)
   click('Pink Theme')
   screen.getByText('Theme is set to pink')
   expect(document.querySelector('h1').style.backgroundColor).toBe('rgb(255, 223, 220)')
   click('Blue Theme')
   screen.getByText('Theme is set to blue')
})

function click(txt) {
   fireEvent.click(
      screen.getByText(txt)
   );
}