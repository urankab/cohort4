import React from 'react'

function AccCtrl(props) {
   let options;
   if (props.accounts) {
      options = Object.keys(props.accounts).map(k => {
         const a = props.accounts[k]
         return (
            <option key={a.key} mykey={a.key} value={a.accountName}
            >
               {a.accountName} - ${a.balance}
            </option>
         )
      })
   }

   function focusElement(name) {
      const el = document.querySelector(`[id=${name}]`);
      el.focus();
   }

   function onDeposit() {
      if (props.accLength >= 1) {
         let e = document.getElementById('dropdown')
         let theKey = e.options[e.selectedIndex].getAttribute("mykey")
         let theName = e.options[e.selectedIndex].value

         let amt = document.getElementById('amount').value
         if (theKey != '') {
            if (amt != '') {
               props.acctCtrl.getAccountByKey(theKey).deposit(amt)
               props.userMsg('')
               props.userEditMsg(`Deposited ${amt} to ${theName}`)
               props.updateSummary()
            } else {
               focusElement('amount');
               props.userMsg('')
               props.userEditMsg('Please enter an amount to deposit')
            }
         } else {
            props.userMsg('')
            props.userEditMsg('Select account to deposit')
         }
      } else {
         props.userEditMsg('No accounts to deposit too')
      }
   }

   function onWithdraw() {
      if (props.accLength >= 1) {
         let e = document.getElementById('dropdown')
         let theKey = e.options[e.selectedIndex].getAttribute("mykey")
         let theName = e.options[e.selectedIndex].value

         let amt = document.getElementById('amount').value
         if (theKey != '') {
            if (amt != '') {
               props.acctCtrl.getAccountByKey(theKey).withdraw(amt)
               props.userMsg('')
               props.userEditMsg(`Withdrawed ${amt} to ${theName}`)
               props.updateSummary()
            } else {
               focusElement('amount');
               props.userMsg('')
               props.userEditMsg('Please enter an amount to withdraw')
            }
         } else {
            props.userMsg('')
            props.userEditMsg('Select account to withdraw from')
         }
      } else {
         props.userEditMsg('No accounts to withdraw from')
      }
   }

   function onDelete() {
      if (props.accLength >= 1) {
         let e = document.getElementById('dropdown')
         let theKey = e.options[e.selectedIndex].getAttribute("mykey")
         let theName = e.options[e.selectedIndex].value
         if (theKey != '') {
            props.delete(theKey)
            props.userEditMsg(`Deleted ${theName}`)
         }
      }
      else {
         focusElement('dropdown');
         props.userEditMsg('No accounts to delete')
      }
   }

   function onRename() {
      if (props.accLength >= 1) {
         let renameValue = document.getElementById('renameField').value
         let e = document.getElementById('dropdown')
         let theKey = e.options[e.selectedIndex].getAttribute("mykey")
         let accName = e.options[e.selectedIndex].value
         if (theKey !== '') {
            if (renameValue !== '') {
               props.rename(theKey, renameValue)
               props.userEditMsg(`Renamed ${accName}`)
            } else {
               focusElement('renameField')
               props.userEditMsg('Please enter a new name')
            }
         }
      }
      else {
         props.userEditMsg('No accounts to rename')
      }
   }

   return (
      <div id='box2'>
         <h2 className='boxHeader'>Edit an Account</h2>
         <div className='innerDiv'>
            <p className='msg'>{props.editMsg}</p>
            <label id='selectLabel' htmlFor='dropdown'>Select Account: </label>
            <select id='dropdown' name='dropdown'>
               {options}
            </select>
            <br></br>
            <label htmlFor='amount'>Deposit/Withdraw: $</label>
            <input
               type='number' className='input' id='amount'></input>
            <br></br>
            <button className='btn' id='depBtn' onClick={onDeposit}>Deposit</button>
            <button className='btn' id='withdrawBtn' onClick={onWithdraw}>Withdraw</button>
            <br></br>
            <label htmlFor='renameField'>New Name: </label>
            <input type='text' className='input' id='renameField'></input>
            <button className='btn' id='renameBtn' onClick={onRename}>
               Change Name</button>
            <button className='btn' id='deleteBtn' onClick={onDelete}>
               Delete Account</button>
         </div>
      </div >
   )
}

export default AccCtrl;