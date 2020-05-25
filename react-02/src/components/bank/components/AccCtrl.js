import React from 'react'

function AccCtrl(props) {
   let list;
   if (props.accounts) {
      list = Object.keys(props.accounts).map(k => {
         const a = props.accounts[k]
         return (
            <option key={a.key} mykey={a.key} value={a.accountName}
               onClick={onClickName}
            >
               {a.accountName} - ${a.balance}
            </option>
         )
      })
   }

   function onClickName(e) {
      let key;
      key = e.target.getAttribute('mykey')
      console.log(key)
      props.getTheName(key)
      props.getAccByKey(key)
   }

   function onWithDraw() {
      let amt = document.getElementById('amount').value
      props.withdraw(amt)
      props.userMsg(`Withdrew from ${amt} ${props.theName}`)
   }

   function onDeposit() {
      let amt = document.getElementById('amount').value
      props.deposit(amt)
      props.userMsg(`Deposited ${amt} to ${props.theName}`)
   }

   function onRename() {
      if (props.theName) {
         let rename = document.getElementById('renameField').value
         props.rename(props.theName, rename)
         props.userEditMsg(`Renamed ${props.theName}`)
      }
   }

   function onDelete() {
      if (props.theName) {
         props.delete(props.theName)
         props.userEditMsg(`Delete ${props.theName}`)
      }
   }

   return (
      <div id='box2'>
         <h2 className='boxHeader'>Edit an Account</h2>
         <div className='innerDiv'>
            <p className='msg'>{props.editMsg}</p>
            <label id='selectLabel' htmlFor='dropdown'>Select Account: </label>
            <select id='dropdown'
               multiple={true}
            >
               {list}
            </select>
            <br></br>
            <label htmlFor='amount'>Deposit/Withdraw: $</label>
            <input
               type='number' className='input' id='amount'></input>
            <br></br>
            <button className='btn' onClick={onDeposit}>Deposit</button>
            <button className='btn' onClick={onWithDraw}
               id='withdrawBtn'>Withdraw</button>
            <br></br>
            <label htmlFor='renameField'>New Name: </label>
            <input type='text' className='input' id='renameField'></input>
            <button className='btn' id='renameBtn' onClick={onRename}>Change Name</button>
            <button className='btn' id='deleteBtn' onClick={onDelete}>
               Delete Account</button>
         </div>
      </div>
   )
}

// onClick={onDeposit}>Deposit</button>
//             <button className='btn' onClick={onWithDraw}


export default AccCtrl;