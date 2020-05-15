import React from 'react'
import Summary from './Summary'
import EditAccounts from './EditAccounts'
import funcs from '../business/functions'

const acc = new funcs.AccountController();

class Accounts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            balance: '',
            key: '',
            addMsg: '',
        }
    }

    handleNameInput = (e) => {
        this.setState({ name: e.target.value })
    }

    handleStartBalInput = (e) => {
        this.setState({ balance: e.target.value })
    }

    addAccount = () => {
        if (this.state.name && this.state.balance !== 0) {
            if (acc.checkName(this.state.name)) {
                this.setState({ addMsg: 'Name already exists' })
            } else {
                acc.addAccount(this.state.name, this.state.balance)
                this.setState({ addMsg: `Created ${this.state.name} account` })
                this.clearInputs();
                console.log(acc.accArray)
            }
        } else {
            this.setState({ addMsg: 'Please enter some values' })
        }
    }

    clearInputs = () => {
        this.setState({ name: '' })
        this.setState({ balance: '' })
    }

    // componentDidMount() {
    //     return this.state.accounts
    // }

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
                        <p className='msg'>{this.state.addMsg}</p>
                    </div>
                </div>
                <EditAccounts
                    accounts={acc.accArray}
                />
                <Summary
                    accounts={acc.accArray}
                />
            </div>
        )
    }
}

export default Accounts;