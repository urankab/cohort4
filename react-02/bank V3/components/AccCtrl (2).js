import React from 'react'

function AccCtrl(props) {

   let list;
   if (props.accounts) {
      list = Object.keys(props.accounts).map(k => {
         const a = props.accounts[k]
         return (
            <option key={a.key}>{a.accountName} - ${a.balance}</option>
         )
      })
   }

   return (
      <div id='box2'>
         <h2 className='boxHeader'>Edit an Account</h2>
         <div className='innerDiv'>
            <p className='msg'></p>
            <label id='selectLabel' htmlFor='dropdown'>Select Account: </label>
            <select multiple={true}
               onChange={props.selected}
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


export default AccCtrl;