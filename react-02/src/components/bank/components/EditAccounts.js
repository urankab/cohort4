import React, { useState } from 'react'
import funcs from '../business/functions'

const accControl = new funcs.AccountController();
const acc = new funcs.Account();

//Adds the created account from Accounts.js to the dropdown list
function EditAccounts(props) {
   let list;
   if (props.accounts) {
      list = Object.keys(props.accounts).map(k => {
         const a = props.accounts[k]
         return (
            <option key={a.key}>{a.accountName} - ${a.balance}</option>
         )
      })
   }

   const [selected, getSelected] = useState('')

   return (
      <div className='box2'>
         <h2 className='boxHeader'>Edit an Account</h2>
         <div className='innerDiv'>
            <p className='msg'></p>
            <label htmlFor='dropdown'>Select Account: </label>
            <select multiple={true}
               onChange={() => getSelected(selected)}
               id='dropdown'>
               {list}
            </select>
            <br></br>
            <label htmlFor='amount'>Deposit/Withdraw: $</label>
            <input
               type='number' className='input' id='amount'></input>
            <br></br>

            <button
               className='btn'>Deposit</button>

            <button className='btn' id='withdrawBtn'>Withdraw</button>

            <br></br>
            <label htmlFor='renameField'>New Name: </label>
            <input type='text' className='input' id='renameField'></input>
            <button className='btn' id='renameBtn'>Change Name</button>
            <button className='btn' id='deleteBtn'>Delete Account</button>
         </div>
      </div>
   )
}



export default EditAccounts;