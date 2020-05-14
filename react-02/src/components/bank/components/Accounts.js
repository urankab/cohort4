import React from 'react'
import Summary from './Summary.js'
import funcs from '../business/functions'

const acc = new funcs.AccountController();

class Accounts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addMsg: false,
            delMsg: false,
            renameMsg: false,
            name: '',
            balance: '',
            key: '',
        }
    }

    handleNameInput = (e) => {
        this.setState({ name: e.target.value })
    }

    handleStartBalInput = (e) => {
        this.setState({ balance: e.target.value })
    }

    addAccount = () => {
        acc.addAccount(this.state.name, this.state.balance)
        console.log('hi')
        console.log(acc.accArray)
    }

    render() {
        return (
            <div className='container'>
                <h1 id='header'>Banking with Uranka</h1>
                <div className='box1'>
                    <h2 className='boxHeader'>Create an Account</h2>
                    <div className='innerDiv'>
                        <label htmlFor='name'>Account Name: </label>
                        <input value={this.state.name} onChange={this.handleNameInput}
                            type='text' id='name' className='input'></input>
                        <br></br>
                        <label htmlFor='startBal'>Starting Balance: $</label>
                        <input value={this.state.balance} onChange={this.handleStartBalInput}
                            type='number' id='startBal' className='input'></input>
                        <br></br>
                        <button className='btn' id='createBtn' onClick={this.addAccount}>Create Account</button>
                        {this.state.addMsg ? (<p className='msg' id='createMsg'></p>) : null}
                    </div>
                </div>
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
                <Summary />
            </div>
        )
    }
}

export default Accounts;