import React from 'react'
import funcs from '../business/functions'

const acc = new funcs.AccountController()

function CreateAccount(props) {
   const account = props.account;

   function focusElement(name) {
      const el = document.querySelector(`[name=${name}]`);
      el.focus();
      el.select();
   }

   function onSave(e) {
      const AccountToAdd = {};
      AccountToAdd.key = account.key;
      const form = document.getElementById('accForm');
      const inputs = form.getElementsByTagName('input');

      for (let i = 0; i < inputs.length; i++) {
         AccountToAdd[inputs[i].name] = inputs[i].value;
      }

      // Do some simple validation
      try {
         if (!AccountToAdd.accountName) {
            focusElement('accountName');
            throw new Error('Please enter an account name');
         }

         else if (!AccountToAdd.balance) {
            focusElement('balance');
            throw new Error('Please enter a starting balance');
         }

         else if (AccountToAdd.balance <= 0) {
            focusElement('balance');
            throw new Error('Please enter an amount greater than 0');
         }

         props.add(AccountToAdd);
         props.userMsg(`Created ${AccountToAdd.accountName} account`);

      } catch (e) {
         // console.log(e);
         props.userMsg(e.message, "error");
      }

      e.preventDefault();
   }

   return (
      <div id='box1'>
         <h2 className='boxHeader'>Create an Account</h2>
         <div className='innerDiv'>
            <form id="accForm" onSubmit={onSave}>
               <label htmlFor='accountName'>Account Name: </label>
               <input name='accountName' defaultValue={account.accountName}
                  type='text' id='accountName' className='input'></input>
               <br></br>
               <label htmlFor='balance'>Starting Balance: $</label>
               <input name='balance' defaultValue={account.balance}
                  type='number' id='balance' className='input'></input>
               <br></br>
               <button className='btn' id='createBtn' onClick={onSave}>
                  Create Account</button>
               <p name='addMsg' id='addMsg' label='addmsg' className='msg'>{props.message}</p>
            </form>
         </div>
      </div>
   )
}

export default CreateAccount;

// constructor(props) {
   //    super(props);
   //    this.state = {
   //       name: '',
   //       balance: '',
   //       key: '',
   //       accounts: acc.accArray,
   //       msg: '',

   //       total: '',
   //       highest: '',
   //       lowest: '',
   //       all: '',
   //       selected: ''
   //    }
   //    // this.handleCreateButton = this.handleCreateButton.bind(this)
   // }

   // handleNameInput = (e) => {
   //    this.setState({ name: e.target.value })
   // }

   // handleStartBalInput = (e) => {
   //    this.setState({ balance: e.target.value })
   // }

   // handleCreateButton = () => {
   //    if (this.state.name === '') {
   //       this.setState({ msg: 'Please enter an account name' })
   //    }

   //    else if (acc.checkName(this.state.name)) {
   //       this.setState({ msg: 'Account name already exists' })
   //    }

   //    else if (this.state.balance <= 0) {
   //       this.setState({ msg: 'Please enter a balance greater than 0' })
   //    }

   //    else {
   //       acc.addAccount(this.state.name, this.state.balance)
   //       this.setState({
   //          msg: `Created ${this.state.name} account`,
   //          total: acc.totalBalance(),
   //          highest: acc.highestAccount(),
   //          lowest: acc.lowestAccount(),
   //          all: acc.showAll(),
   //       })
   //       this.clearInputs();
   //    }


   // clearInputs = () => {
   //    this.setState({
   //       name: '',
   //       balance: ''
   //    })
   //    document.getElementById('name').value = ''
   //    document.getElementById('startBal').value = ''
   // }