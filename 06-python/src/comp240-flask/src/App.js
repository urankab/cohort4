import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display'

function App() {
  const [customers, setCustomers] = useState()
  const [products, setProducts] = useState()
  const [orderLines, setOrderLines] = useState()
  const [orderInvoices, setOrderInvoices] = useState()

  const getCustomers = async (e) => {
    const url = 'http://127.0.0.1:5000/customers'
    fetch(url).then(resp =>
      resp.json().then(data => {
        setCustomers(data)
      }))
  }

  const getProducts = async (e) => {
    const url = 'http://127.0.0.1:5000/products'
    fetch(url).then(resp =>
      resp.json().then(data => {
        setProducts(data)
      }))
  }


  const getOrderLines = async (e) => {
    const url = 'http://127.0.0.1:5000/invoice_lines'
    fetch(url).then(resp =>
      resp.json().then(data => {
        setOrderLines(data)
      }))
  }

  const getOrderInvoices = async (e) => {
    const url = 'http://127.0.0.1:5000/invoices'
    fetch(url).then(resp =>
      resp.json().then(data => {
        setOrderInvoices(data)
      }))
  }

  const onClear = () => {
    setCustomers()
    setProducts()
    setOrderInvoices()
    setOrderLines()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <button onClick={getCustomers}>Customer List</button>
        <button onClick={getProducts}>Product List</button>
        <button onClick={getOrderInvoices}>Order List</button>
        <button onClick={getOrderLines}>Order Line List</button>
        <button onClick={onClear}>Clear</button>
      </div>
      <Display
        customers={customers}
        products={products}
        orderLines={orderLines}
        orderInvoices={orderInvoices}
      />
    </div>
  );
}

export default App;
