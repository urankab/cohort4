import React, { useState, useEffect } from 'react'
import AccCtrl from './AccCtrl'
import CreateAccount from './CreateAccount'
import { AccountController } from '../business/functions'
import Summary from './Summary';

function AccountsApp() {
   const accCtrl = new AccountController();
   const [accountsCtrl] = useState(accCtrl)
   const [account] = useState(accountsCtrl.getDefaults())
   const [accounts] = useState(accountsCtrl.accounts)

   const [message, setMessage] = useState({ text: '' })

   const [selectedAccount, setSelected] = useState()
   const [selectedName, setSelectedName] = useState()

   // const [totalBal, setShowTotalBal] = useState()
   // const [highestBal, setHighestBal] = useState()
   // const [lowestBal, setLowestBal] = useState()
   // const [showAllAccts, setShowAllAccts] = useState()

   // useEffect(() => {

   //    console.log('useEffect: general')
   // })

   // componentDidUpdate(){

   // }

   function addAccount(accToAdd) {
      accountsCtrl.addAccount(accToAdd)

      // setShowTotalBal(accountsCtrl.totalBalance())
      // setHighestBal(accountsCtrl.highestAccount())
      // setLowestBal(accountsCtrl.lowestAccount())
      // setShowAllAccts(accountsCtrl.showAll())
   }

   function getSelectedAccount(key) {
      setSelected(accountsCtrl.getAccountByKey(key))
      console.log(selectedAccount)
   }

   // function getAccountNameByKey(key) {
   //    setSelectedName(accountsCtrl.getAccountNameByKey(key))
   //    console.log(selectedName)
   // }

   function deleteAccount(accNameToDelete) {
      accountsCtrl.removeAccount(accNameToDelete)
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
            add={addAccount}
            userMsg={userMsg}
            message={message.text}
            checkMsg={accountsCtrl.msg}
         />
         <AccCtrl
            accounts={accounts}
            userMsg={userMsg}
            message={message.text}

            getSelectedAccount={getSelectedAccount}
            selectedAccount={selectedAccount}

            // toGetTheName={getAccountNameByKey}
            // getName={selectedName}

            delete={deleteAccount}
         // deposit={deposit}
         // withdraw={withDraw}
         // rename={renameAccount}
         />
         <Summary
         // totalStuff={totalBal}
         // highestStuff={highestBal}
         // lowestStuff={lowestBal}
         // showAllAccts={showAllAccts}
         />
      </div>
   )
}

export default AccountsApp;