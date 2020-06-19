import React, { useState, useContext } from 'react'
import { LinkedList } from '../components/LinkedList/business/index.js'
import Stacks from '../components/FIFO_LIFO/business/lifo.js'
import Queues from '../components/FIFO_LIFO/business/fifo.js'

const AppContext = React.createContext()

class AppContextProvider extends React.Component {
   constructor() {
      super()
      this.state = {
         linkedList: new LinkedList(),
         stacks: new Stacks(),
         queues: new Queues(),
         // Linkedlist
         currentPosition: null,
         //FIFOLIFO
         LIFOTail: '',
         FIFOHead: ''
      }
   }

   render() {
      return (
         <AppContext.Provider
            value={{
               linkedList: this.state.linkedList,
               stacks: this.state.stacks,
               queues: this.state.queues
            }}
         />
      )
   }
}

export default AppContextProvider