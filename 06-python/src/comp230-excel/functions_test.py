import functions


def test_customer():
    # assert (functions.toTestCustomerValues() == {'city': 'Waihibar', 'customer_id': 1, 'email': 'wtoor0@rambler.ru',
    #     'f_name': 'Wilbert', 'l_name': 'Toor', 'phone': '457-218-5978', 'street': '9844 Eastlawn Point', 'zipcode': 32179})
    assert (functions.toTestCustomerValues() == 'Wilbert')

def test_invoice():
    assert (functions.toTestInvoiceValues() == {'customer_id': 1, 'invoice_date': '2020-03-02', 'invoice_no': 1,
        'payment_method': 'Cash', 'total_price': 294.5})

def test_invoice_line():
    assert (functions.toTestInvoiceLineValues() == {'invoice_no': 1, 'line_id': 1, 'price': 84.5, 'product_id': 130,
        'quantity': 13})

def test_product():
    assert (functions.toTestProductValues() == {'cost': 5.5, 'description': 'Strawberry scented candle','name': 'Candles',
        'product_id': 100,'quantity': 86})
