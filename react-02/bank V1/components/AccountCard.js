import React from 'react'
import funcs from '../business/functions'

const acc = new funcs.AccountController();

class AccountCard extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         accounts: {
            name: this.props.name,
            balance: this.props.balance,
            key: this.props.key
         }
      }
   }

   onDelete() {
      this.props
   }

   render() {
      return (
         <div id={this.props.key} className='container'>
            <h3>Account name:</h3>
            <p type='text' className="accountName">{this.props.name}</p>
            <h3>Balance:</h3>
            <p type='number' className="balance">{this.props.balance}</p>
            <button onClick={this.props.onDelete}>Delete</button>
         </div>
      )
   }
}

export default AccountCard;