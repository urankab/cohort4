import React, { useState, useEffect } from 'react'
import AccCtrl from './AccCtrl'
import CreateAccount from './CreateAccount'
import { Account, AccountController } from '../business/functions'
import Summary from './Summary';

function AccountsApp() {
   const accCtrl = new AccountController();
   const [accountsCtrl] = useState(accCtrl)
   const [account] = useState(accountsCtrl.getDefaults())
   const [accounts] = useState(accountsCtrl.accounts)

   const [selectedName, setSelectedName] = useState()
   const [duplicateName, setDupName] = useState()
   const [message, setMessage] = useState('')

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

   function plzCheckName(name) {
      accountsCtrl.checkName(name)
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

   function userMsg(msg) {
      setMessage({ text: msg })
   }

   return (
      <div className='container'>
         <h1 id='header'>Banking with Uranka</h1>
         <CreateAccount
            account={account}
            acctCtrl={accountsCtrl}
            checkName={plzCheckName}
            add={addAccount}
            duplicateName={duplicateName}
            userMsg={userMsg}
            message={message.text}
         />
         <AccCtrl
            acctCtrl={accountsCtrl}
            accounts={accounts}
            userMsg={userMsg}

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