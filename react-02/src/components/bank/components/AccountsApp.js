import React, { useState } from 'react'
import AccCtrl from './AccCtrl'
import CreateAccount from './CreateAccount'
import { AccountController } from '../business/functions'
import Summary from './Summary';

const acctCtrl = new AccountController();

function AccountsApp() {
   const [editMsg, setEditMessage] = useState('')
   const [message, setMessage] = useState('')

   const [totalBal, setShowTotalBal] = useState()
   const [highestBal, setHighestBal] = useState()
   const [lowestBal, setLowestBal] = useState()

   function updateSummary() {
      setShowTotalBal(acctCtrl.totalBalance())
      setHighestBal(acctCtrl.highestAccount())
      setLowestBal(acctCtrl.lowestAccount())
   }

   function userMsg(msg) {
      setMessage({ text: msg })
   }

   function userEditMsg(msg) {
      setEditMessage({ text: msg })
   }

   function addAccount(accToAdd) {
      acctCtrl.addAccount(accToAdd)
      setEditMessage('')
      updateSummary()
   }

   function rename(thekey, newName) {
      acctCtrl.renameAccount(thekey, newName)
      setMessage('')
      updateSummary()
   }

   function deleteAccount(thekey) {
      acctCtrl.removeAccount(thekey)
      setMessage('')
      updateSummary()
   }

   return (
      <div className='container'>
         <h1 id='header'>Banking with Uranka</h1>
         <CreateAccount
            account={acctCtrl.getDefaults()}
            acctCtrl={acctCtrl}

            userEditMsg={userEditMsg}
            editMsg={editMsg.text}

            add={addAccount}
            userMsg={userMsg}
            message={message.text}
         />
         <AccCtrl
            acctCtrl={acctCtrl}
            accounts={acctCtrl.accounts}

            userMsg={userMsg}
            message={message.text}

            userEditMsg={userEditMsg}
            editMsg={editMsg.text}

            rename={rename}
            delete={deleteAccount}
            updateSummary={updateSummary}
         />
         <Summary
            accounts={acctCtrl.accounts}
            totalStuff={totalBal}
            highestStuff={highestBal}
            lowestStuff={lowestBal}
         />
      </div>
   )
}

export default AccountsApp;