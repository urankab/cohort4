import React, { useState } from 'react';
import logo from './logo.svg';
import Icons from './components/IconComponent'
import pizzaLogo from './components/svgs/pizza.svg';
import kebabLogo from './components/svgs/kebab.svg';
import chickenLogo from './components/svgs/fried-chicken.svg';
import noodleLogo from './components/svgs/noodles.svg';
import tacoLogo from './components/svgs/taco.svg';
import ticLogo from './components/svgs/tic.svg';
import './App.css';
import './components/Bank/AccountsApp.css'
import './components/FIFO_LIFO/components/ListDisplay.css'
import {
   ThemeContext,
   AppStatesContext,
   AppLinkedList,
   AppStacks,
   AppQueues
} from './contexts/AppContext'

function App() {
   const [link, setLink] = useState('')
   const [alt, setAlt] = useState('')
   const [message, setMessage] = useState({ msg: 'Try pressing an icon!', img: false })
   const themeHook = useState('pink')

   const [linky] = useState(AppLinkedList)
   const [lifo] = useState(AppStacks)
   const [fifo] = useState(AppQueues)

   function iconPressed(e) {
      setMessage({
         msg: `You pressed ... ${e.target.alt}!`,
         img: true
      })
      switch (e.target.alt) {
         case 'chicken':
            setLink(chickenLogo)
            setAlt('chicken')
            break;
         case 'icon':
            setLink(logo)
            setAlt('react-icon')
            break;
         case 'pizza':
            setLink(pizzaLogo)
            setAlt('pizza')
            break;
         case 'kebab':
            setLink(kebabLogo)
            setAlt('kebab')
            break;
         case 'noodles':
            setLink(noodleLogo)
            setAlt('noodles')
            break;
         case 'taco':
            setLink(tacoLogo)
            setAlt('taco')
            break;
         case 'tictactoe':
            setLink(ticLogo)
            setAlt('tictactoe')
            break;
         default:
            alert('?')
      }
   }

   return (
      <ThemeContext.Provider value={themeHook}>
         <AppStatesContext.Provider value={{ linky, lifo, fifo }}>
            <h2> {message.msg}
               {message.img ?
                  (<img src={link}
                     className='clickedLogo' alt={alt} />) : null}
            </h2>
            <Icons getIcon={iconPressed} />
         </AppStatesContext.Provider>
      </ThemeContext.Provider>
   );
}

export default App