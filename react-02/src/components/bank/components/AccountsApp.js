import React, { useState, useEffect } from 'react'
import AccCtrl from './AccCtrl'
import CreateAccount from './CreateAccount'
import { Account, AccountController } from '../business/functions'
import Summary from './Summary';

function AccountsApp() {
   const accCtrl = new AccountController();
   const [accountsCtrl] = useState(accCtrl)
   const [accountDefaults] = useState(accountsCtrl.getDefaults())
   const [accounts] = useState(accountsCtrl.accounts)

   const [selectedName, setSelectedName] = useState()

   // const [message, setMessage] = useState('')

   const [addMessage, setAddMessage] = useState('')
   const [editMsg, setEditMsg] = useState('')

   const [totalBal, setShowTotalBal] = useState()
   const [highestBal, setHighestBal] = useState()
   const [lowestBal, setLowestBal] = useState()

   useEffect(() => {
      console.log('useEffect: general')
   })

   function updateSummary() {
      setShowTotalBal(accountsCtrl.totalBalance())
      setHighestBal(accountsCtrl.highestAccount())
      setLowestBal(accountsCtrl.lowestAccount())
   }

   function addAccount(accToAdd) {
      accountsCtrl.addAccount(accToAdd)
      updateSummary()
   }

   function getAccountNameByKey(key) {
      setSelectedName(accountsCtrl.getAccountNameByKey(key))
   }

   function deleteAccount(nameToDelete) {
      accountsCtrl.removeAccount(nameToDelete)
      updateSummary()
   }

   function userAddMsg(msg) {
      setAddMessage({ text: msg })

   }

   function userEditMsg(msg) {
      setEditMsg({ text: msg })
   }

   return (
      <div className='container'>
         <h1 id='header'>Banking with Uranka</h1>
         <CreateAccount
            accountDefaults={accountDefaults}
            acctCtrl={accountsCtrl}
            add={addAccount}
            userAddMsg={userAddMsg}
            addMessage={addMessage.text}
         />
         <AccCtrl
            acctCtrl={accountsCtrl}
            accounts={accounts}
            userEditMsg={userEditMsg}
            editMsg={editMsg.text}

            getTheName={getAccountNameByKey}
            theName={selectedName}
            delete={deleteAccount}
         // deposit={deposit}
         // withdraw={withDraw}
         // rename={renameAccount}
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