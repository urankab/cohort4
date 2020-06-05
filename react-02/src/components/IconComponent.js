import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import pizzaLogo from './svgs/pizza.svg';
import kebabLogo from './svgs/kebab.svg';
import chickenLogo from './svgs/fried-chicken.svg';
import noodleLogo from './svgs/noodles.svg';
import tacoLogo from './svgs/taco.svg';
import ticLogo from './svgs/tic.svg'
import logo from '../logo.svg'

import Home from './Home'
import Game from './Game/TicTacToe'
import AccountsApp from './Bank/components/AccountsApp';
import CitiesApp from './Cities/components/CitiesApp'
import LinkedListDisplay from './LinkedList/LinkedListDisplay'

const Icons = ({ getIcon }) => {
   return (
      <Router>
         <div>
            <Link to='/'><img alt='icon' className='icon' src={logo} onClick={getIcon} /></Link>
            <Link to='/game'><img alt='tictactoe' className='tic' src={ticLogo} onClick={getIcon} /></Link>
            <Link to='/bank'><img alt='taco' className='foodLogos' src={tacoLogo} onClick={getIcon} /></Link>
            <Link to='/cities'><img alt='kebab' className='foodLogos' src={kebabLogo} onClick={getIcon} /></Link>
            <Link to='/linkedlist'><img alt='chicken' className='chicken' src={chickenLogo} onClick={getIcon} /></Link>
            <img alt='pizza' className='pizza' src={pizzaLogo} onClick={getIcon} />
            <img alt='noodles' className='foodLogos' src={noodleLogo} onClick={getIcon} />
         </div>
         <Route exact path='/' component={Home} />
         <Route exact path='/game' component={Game} />
         <Route exact path='/bank' component={AccountsApp} />
         <Route exact path='/cities' component={CitiesApp} />
         <Route exact path='/linkedlist' component={LinkedListDisplay} />
      </Router >
   )
}

export default Icons;