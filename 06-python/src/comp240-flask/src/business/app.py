from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import read_db

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True


@app.route('/', methods= ['GET'])
def home():
    return 'Hey!'

customerData = {}
@app.route('/customers', methods = ['POST','GET'])
def get_customers():
    print(read_db.customer_list)
    # return jsonify(read_db.customer_list), 200
    customerData = read_db.customer_list
    return customerData, 200


productData = {}
@app.route('/products')
def get_products():
    print(read_db.product_list)
    productData = read_db.product_list
    return productData, 200
    

invoiceData = {}
@app.route('/invoices')
def get_invoices():
    print(read_db.invoice_list)
    invoiceData = read_db.invoice_list
    return invoiceData, 200


invoiceLineData = {}
@app.route('/invoice_lines')
def get_invoice_lines():
    print(read_db.invoice_line_list)
    invoiceLineData = read_db.invoice_line_list
    return invoiceLineData, 200

app.run(port=5000)
