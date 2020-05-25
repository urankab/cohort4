import React, { useState } from 'react'
import AccCtrl from './AccCtrl'
import CreateAccount from './CreateAccount'
import { Account, AccountController } from '../business/functions'
import Summary from './Summary';

function AccountsApp() {
   const accCtrl = new AccountController();

   const [accountsCtrl] = useState(accCtrl)
   const [account] = useState(accountsCtrl.getDefaults())
   const [accounts] = useState(accountsCtrl.accounts)

   const [selectedAccount, setSelectedAccount] = useState()
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

   function addAccount(accToAdd) {
      if (accountsCtrl.checkName(accToAdd.accountName)) {
         userMsg('Test')
         console.log('caught dup')
      }
      else {
         accountsCtrl.addAccount(accToAdd)
         console.log(accounts)
         updateSummary()
      }
   }

   // function getAccountNameByKey(key) {
   //    setSelectedName(accountsCtrl.getAccountNameByKey(key))
   // }

   function getAccountByKey(key) {
      setSelectedAccount(accountsCtrl.getAccountByKey(key))
   }

   // function withdraw(amount) {
   //    console.log(selectedAccount)
   //    acc.withdraw(amount)
   //    updateSummary()
   // }

   function deposit(amount) {
      console.log(amount)
      console.log(selectedAccount)
      // accountsCtrl.selectedAccount.deposit(amount)
      updateSummary()
   }

   function rename(selectedName, newName) {
      accountsCtrl.renameAccount(selectedName, newName)
      console.log(accounts)
      updateSummary()
   }

   function deleteAccount(nameToDelete) {
      accountsCtrl.removeAccount(nameToDelete)
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

            getAccByKey={getAccountByKey}
            theAccount={selectedAccount}

            // withdraw={withdraw}
            deposit={deposit}
            rename={rename}
            delete={deleteAccount}
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