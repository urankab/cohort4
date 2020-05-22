import React, { useState, useEffect } from 'react'
import AccCtrl from './AccCtrl'
import CreateAccount from './CreateAccount'
import { AccountController, Account } from '../business/functions'
import Summary from './Summary';

function AccountsApp() {
   const accCtrl = new AccountController();
   const [accountsCtrl] = useState(accCtrl)
   const [account] = useState(accountsCtrl.getDefaults())
   const [accounts] = useState(accountsCtrl.accounts)

   const [checkMsg, setCheck] = useState()
   const [message, setMessage] = useState({ text: '' })
   const [selectedAccount, setSelected] = useState()
   const [totalBal, setShowTotalBal] = useState()
   const [highestBal, setHighestBal] = useState()
   const [lowestBal, setLowestBal] = useState()
   const [showAllAccts, setShowAllAccts] = useState()

   useEffect(() => {
      console.log('useEffect: general')
   })

   function addAccount(accToAdd) {
      accountsCtrl.addAccount(accToAdd)

      // setShowTotalBal(accountsCtrl.totalBalance())
      // setHighestBal(accountsCtrl.highestAccount())
      // setLowestBal(accountsCtrl.lowestAccount())
      // setShowAllAccts(accountsCtrl.showAll())
   }

   function userMsg(msg) {
      setMessage({ text: msg })
   }

   return (
      <div className='container'>
         <h1 id='header'>Banking with Uranka</h1>
         <CreateAccount
            account={account}
            // accounts={accounts}
            acctCtrl={accountsCtrl}
            add={addAccount}
            userMsg={userMsg}
            message={message.text}
            checkMsg={accountsCtrl.msg}
         />
         <AccCtrl
            accounts={accounts}
            userMsg={userMsg}
            message={message.text}
         // selected={selectedAccount}
         // deposit={deposit}
         // withdraw={withDraw}
         // rename={renameAccount}
         // delete={deleteAccount}

         />
         <Summary
            totalStuff={totalBal}
            highestStuff={highestBal}
            lowestStuff={lowestBal}
            showAllAccts={showAllAccts}
         />
      </div>
   )
}

export default AccountsApp;