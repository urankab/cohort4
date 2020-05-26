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

   // function onWithDraw() {
   //    let amt = document.getElementById('amount').value
   //    props.withdraw(amt)
   //    props.userMsg(`Withdrew from ${amt} ${props.theName}`)
   // }


   // function onDeposit() {
   //    if (selectedName) {
   //       let amt = document.getElementById('amount').value
   //       props.deposit(amt)
   //       props.userMsg(`Deposited ${amt} to ${props.theName}`)
   //    } else {
   //       props.userEditMsg('Select account to deposit')
   //    }
   // }

   function onDelete() {
      let e = document.getElementById('dropdown')
      let value = e.options[e.selectedIndex].value
      if (value != '') {
         props.delete(value)
         props.userEditMsg(`Deleted ${value}`)
      }
      else {
         props.userEditMsg('Select account to delete')
      }
   }

   function onRename() {
      let renameValue = document.getElementById('renameField').value
      let e = document.getElementById('dropdown')
      let value = e.options[e.selectedIndex].value
      if (value != '') {
         if (renameValue != '') {
            props.rename(value, renameValue)
            props.userEditMsg(`Renamed ${value}`)
         } else {
            props.userEditMsg('Please enter a new name')
         }
      }
      else {
         props.userEditMsg('Select account to rename')
      }
   }

   return (
      <div id='box2'>
         <h2 className='boxHeader'>Edit an Account</h2>
         <div className='innerDiv'>
            <p className='msg'>{props.editMsg}</p>
            <label id='selectLabel' htmlFor='dropdown'>Select Account: </label>
            <select id='dropdown' data-testid='select'>
               {options}
            </select>
            <br></br>
            <label htmlFor='amount'>Deposit/Withdraw: $</label>
            <input
               type='number' className='input' id='amount'></input>
            <br></br>
            <button className='btn' id='depBtn'>Deposit</button>
            <button className='btn' id='withdrawBtn'>Withdraw</button>
            <br></br>
            <label htmlFor='renameField'>New Name: </label>
            <input type='text' className='input' id='renameField'></input>
            <button className='btn' id='renameBtn' onClick={onRename}>
               Change Name</button>
            <button className='btn' id='deleteBtn' onClick={onDelete}>
               Delete Account</button>
         </div>
      </div>
   )
}

export default AccCtrl;