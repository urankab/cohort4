import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import Display from './Display'

const customerData = {
    1: {
        city: "Waihibar",
        customer_id: 1,
        email: "wtoor0@rambler.ru",
        f_name: "Wilbert",
        l_name: "Toor",
        phone: "457-218-5978",
        street: "9844 Eastlawn Point",
        zipcode: 32179
    }
}

const productData = {
    1: {
        cost: 5.5,
        description: "Strawberry scented candle",
        name: "Candles",
        product_id: 100,
        quantity: 86
    }
}

const invoiceData = {
    1: {
        customer_id: 1,
        invoice_date: "2020-03-02",
        invoice_no: 1,
        payment_method: "Cash",
        total_price: 294.5
    }
}

const invoiceLineData = {
    1: {
        invoice_no: 1,
        line_id: 1,
        price: 84.5,
        product_id: 130,
        quantity: 13
    },
}

test('renders learn react link', () => {
    render(<Display
        customers={customerData}
        products={productData}
        orderLines={invoiceLineData}
        orderInvoices={invoiceData}
    />);
    screen.getByText(/customers/i);
    screen.getByText('Wilbert Toor');
    screen.getByText('wtoor0@rambler.ru');
    screen.getByText('2020-03-02');
    screen.getByText('84.5');
});
