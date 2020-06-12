import React, { useState, useContext } from 'react'
import Queues from '../business/fifo.js'
import Stacks from '../business/lifo.js'
import CreateItem from './CreateItem'
import LIFO from './LIFO'
import FIFO from './FIFO'

import ThemeContext from '../../../contexts/ThemeContext'
import AppTheme from '../../../contexts/Colors'

const fifo = new Queues()
const lifo = new Stacks()

function ListDisplay() {
    const [LIFOTail, setLIFOTail] = useState('')
    const [FIFOHead, setFIFOHead] = useState('')

    const [message, setMessage] = useState('')
    const [LIFOMessage, setLIFOMessage] = useState('')
    const [FIFOMessage, setFIFOMessage] = useState('')

    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    //LIFO----------------------------
    function addToLIFO(elephant) {
        lifo.push(elephant)
        setLIFOTail(lifo.peek())
    }

    function removedFromLIFO() {
        lifo.pop()
        setLIFOTail(lifo.peek())
    }

    //FIFO ----------------------------

    function addToFIFO(elephant) {
        fifo.enqueue(elephant)
        setFIFOHead(fifo.peek())
    }

    function removedFromFIFO() {
        fifo.dequeue()
        setFIFOHead(fifo.peek())
    }

    function userMsg(msg) {
        setMessage({ text: msg })
    }

    function LIFOMsg(msg) {
        setLIFOMessage({ text: msg })
    }

    function FIFOMsg(msg) {
        setFIFOMessage({ text: msg })
    }

    return (
        <div>
            <h1 style={{
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.color}`,
            }}
                id='listHeader'>FIFO ~ LIFO</h1>
            <h3 id='listHeader2'>Create your Elephant</h3>
            <div id='container2'>
                <LIFO
                    LIFOelephants={lifo.storage}
                    LIFOTail={LIFOTail}
                    LIFOSize={lifo.size}

                    LIFOMsg={LIFOMsg}
                    userMsg={userMsg}
                    LIFOMessage={LIFOMessage.text}

                    remove={removedFromLIFO}
                />
                <CreateItem
                    addToLIFO={addToLIFO}
                    addToFIFO={addToFIFO}
                    userMsg={userMsg}
                    LIFOMsg={LIFOMsg}
                    FIFOMsg={FIFOMsg}
                    message={message.text}
                />
                <FIFO
                    FIFOelephants={fifo.storage}
                    FIFOHead={FIFOHead}
                    FIFOSize={fifo.size}

                    FIFOMsg={FIFOMsg}
                    userMsg={userMsg}
                    FIFOMessage={FIFOMessage.text}

                    remove={removedFromFIFO}
                />
            </div>
        </div>
    )
}

export default ListDisplay