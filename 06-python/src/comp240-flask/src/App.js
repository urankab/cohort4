import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState('')

  // const getCustomers = async() => {
  //   const url = 
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <button onClick={getCustomers}>Customer List</button>
      <button>Product List</button>
      <button>Order List</button>
      <button>Order Line List</button>
      <p>{data}</p>
    </div>
  );
}

export default App;
