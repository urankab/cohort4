import React, { useState } from 'react'

function AccCtrl(props) {
   let list;
   if (props.accounts) {
      list = Object.keys(props.accounts).map(k => {
         const a = props.accounts[k]
         return (
            <option key={a.key} mykey={a.key} onClick={onClickName}>
               {a.accountName} - ${a.balance}
            </option>
         )
      })
   }

   function onDelete() {
      console.log(props.accounts)
      props.delete(props.theName)
      props.userEditMsg(`Delete ${props.theName}`)
      console.log(props.accounts)
   }

   function onClickName(e) {
      let key;
      key = e.target.getAttribute('mykey')
      props.getTheName(key)
   }

   return (
      <div id='box2'>
         <h2 className='boxHeader'>Edit an Account</h2>
         <div className='innerDiv'>
            <p className='msg'>{props.editMsg}</p>
            <label id='selectLabel' htmlFor='dropdown'>Select Account: </label>
            <select id='dropdown' multiple={true}>
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
            <button className='btn' id='deleteBtn' onClick={onDelete}>
               Delete Account</button>
         </div>
      </div>
   )
}


export default AccCtrl;