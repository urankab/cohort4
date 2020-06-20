import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core';

import {
   ThemeContext,
   AppStatesContext
} from '../../contexts/AppContext'
import AppTheme from '../../contexts/Colors'

const useStyles = makeStyles({
   header: {
      backgroundColor: '#45b6fe',
      fontSize: 40,
   },
   container: {
      backgroundColor: '#8fd3fe',
      borderRadius: 10,
      padding: 10,
      margin: 10,
      width: 400,
      display: 'inline-block',
      verticalAlign: 'top'
   },
   label: {
      width: 80,
   },
   input: {
      maxWidth: 125
   },
   btn: {
      margin: 10,
      padding: 5
   },
   list: {
      fontWeight: 'bold'
   },
   summary: {
      fontSize: 12,
      margin: 5
   }
});

function LinkedListDisplay() {
   const classes = useStyles();

   const [message, setMessage] = useState('')

   //Context 
   const theme = useContext(ThemeContext)[0];
   const currentTheme = AppTheme[theme];
   let context = useContext(AppStatesContext)

   let linky = context.linky

   function focusElement(name) {
      const el = document.getElementById(name);
      el.focus();
      el.select();
   }

   function addNode() {
      let subject = document.getElementById('subject').value
      let amount = document.getElementById('amount').value
      try {
         if (subject === '') {
            focusElement('subject');
            throw new Error('Please enter a subject/value')
         }
         if (amount === '') {
            focusElement('amount');
            throw new Error('Please enter an amount')
         }
         linky.insert(subject, amount)
         userMsg(`Created ${linky.currentNode.subject}`)
         document.getElementById('currentNodeDisplay').textContent = `Current Node: ${linky.currentNode.show()}`
         clearFields()
      } catch (e) {
         userMsg(e.message, 'error')
      }
   }

   function deleteNode() {
      userMsg(linky.delete())
      if (linky.size >= 1) {
         document.getElementById('currentNodeDisplay').textContent = `Current Node: ${linky.currentNode.show()}`
      }
      if (linky.size < 1) {
         document.getElementById('currentNodeDisplay').textContent = ''
      }
   }

   function onPrev() {
      if (linky.size >= 2) {
         linky.prev()
         if (linky.currentNode === linky.head) { //If CN is head, disable prev button
            document.getElementById('currentNodeDisplay').textContent = `Head Node: ${linky.currentNode.show()}`
            return null
         }
         else if (linky.currentNode !== linky.head) {
            document.getElementById('currentNodeDisplay').textContent = `Current Node: ${linky.currentNode.show()}`
         }
      } else {
         userMsg('Nothing to move back too')
      }
   }

   function onNext() {
      if (linky.size >= 2) {
         linky.next()
         if (linky.currentNode === linky.tail) { //If CN is tail, disable next button
            document.getElementById('currentNodeDisplay').textContent = `Tail Node: ${linky.currentNode.show()}`
            return null
         }
         else if (linky.currentNode !== linky.tail) {
            document.getElementById('currentNodeDisplay').textContent = `Current Node: ${linky.currentNode.show()}`
         }
      } else {
         userMsg('Nothing to move next too')
      }
   }

   function onFirst() {
      if (linky.size >= 2) {
         linky.first()
         document.getElementById('currentNodeDisplay').textContent = `First Node: ${linky.currentNode.show()}`
      }
      else if (linky.size === 1) {
         userMsg('Only 1 item in list')
      }
      else {
         userMsg('Nothing in list')
      }
   }

   function onLast() {
      if (linky.size >= 2) {
         linky.last()
         document.getElementById('currentNodeDisplay').textContent = `Last Node: ${linky.currentNode.show()}`
      }
      else if (linky.size === 1) {
         userMsg('Only 1 item in list')
      }
      else {
         userMsg('Nothing in list')
      }
   }

   function userMsg(msg) {
      setMessage({ text: msg })
   }

   function clearFields() {
      document.getElementById('subject').value = ''
      document.getElementById('amount').value = ''
   }

   function onAll() {
      document.getElementById('list').textContent = linky.printList()
   }

   function onSub() {
      let sub = document.getElementById('searchInput').value
      document.getElementById('list').textContent = linky.searchBySubject(sub)
   }

   function onAmt() {
      let amt = document.getElementById('searchInput').value
      document.getElementById('list').textContent = linky.searchByAmount(amt)
   }

   return (
      <div className={classes.root}>
         <h1 style={{
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.color}`,
         }}>Linked List</h1>
         <div className={classes.container}>
            <p id='msg'>{message.text}</p>
            <label htmlFor='subject' className={classes.label}>Subject:</label>
            <input id='subject' className={classes.input} type='text' placeholder='Subject'></input>
            <br></br>
            <label htmlFor='amount' className={classes.label}>Amount: </label>
            <input id='amount' className={classes.input} type='number' placeholder='#'></input>
            <br></br>
            <button id='addBtn' className={classes.btn} onClick={addNode}>Add</button>
            <button id='delBtn' className={classes.btn} onClick={deleteNode}>Delete</button>
            <p id='currentNodeDisplay'>Current Node: {linky.showCurrent()}</p>
            <button id='prevBtn' className={classes.btn} onClick={onPrev}>Prev Node</button>
            <button id='nextBtn' className={classes.btn} onClick={onNext}>Next Node</button>
            <br></br>
            <h4>{linky.printList()}</h4>
            <button className={classes.btn} onClick={onFirst}>First Node</button>
            <button className={classes.btn} onClick={onLast}>Last Node</button>
         </div>
         <div className={classes.container} style={{
            backgroundColor: `${currentTheme.backgroundColor}`,
            boxShadow: `${currentTheme.boxShadow}`
         }}>
            <p className={classes.summary}>Size: {linky.size}</p>
            <p className={classes.summary}>Total Amount: {linky.totalAmounts()}</p>
            <p id='list' className={classes.list}>
            </p>
            <input id='searchInput' placeholder='Enter subject or amount'></input>
            <br></br>
            <button className={classes.btn} onClick={onAll}>Show All</button>
            <button className={classes.btn} onClick={onSub}>Sort by Subject</button>
            <button className={classes.btn} onClick={onAmt}>Sort by Amount</button>
         </div>
      </div >
   )
}
export default LinkedListDisplay