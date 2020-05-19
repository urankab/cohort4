import React from 'react'
import Summary from './Summary'
import AccCtrl from './AccCtrl'
import funcs from '../business/functions'

const acc = new funcs.AccountController();

class AccountsApp extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         name: '',
         balance: '',
         key: '',
         addMsg: '',
         errorMsg: '',
         // account: acc,
         total: '',
         highest: '',
         lowest: '',
         all: ''
      }
      console.log(this.props)
   }

   handleNameInput = (e) => {
      this.setState({ name: e.target.value })
   }

   handleStartBalInput = (e) => {
      this.setState({ balance: e.target.value })
   }

   handleSumbit = () => {
      if (this.state.name === '') {
         this.setState({ addMsg: '' })
         this.setState({ errorMsg: 'Please enter an account name' })
      }

      else if (acc.checkName(this.state.name)) {
         this.setState({ addMsg: '' })
         this.setState({ errorMsg: 'Account name already exists' })
      }

      else if (this.state.balance <= 0) {
         this.setState({ addMsg: '' })
         this.setState({ errorMsg: 'Please enter a balance greater than 0' })
      }

      else {
         acc.addAccount(this.state.name, this.state.balance)
         this.setState({
            addMsg: `Created ${this.state.name} account`,
            errorMsg: '',
            total: acc.totalBalance(),
            highest: acc.highestAccount(),
            lowest: acc.lowestAccount(),
            all: acc.showAll()
         })
         this.clearInputs();
         console.log(acc.accArray)
      }
   }

   clearInputs = () => {
      this.setState({
         name: '',
         balance: '',
      })
   }

   render() {
      return (
         <div className='container'>
            <h1 id='header'>Banking with Uranka</h1>
            <div id='box1'>
               <h2 className='boxHeader'>Create an Account</h2>
               <div className='innerDiv'>
                  <label htmlFor='name'>Account Name: </label>
                  <input name='name' label='name' value={this.state.name} onChange={this.handleNameInput}
                     type='text' id='name' className='input'></input>
                  <br></br>
                  <label htmlFor='startBal'>Starting Balance: $</label>
                  <input name='startBal' label='balance' value={this.state.balance} onChange={this.handleStartBalInput}
                     type='number' id='startBal' className='input'></input>
                  <br></br>
                  <button label='submit' className='btn' id='createBtn' onClick={this.handleSumbit}>Create Account</button>
                  <p id='addMsg' label='addmsg' className='msg'>{this.state.addMsg}</p>
                  <p id='errorMsg' label='errorMsg' className='msg'>{this.state.errorMsg}</p>
               </div>
            </div>
            <AccCtrl
               accounts={acc.accArray}
            />
            <Summary
               totalStuff={this.state.total}
               highestStuff={this.state.highest}
               lowestStuff={this.state.lowest}
               showStuff={this.state.all}
            />
         </div>
      )
   }
}

export default AccountsApp;