import React from 'react'
import { LinkedList } from '../components/LinkedList/business/index.js'
import Stacks from '../components/FIFO_LIFO/business/lifo.js'
import Queues from '../components/FIFO_LIFO/business/fifo.js'

export const ThemeContext = React.createContext(['pink', () => { }])

export let AppLinkedList = new LinkedList()
export const AppStacks = new Stacks()
export const AppQueues = new Queues()

export const AppStatesContext = React.createContext(
   {
      linky: AppLinkedList,
      lifo: AppStacks,
      fifo: AppQueues
   }
)



