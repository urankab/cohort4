import React, { useState } from 'react'

function AccCtrl(props) {

   // const [selectedAccount, setSelected] = useState()

   // let list;
   // if (props.accounts) {
   //    list = Object.keys(props.accounts).map(k => {
   //       const a = props.accounts[k]
   //       return (
   //          <option key={a.key}>{a.accountName} - ${a.balance}</option>
   //       )
   //    })
   // }

   let list;
   if (props.accounts) {
      console.log()
      list = Object.keys(props.accounts).map(k => {
         const a = props.accounts[k]
         return (
            <option key={a.key} mykey={a.key}>{a.accountName} - ${a.balance}</option>
         )
      })
   }

   function onDelete() {
      props.delete(props.getName)
      console.log(props.accounts)
      props.userMsg(`Delete ${props.getName}`)

   }

   function onClickSelect(e) {
      props.getSelectedAccount(e.target.getAttribute('mykey'))
   }

   // function onClickSelect(e) {
   //    props.toGetTheName(e.target.getAttribute('mykey'))
   // }


   return (
      <div id='box2'>
         <h2 className='boxHeader'>Edit an Account</h2>
         <div className='innerDiv'>
            <p className='msg'>{props.messagae}</p>
            <label id='selectLabel' htmlFor='dropdown'>Select Account: </label>
            <select id='dropdown'
               multiple={true}
               // onChange={onClickSelect}
               onClick={onClickSelect}
            // value={props.selectedAccount}
            // defaultValue={props.selectedAccount}
            >
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