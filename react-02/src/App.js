import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Icons from './components/IconComponent'
import pizzaLogo from './components/svgs/pizza.svg';
import kebabLogo from './components/svgs/kebab.svg';
import chickenLogo from './components/svgs/fried-chicken.svg';
import noodleLogo from './components/svgs/noodles.svg';
import tacoLogo from './components/svgs/taco.svg';
import ticLogo from './components/svgs/tic.svg';

class App extends Component {
   constructor() {
      super()
      this.link = ''
      this.alt = ''
      this.state = {
         icon: 'Try pressing an icon!',
         page: 'home'
      }
   }

   iconPressed = (event) => {
      this.setState({
         icon: `You pressed ... ${event.target.alt}!`,
      })
      switch (event.target.alt) {
         case 'chicken':
            this.link = chickenLogo
            this.alt = 'chicken'
            break;
         case 'icon':
            this.link = logo
            this.alt = 'react-icon'
            break;
         case 'pizza':
            this.link = pizzaLogo
            this.alt = 'pizza'
            break;
         case 'kebab':
            this.link = kebabLogo
            this.alt = 'kebab'
            break;
         case 'noodles':
            this.link = noodleLogo
            this.alt = 'noodles'
            break;
         case 'taco':
            this.link = tacoLogo
            this.alt = 'taco'
            break;
         case 'tictactoe':
            this.link = ticLogo
            this.alt = 'tictactoe'
            break;
         default: alert('?')
      }
   }

   render() {
      return (
         <div>
            <div className='App'>
            <h2>{this.state.icon}<img src={this.link} className='clickedLogo' alt={this.alt} /></h2>
               <Icons
                  getIcon={this.iconPressed}
               />
            </div>
         </div>
      );
   }
}

export default App;
