import React, { useState } from 'react'
import { LinkedList } from './business/index'
import { makeStyles } from '@material-ui/core';

const linky = new LinkedList()

const useStyles = makeStyles({
   root: {

   },
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

   const [head, setHead] = useState(null)
   const [tail, setTail] = useState(null)
   const [currentPosition, setCurrentP] = useState(null)

   const [message, setMessage] = useState('')
   const [posMessage, setPosMsg] = useState('')

   const [showList, setShowList] = useState(false)
   const [sortBySub, setSortBySub] = useState(false)
   const [sortByAmount, setSortByAmount] = useState(false)

   function focusElement(name) {
      const el = document.getElementById(name);
      el.focus();
      el.select();
   }

   function addAtStart(e) {
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
         linky.prepend(subject, amount)
         setShowList(true)
         updatePosition()
         clearFields()
      } catch (e) {
         userMsg(e.message, 'error')
      }
      e.preventDefault(); //What is this?
   }

   function deleteAtEnd() {
      userMsg(linky.deleteTail())
      setShowList(true)
      updatePosition()
   }

   // function addAtEnd(e) {
   //    let subject = document.getElementById('subject').value
   //    let amount = document.getElementById('amount').value
   //    try {
   //       if (subject === '') {
   //          focusElement('subject');
   //          throw new Error('Please enter a subject/value')
   //       }
   //       if (amount === '') {
   //          focusElement('amount');
   //          throw new Error('Please enter an amount')
   //       }
   //       linky.append(subject, amount)
   //       setShowList(true)
   //       updatePosition()
   //       updateSize()
   //       clearFields()
   //    } catch (e) {
   //       userMsg(e.message, 'error')
   //    }
   //    e.preventDefault(); //What is this?
   // }

   function onPrev() {
      setCurrentP(linky.prev())
      userMsg(currentPosition)
   }


   function onNext() {
      setCurrentP(linky.next())
      userMsg(currentPosition)
   }

   function userMsg(msg) {
      setMessage({ text: msg })
   }

   function posMsg(msg) {
      setPosMsg({ text: msg })
   }

   function updatePosition() {
      setHead(linky.head)
      setTail(linky.tail)
   }

   function clearFields() {
      document.getElementById('subject').value = ''
      document.getElementById('amount').value = ''
   }

   let output;
   if (showList) {
      output = linky.printList()
   }
   else if (sortBySub) {
      output = linky.searchBySubject()
   }
   else if (sortByAmount) {
      output = linky.searchByAmount()
   }
   else {
      output = ''
   }


   return (
      <div className={classes.root}>
         <h1 className={classes.header}>Linked List Fun!</h1>
         <div className={classes.container}>
            <p>{message.text}</p>
            <label htmlFor='subject' className={classes.label}>Subject:</label>
            <input id='subject' className={classes.input} type='text' placeholder='Subject'></input>
            <br></br>
            <label htmlFor='amount' className={classes.label}>Amount: </label>
            <input id='amount' className={classes.input} type='number' placeholder='#'></input>
            <br></br>
            <button className={classes.btn} onClick={addAtStart}>Add</button>
            <button className={classes.btn} onClick={deleteAtEnd}>Delete</button>
            <p>{posMessage.text}</p>
            <button className={classes.btn} onClick={onPrev}>Prev Node</button>
            <button className={classes.btn} onClick={onNext}>Next Node</button>
         </div>
         <div className={classes.container}>
            <p className={classes.summary}>Size: {linky.size}</p>
            <p className={classes.summary}>Total Amount: {linky.totalAmounts()}</p>
            <p className={classes.list}>
               {output}
            </p>
            <button className={classes.btn}>Sort by Subject</button>
            <button className={classes.btn}>Sort by Amount</button>
         </div>
      </div >
   )
}

export default LinkedListDisplay