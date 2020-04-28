import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Icons from './components/IconComponent'
import pizzaLogo from './components/pizza.svg';
import kebabLogo from './components/kebab.svg';
import chickenLogo from './components/fried-chicken.svg';
import noodleLogo from './components/noodles.svg';
import tacoLogo from './components/taco.svg';

class App extends Component {
   constructor() {
      super()
      this.link = ''
      this.alt = ''
      this.state = {
         icon: 'Try pressing an icon!'
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
         default: alert('?')
      }
   }

   render() {
      return (
         <div className="App">
            <div>
               <Icons
                  getIcon={this.iconPressed}
               />
               <h2>{this.state.icon}<img src={this.link} className='clickedLogo' alt={this.alt}/></h2>
            </div>
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <p>
                  Edit <code>src/App.js</code> and save to reload.
         </p>
               <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Learn React
         </a>
            </header>
         </div>
      );
   }
}

export default App;
