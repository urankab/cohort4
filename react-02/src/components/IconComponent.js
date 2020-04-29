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

const Icons = ({ getIcon }) => {
   return (
      <Router>
         <div>
            <Link to='/'><img alt='icon' className='icon' src={logo} onClick={getIcon} /></Link>
            <Link to='/game'><img alt='tictactoe' className='tic' src={ticLogo} onClick={getIcon} /></Link>
            <img alt='pizza' className='pizza' src={pizzaLogo} onClick={getIcon} />
            <img alt='kebab' className='foodLogos' src={kebabLogo} onClick={getIcon} />
            <img alt='chicken' className='chicken' src={chickenLogo} onClick={getIcon} />
            <img alt='noodles' className='foodLogos' src={noodleLogo} onClick={getIcon} />
            <img alt='taco' className='foodLogos' src={tacoLogo} onClick={getIcon} />
         </div>
         <Route exact path='/game' component={Game} />
         <Route exact path='/' component={Home} />
      </Router>
   )
}

export default Icons;