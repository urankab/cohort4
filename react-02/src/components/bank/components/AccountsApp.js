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

         addMsg: '',
         errorMsg: '',

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

   test() {
      console.log('test');
   }

   handleCreateButton = () => {
      console.log(this.state.name)
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
         <div>
            <h1 id='header'>Banking with Uranka</h1>
            <AccCtrl
               addMsg={this.state.addMsg}
               errorMsg={this.state.errorMsg}
               total={this.state.total}
               highest={this.state.highest}
               lowest={this.state.lowest}
               all={this.state.all}
               createAccount={this.handleCreateButton}
               handleStartName={this.handleNameInput}
               handleStartBalance={this.handleStartBalInput}
               selected={this.selected}
               dummy={this.test}

               // removeAccount={this.handleDelete}
               // deposit={this.handleDeposit}
               // withdraw={this.handleWithdraw}
               accounts={acc.accArray}
            />
         </div>
      )
   }
}

export default AccountsApp;