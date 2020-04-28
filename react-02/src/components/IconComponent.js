import React from 'react';
import pizzaLogo from './pizza.svg';
import kebabLogo from './kebab.svg';
import chickenLogo from './fried-chicken.svg';
import noodleLogo from './noodles.svg';
import tacoLogo from './taco.svg';
import logo from '../logo.svg'
import '../App.css'

const Icons = ({getIcon}) => {
   return (
      <div>
         <img alt='icon' className='icon' src={logo} onClick={getIcon} />
         <img alt='pizza' className='pizza' src={pizzaLogo} onClick={getIcon}/>
         <img alt='kebab' className='foodLogos' src={kebabLogo} onClick={getIcon}/>
         <img alt='chicken' className='chicken' src={chickenLogo} onClick={getIcon}/>
         <img alt='noodles' className='foodLogos' src={noodleLogo} onClick={getIcon}/>
         <img alt='taco' className='foodLogos' src={tacoLogo} onClick={getIcon}/>
      </div>
   )
}

export default Icons;