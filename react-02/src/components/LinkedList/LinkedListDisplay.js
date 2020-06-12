import React, { useState, useContext } from 'react'
import { LinkedList } from './business/index'
import { makeStyles } from '@material-ui/core';

import ThemeContext from '../../contexts/ThemeContext'
import AppTheme from '../../contexts/Colors'

const linky = new LinkedList()

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

   const [currentPosition, setCurrentP] = useState(null)
   const [size, setSize] = useState(0)

   const [message, setMessage] = useState('')
   const [posMessage, setPosMsg] = useState('')

   const [showList, setShowList] = useState('')

   const theme = useContext(ThemeContext)[0];
   const currentTheme = AppTheme[theme];

   let prevBtn = document.getElementById('prevBtn')
   let nextBtn = document.getElementById('nextBtn')

   function focusElement(name) {
      const el = document.getElementById(name);
      el.focus();
      el.select();
   }

   function addNode(e) {
      let subject = document.getElementById('subject').value
      let amount = document.getElementById('amount').value
      setShowList('all')
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
         setSize(linky.size)
         setCurrentP(`Current Node: ${linky.currentNode.subject} ~ ${linky.currentNode.amount}`)
         userMsg(`Created ${linky.currentNode.subject}`)
         posMsg(`Current Node: ${linky.currentNode.show()}`)
         clearFields()
      } catch (e) {
         userMsg(e.message, 'error')
      }
      if (linky.size >= 2) {
         prevBtn.disabled = false
         nextBtn.disabled = false
      }
   }

   function deleteNode() {
      userMsg(linky.delete())
      document.getElementById('list').textContent = linky.printList()
      setShowList('all')
      if (linky.size >= 1) {
         setSize(linky.size)
         setCurrentP(`Current Node: ${linky.currentNode.subject} ~ ${linky.currentNode.amount}`)
         posMsg(`Current Node: ${linky.currentNode.show()}`)
      }
      else {
         setCurrentP(null)
         posMsg(`Current Node: None`)
      }
   }

   function onPrev() {
      setShowList('all')
      if (linky.size >= 2) {
         prevBtn.disabled = false
         linky.prev()
         if (linky.currentNode === linky.head) { //If CN is head, disable prev button
            setCurrentP(`Current Node: ${linky.currentNode.subject} ~ ${linky.currentNode.amount}`)
            posMsg(`Current Node (Head): ${linky.currentNode.show()}`)
            prevBtn.disabled = true
            nextBtn.disabled = false
         }
         else if (linky.currentNode !== linky.head) {
            setCurrentP(`Current Node: ${linky.currentNode.subject} ~ ${linky.currentNode.amount}`)
            nextBtn.disabled = false
            posMsg(`Current Node: ${linky.currentNode.show()}`)
         }
      } else {
         userMsg('Nothing to move back too')
      }
   }

   function onNext() {
      setShowList('all')
      if (linky.size >= 2) {
         nextBtn.disabled = false
         linky.next()
         if (linky.currentNode === linky.tail) { //If CN is tail, disable next button
            setCurrentP(`Current Node: ${linky.currentNode.subject} ~ ${linky.currentNode.amount}`)
            posMsg(`Current Node (Tail): ${linky.currentNode.show()}`)
            nextBtn.disabled = true
            prevBtn.disabled = false
         }
         else if (linky.currentNode !== linky.tail) {
            setCurrentP(`Current Node: ${linky.currentNode.subject} ~ ${linky.currentNode.amount}`)
            prevBtn.disabled = false
            posMsg(`Current Node: ${linky.currentNode.show()}`)
         }
      } else {
         userMsg('Nothing to move next too')
      }
   }

   function onFirst() {
      setShowList('all')
      if (linky.size >= 2) {
         setCurrentP(`Current Node: ${linky.first().subject} ~ ${linky.first().amount}`)
         posMsg(`Current Node (First): ${linky.currentNode.show()}`)
         prevBtn.disabled = true
         nextBtn.disabled = false
      }
      else if (linky.size === 1) {
         userMsg('Only 1 item in list')
      }
      else {
         userMsg('Nothing in list')
      }
   }

   function onLast() {
      setShowList('all')
      if (linky.size >= 2) {
         setCurrentP(`Current Node: ${linky.last().subject} ~ ${linky.last().amount}`)
         posMsg(`Current Node (Last): ${linky.currentNode.show()}`)
         nextBtn.disabled = true
         prevBtn.disabled = false
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

   function posMsg(msg) {
      setPosMsg({ text: msg })
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

   if (showList === 'all') {
      document.getElementById('list').textContent = linky.printList()
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
            <p id='currentNode'>{posMessage.text}</p>
            <button id='prevBtn' className={classes.btn} onClick={onPrev}>Prev Node</button>
            <button id='nextBtn' className={classes.btn} onClick={onNext}>Next Node</button>
            <br></br>
            <button className={classes.btn} onClick={onFirst}>First Node</button>
            <button className={classes.btn} onClick={onLast}>Last Node</button>
         </div>
         <div className={classes.container} style={{
            backgroundColor: `${currentTheme.backgroundColor}`,
            boxShadow: `${currentTheme.boxShadow}`
         }}>
            <p className={classes.summary}>Size: {size}</p>
            <p className={classes.summary}>Total Amount: {linky.totalAmounts()}</p>
            <p className={classes.summary}>{currentPosition}</p>
            <p id='list' className={classes.list}>
               {/* {output} */}
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