import functions
from openpyxl.styles import Font, Alignment
from openpyxl import Workbook


def requestInvoice():
    functions.sheets_to_dict()

    title_style = Font(name='Arial Rounded MT Bold', sz=25, b=True, color='A872DD')
    header_style = Font(name='Arial Rounded MT Bold', sz=14, b=True, color='8E44AD')
    main_style = Font(name='Arial Rounded MT Bold', sz=12, b=True, color='5A49A5')
    
    inv_no = int(input('Please enter an invoice number: '))

    try:
        if inv_no == functions.invoice_list[inv_no]['invoice_no']:
            customer_id = functions.invoice_list[inv_no]['customer_id']
            customer_name = str(functions.customer_list[customer_id]['f_name'] + ' ' +
                functions.customer_list[customer_id]['l_name'])
            customer_phone = str(functions.customer_list[customer_id]['phone'])
            customer_email = str(functions.customer_list[customer_id]['email'])
            customer_residence = str(functions.customer_list[customer_id]['street'] + ', ' +
                functions.customer_list[customer_id]['city'])
            customer_zip = str(functions.customer_list[customer_id]['zipcode'])

            workbook = Workbook()
            sheet = workbook.active
            
            sheet['G1'] = f'INVOICE {inv_no}'
            sheet['G1'].alignment = Alignment(horizontal='center')
            sheet['G1'].font = title_style
            sheet['H2'] = "Uranka's Outdoors"
            sheet['H2'].alignment = Alignment(horizontal='right')
            sheet['H2'].font = header_style

            sheet.column_dimensions['A'].width = 20
            sheet['A1'] = 'Invoice No.'
            sheet['A2'] = 'Date: '
            sheet['A3'] = 'Customer: '
            sheet['A4'] = 'Contact: '
            sheet['A6'] = 'Residence: '
            sheet['A7'] = 'Zipcode: '
            
            for i in range(1,8):
                sheet['A' + str(i)].font = header_style
                sheet['A' + str(i)].alignment = Alignment(horizontal='center')

            sheet['B1'] = functions.invoice_list[inv_no]['invoice_no']
            sheet['B2'] = functions.invoice_list[inv_no]['invoice_date']
            sheet['B3'] = customer_name
            sheet['B4'] = customer_phone
            sheet['B5'] = customer_email
            sheet['B6'] = customer_residence
            sheet['B7'] = customer_zip

            for i in range(1, 8):
                sheet['B' + str(i)].font = main_style
                sheet['B' + str(i)].alignment = Alignment(horizontal='left')

            sheet['A11'] = 'Item'
            sheet['A12'] =  # item name
            
            sheet['B11'] = 'Description'
            sheet['B12'] =  # desc
            
            sheet['C11'] = 'Quantity'
            sheet['C12'] =  # quantity
            
            sheet['D11'] = 'Unit Price'
            sheet['D12'] =  # price
            
            sheet['E11'] = 'Amount'
            sheet['E12'] =  # amount

            sheet['F11'] = 'Amount Due'
            sheet['F12'] =  # total
            
            workbook.save(f'/code/cohort4/06-python/src/comp230-excel/invoice_{inv_no}.xlsx')
            print(f'Invoice has been written to invoice_{inv_no}.xlsx')
    except:
        print('Could not create invoice')
        return requestInvoice()


requestInvoice()
