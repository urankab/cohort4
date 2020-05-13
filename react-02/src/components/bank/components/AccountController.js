import React from 'react'
import Summary from './Summary.js'
import Accounts from './Accounts.js'
import AccountController from './business/functions'

class AccountController extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            addMsg: false,
            name: '',
            balance: '',
            key: '',
        }
        // this.counter = 0;
    }

    newKey() {
        const nextKey = this.counter++;
        return nextKey;
    }

    addAccount = () => {
        this.setState({
            name: document.getElementById('name').value,
            balance: document.getElementById('startBal').value,
            key: newKey(),
            addMsg: true
        })
    }



    // getAccountFromKey(key) {
    //     return this.accounts[key];
    // }

    // addAccount(account)
    //     key = this.newKey();
    //     this.setState.accounts.push(new Accounts(accountName, balance, key));
    // }

    // checkName(accountName) {
    //     for (let i = 0; i < this.accArray.length; i++) {
    //         if (accountName === this.accArray[i].accountName) {
    //             console.log(this.accArray[i].accountName)
    //             return true;
    //         }
    //     }
    // }

    // removeAccount(accountName) {
    //     for (let i = 0; i < this.accArray.length; i++) {
    //         if (accountName === this.accArray[i].accountName) {
    //             this.accArray.splice(i, 1)
    //         }
    //     }
    // }

    // renameAccount(accountName, newName) {
    //     for (let i = 0; i < this.accArray.length; i++) {
    //         if (accountName === this.accArray[i].accountName) {
    //             this.accArray[i].accountName = newName;
    //         }
    //     }
    // }

    render() {
        return (
            <div className='container'>
                <h1 id='header'>Banking with Uranka</h1>
                <div className='box1'>
                    <h2 className='boxHeader'>Create an Account</h2>
                    <div className='innerDiv'>
                        <label htmlFor='name'>Account Name: </label>
                        <input type='text' id='name' className='input'></input>
                        <label htmlFor='startBal'>Starting Balance: $</label>
                        <input type='number' id='startBal' className='input'></input>
                        <br></br>
                        <button className='btn' id='createBtn' onClick={this.addAccount}>Create Account</button>
                        {this.state.addMsg ? (<p className='msg' id='createMsg'></p>) : null}
                    </div>
                </div>
                <Accounts />
                <Summary />
            </div>
        )
    }
}

export default AccountController;