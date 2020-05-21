import React, { useState } from 'react'
import Summary from './Summary';
import funcs from '../business/functions'

const acc = new funcs.AccountController();

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
      <div className='container'>
         <div id='box1'>
            <h2 className='boxHeader'>Create an Account</h2>
            <div className='innerDiv'>
               <label htmlFor='name'>Account Name: </label>

               <input name='name' label='name' onChange={props.handleStartName}
                  type='text' id='name' className='input'></input>

               {/* <input name="fname" defaultValue={person.fname} className="input-control" /> */}

               <br></br>
               <label htmlFor='startBal'>Starting Balance: $</label>
               <input name='startBal' label='balance' onChange={props.handleStartBalance}
                  type='number' id='startBal' className='input'></input>
               <br></br>
               <button className='btn' id='createBtn' onClick={props.createAccount}>
                  Create Account</button>
               <p name='addMsg' id='addMsg' label='addmsg' className='msg'>{props.addMsg}</p>
            </div>
         </div>

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
         <Summary
            totalStuff={props.totalStuff}
            highestStuff={props.highestStuff}
            lowestStuff={props.lowestStuff}
            showAllAccts={props.showAllAccts}
         />
      </div>
   )
}


export default AccCtrl;