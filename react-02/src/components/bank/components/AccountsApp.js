import React from 'react'
import AccCtrl from './AccCtrl'
import funcs from '../business/functions'
import Summary from './Summary';

const acc = new funcs.AccountController();

class AccountsApp extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         name: '',
         balance: '',
         key: '',
         accounts: acc.accArray,

         // addMsg: '',
         msg: '',

         total: '',
         highest: '',
         lowest: '',
         all: '',
         selected: ''
      }
   }

   handleNameInput = (e) => {
      this.setState({ name: e.target.value })
   }

   handleStartBalInput = (e) => {
      this.setState({ balance: e.target.value })
   }

   handleCreateButton = () => {
      if (this.state.name === '') {
         this.setState({ msg: 'Please enter an account name' })
      }

      else if (acc.checkName(this.state.name)) {
         this.setState({ msg: 'Account name already exists' })
      }

      else if (this.state.balance <= 0) {
         this.setState({ msg: 'Please enter a balance greater than 0' })
      }

      else {
         acc.addAccount(this.state.name, this.state.balance)
         this.setState({
            msg: `Created ${this.state.name} account`,
            total: acc.totalBalance(),
            highest: acc.highestAccount(),
            lowest: acc.lowestAccount(),
            all: acc.showAll(),
         })
         this.clearInputs();
      }
   }

   clearInputs = () => {
      this.setState({
         name: '',
         balance:''
      })
      document.getElementById('name').value = ''
      document.getElementById('startBal').value = ''
   }

   render() {
      return (
         <div>
            <h1 id='header'>Banking with Uranka</h1>
            <AccCtrl
               addMsg={this.state.msg}

               totalStuff={this.state.total}
               highestStuff={this.state.highest}
               lowestStuff={this.state.lowest}
               showAllAccts={this.state.all}
               accounts={this.state.accounts}

               createAccount={this.handleCreateButton}
               handleStartName={this.handleNameInput}
               handleStartBalance={this.handleStartBalInput}
               selected={this.selected}
               // removeAccount={this.handleDelete}
               // deposit={this.handleDeposit}
               // withdraw={this.handleWithdraw}
               // accounts={acc.accArray}
            />
         </div>
      )
   }
}

export default AccountsApp;