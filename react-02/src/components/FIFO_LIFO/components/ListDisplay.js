import React, { useState } from 'react'
import Queues from '../business/fifo.js'
import Stacks from '../business/lifo.js'
import CreateItem from './CreateItem'
import LIFO from './LIFO'
import FIFO from './FIFO'

const fifo = new Queues()
const lifo = new Stacks()

function ListDisplay() {
    const [LIFOTail, setLIFOTail] = useState('')
    const [message, setMessage] = useState('')
    const [LIFOMessage, setLIFOMessage] = useState('')

    function addToLIFO(elephant) {
        lifo.push(elephant)
        setLIFOTail(lifo.peek())
    }

    function removedFromLIFO() {
        if (lifo.size >= 1) {
            LIFOMsg(`Removed ${lifo.pop()}`)
            userMsg('')
        } else {
            LIFOMsg('Nothing to remove')
            userMsg('')
        }
    }

    function userMsg(msg) {
        setMessage({ text: msg })
    }

    
    function LIFOMsg(msg) {
        setLIFOMessage({ text: msg })
    }

    return (
        <div>
            <h1 id='listHeader'>FIFO ~ LIFO</h1>
            <h3 id='listHeader2'>Create your Elephant</h3>
            <div id='container'>
                <LIFO
                    LIFOelephants={lifo.storage}
                    LIFOMessage={LIFOMessage}
                    LIFOTail={lifo.peek()}
                    remove={removedFromLIFO}
                />
                <CreateItem
                    addToLIFO={addToLIFO}
                    userMsg={userMsg}
                    LIFOMsg={LIFOMsg}
                    message={message.text}
                />
                <FIFO

                />
            </div>
        </div>
    )
}

export default ListDisplay