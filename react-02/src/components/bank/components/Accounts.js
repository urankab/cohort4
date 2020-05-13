import React from 'react'

class Accounts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: false
        }
        this.editAccount = {
            name: '',
            balance: ''
        }
    }

    deposit = (event) => {
        this.setState({
            balance: document.getElementById('amount').value,
            msg: true
        })
    }

    // deposit(valueIn) {
    //     this.balance += Number(valueIn);
    // }

    // withdraw(valueOut) {
    //     this.balance -= Number(valueOut);
    // }

    // showBalance() {
    //     return `${this.accountName}: $${this.balance}`;
    // }

    // showName() {
    //     return this.accountName;
    // }

    render() {
        return (
            <div className='box2'>
                <h2 className='boxHeader'>Edit an Account</h2>
                <div className='innerDiv'>
                    {this.state.msg ? (<p className='msgBox' id='msg2'></p>) : null}
                    <label htmlFor='dropdown'>Select Account: </label>
                    <select id='dropdown'>
                        {/* <option>Hey</option> */}
                    </select>
                    <br></br>
                    <label htmlFor='amount'>Deposit/Withdraw: $</label>
                    <input type='number' className='input' id='amount'></input>
                    <br></br>
                    <button className='btn' id='depositBtn'>Deposit</button>
                    <button className='btn' id='withdrawBtn'>Withdraw</button>
                    <br></br>
                    <label htmlFor='renameField'>New Name: </label>
                    <input type='text' className='input' id='renameField'></input>
                    <button className='btn' id='renameBtn'>Change Name</button>
                    <button className='btn' id='deleteBtn'>Delete Account</button>
                    {this.state.msg ? (<p className='msgBox' id='msg3'></p>) : null}
                </div>
            </div>
        )
    }
}

export default Accounts;