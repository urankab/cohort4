import React from 'react';
import pizzaLogo from './svgs/pizza.svg';
import kebabLogo from './svgs/kebab.svg';
import chickenLogo from './svgs/fried-chicken.svg';
import noodleLogo from './svgs/noodles.svg';
import tacoLogo from './svgs/taco.svg';
import ticLogo from './svgs/tic.svg'
import logo from '../logo.svg'
import { Game } from './game/index'
import {
   BrowserRouter as Router, Route, Link
} from "react-router-dom";
import Home from './Home'
import AccountController from './bank/components/AccountController';

const Icons = ({ getIcon }) => {
   return (
      <Router>
         <div>
            <Link to='/'><img alt='icon' className='icon' src={logo} onClick={getIcon} /></Link>
            <Link to='/game'><img alt='tictactoe' className='tic' src={ticLogo} onClick={getIcon} /></Link>
            <Link to='/bank'><img alt='taco' className='foodLogos' src={tacoLogo} onClick={getIcon} /></Link>
            <img alt='kebab' className='foodLogos' src={kebabLogo} onClick={getIcon} />
            <img alt='chicken' className='chicken' src={chickenLogo} onClick={getIcon} />
            <img alt='pizza' className='pizza' src={pizzaLogo} onClick={getIcon} />
            <img alt='noodles' className='foodLogos' src={noodleLogo} onClick={getIcon} />
         </div>
         <Route exact path='/' component={Home} />
         <Route exact path='/game' component={Game} />
         <Route exact path='/bank' component={AccountController} />
         {/* <Route exact path='/cities' component={Cities} /> */}
      </Router>
   )
}

export default Icons;