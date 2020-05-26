import React, { useState } from 'react'
import AccCtrl from './AccCtrl'
import CreateAccount from './CreateAccount'
import { AccountController } from '../business/functions'
import Summary from './Summary';

function AccountsApp() {
   const accCtrl = new AccountController();

   const [accountsCtrl] = useState(accCtrl)
   const [account] = useState(accountsCtrl.getDefaults())
   const [accounts] = useState(accountsCtrl.accounts)
   const [accLength, setLength] = useState()

   const [editMsg, setEditMessage] = useState('')
   const [message, setMessage] = useState('')

   const [totalBal, setShowTotalBal] = useState()
   const [highestBal, setHighestBal] = useState()
   const [lowestBal, setLowestBal] = useState()

   function updateSummary() {
      setShowTotalBal(accountsCtrl.totalBalance())
      setHighestBal(accountsCtrl.highestAccount())
      setLowestBal(accountsCtrl.lowestAccount())
   }

   function userMsg(msg) {
      setMessage({ text: msg })
   }

   function userEditMsg(msg) {
      setEditMessage({ text: msg })
   }

   function updateLength() {
      setLength(accountsCtrl.checkLength())
   }

   function addAccount(accToAdd) {
      accountsCtrl.addAccount(accToAdd)
      console.log(accounts)
      setEditMessage('')
      updateLength()
      updateSummary()
   }

   function rename(thekey, newName) {
      accountsCtrl.renameAccount(thekey, newName)
      console.log(accounts)
      setMessage('')
      updateSummary()
   }

   function deleteAccount(thekey) {
      accountsCtrl.removeAccount(thekey)
      console.log(accounts)
      setMessage('')
      updateLength()
      updateSummary()
   }

   return (
      <div className='container'>
         <h1 id='header'>Banking with Uranka</h1>
         <CreateAccount
            account={account}
            acctCtrl={accountsCtrl}

            userEditMsg={userEditMsg}
            editMsg={editMsg.text}

            add={addAccount}
            userMsg={userMsg}
            message={message.text}
         />
         <AccCtrl
            acctCtrl={accountsCtrl}
            accounts={accounts}

            userMsg={userMsg}
            message={message.text}

            userEditMsg={userEditMsg}
            editMsg={editMsg.text}

            accLength={accLength}

            rename={rename}
            delete={deleteAccount}
            updateSummary={updateSummary}
         />
         <Summary
            accounts={accounts}
            totalStuff={totalBal}
            highestStuff={highestBal}
            lowestStuff={lowestBal}
         />
      </div>
   )
}

export default AccountsApp;