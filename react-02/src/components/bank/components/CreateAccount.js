import React from 'react'

function CreateAccount(props) {
   const account = props.account;

   function focusElement(name) {
      const el = document.querySelector(`[name=${name}]`);
      el.focus();
      el.select();
   }

   function onAdd(e) {
      const AccountToAdd = {};
      AccountToAdd.key = account.key;
      const form = document.getElementById('accForm');
      const inputs = form.getElementsByTagName('input');

      for (let i = 0; i < inputs.length; i++) {
         AccountToAdd[inputs[i].name] = inputs[i].value;
      }

      try {
         if (!AccountToAdd.accountName) {
            focusElement('accountName');
            throw new Error('Please enter an account name');
         }

         // if (props.acctCtrl.checkName(AccountToAdd.accountName)) {
         //    focusElement('accountName');
         //    throw new Error('Account name already exists');
         // }

         if (props.checkName(AccountToAdd.accountName)) {
            focusElement('accountName');
            throw new Error('Account name already exists');
         }

         if (!AccountToAdd.balance) {
            focusElement('balance');
            throw new Error('Please enter a starting balance');
         }

         if (AccountToAdd.balance <= 0) {
            focusElement('balance');
            throw new Error('Please enter an amount greater than 0');
         }
         props.add(AccountToAdd);
         props.userMsg(`Created ${AccountToAdd.accountName} account`);

      } catch (e) {
         props.userMsg(e.message, "error");
      }
      e.preventDefault();
   }

   return (
      <div id='box1'>
         <h2 className='boxHeader'>Create an Account</h2>
         <div className='innerDiv'>
            <form id="accForm" onSubmit={onAdd}>
               <label htmlFor='accountName'>Account Name: </label>
               <input name='accountName' defaultValue={account.accountName}
                  type='text' id='accountName' className='input'></input>
               <br></br>
               <label htmlFor='balance'>Starting Balance: $</label>
               <input name='balance' defaultValue={account.balance}
                  type='number' id='balance' className='input'></input>
               <br></br>
               <button className='btn' id='createBtn' onClick={onAdd}>
                  Create Account</button>
               <p name='addMsg' id='addMsg' label='addmsg' className='msg'>{props.message}</p>
            </form>
         </div>
      </div>
   )
}

export default CreateAccount;