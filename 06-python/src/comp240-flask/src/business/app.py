from flask import Flask, jsonify, request, render_template
import read_db

app = Flask(__name__)

@app.route('/')
def home():
    return 'localhost:3000'

@app.route('/customers', methods = ['POST','GET'])
def get_customers():
    print(read_db.customer_list)
    return jsonify(read_db.customer_list)


# @app.route('/products')
# def get_products():
#     print(read_db.product_list)
#     return jsonify(read_db.product_list)
    

# @app.route('/invoices')
# def get_invoices():
#     print(read_db.invoice_list)
#     return jsonify(read_db.invoice_list)


# @app.route('/invoice_lines')
# def get_invoices():
#     print(read_db.invoice_line_list)
#     return jsonify(read_db.invoice_line_list)

app.run(port=5000)