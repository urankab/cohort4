import React from 'react'

function Display(props) {
    let customerList
    if (props.customers) {
        customerList = Object.keys(props.customers).map(k => {
            const p = props.customers[k]
            return (
                <ul key={p.customer_id}>
                    <li><b>Name: </b>{p.f_name + ' ' + p.l_name}</li>
                    <li><b>Customer ID: </b>{p.customer_id}</li>
                    <li><b>Email: </b>{p.email}</li>
                    <li><b>Phone: </b>{p.phone}</li>
                    <li><b>Street: </b>{p.street}</li>
                    <li><b>Zipcode: </b>{p.zipcode}</li>
                </ul>
            )
        })
    }

    let productList
    if (props.products) {
        productList = Object.keys(props.products).map(k => {
            const p = props.products[k]
            return (
                <ul key={p.product_id}>
                    <li><b>Name: </b>{p.name}</li>
                    <li><b>Product ID: </b>{p.product_id}</li>
                    <li><b>Quantity: </b>{p.quantity}</li>
                    <li><b>Cost: $</b>{p.cost}</li>
                    <li><b>Description: </b>{p.description}</li>
                </ul>
            )
        })
    }

    let invoiceLineList
    if (props.orderLines) {
        invoiceLineList = Object.keys(props.orderLines).map(k => {
            const p = props.orderLines[k]
            return (
                <ul key={p.line_id}>
                    <li><b>Invoice #: </b>{p.invoice_no}</li>
                    <li><b>Line ID: </b>{p.line_id}</li>
                    <li><b>Price: $</b>{p.price}</li>
                    <li><b>Produce ID: </b>{p.product_id}</li>
                    <li><b>Quantity: </b>{p.quantity}</li>
                </ul>
            )
        })
    }

    let invoiceList
    if (props.orderInvoices) {
        invoiceList = Object.keys(props.orderInvoices).map(k => {
            const p = props.orderInvoices[k]
            return (
                <ul key={p.customer_id}>
                    <li><b>Customer ID: </b>{p.customer_id}</li>
                    <li><b>Invoice Date: </b>{p.invoice_date}</li>
                    <li><b>Invoice #: </b>{p.invoice_no}</li>
                    <li><b>Payment Method: </b>{p.payment_method}</li>
                    <li><b>Total Price: $</b>{p.total_price}</li>
                </ul>
            )
        })
    }

    return (
        <div id='listContainer'>
            <div className='listItems'>
                <h2 className='listHeader'>Customers</h2>
                {customerList}
            </div>
            <div className='listItems'>
                <h2 className='listHeader'>Products</h2>
                {productList}
            </div>
            <div className='listItems'>
                <h2 className='listHeader'>Invoices</h2>
                {invoiceList}
            </div>
            <div className='listItems'>
                <h2 className='listHeader'>Invoice Lines</h2>
                {invoiceLineList}
            </div>
        </div>
    )

}

export default Display