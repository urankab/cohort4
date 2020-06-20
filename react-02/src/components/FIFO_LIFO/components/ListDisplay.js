import React, { useState, useContext } from 'react'
import CreateItem from './CreateItem'
import LIFO from './LIFO'
import FIFO from './FIFO'

import { ThemeContext, AppStatesContext } from '../../../contexts/AppContext'
import AppTheme from '../../../contexts/Colors'

function ListDisplay() {
    const [message, setMessage] = useState('')
    const [LIFOMessage, setLIFOMessage] = useState('')
    const [FIFOMessage, setFIFOMessage] = useState('')

    //Theme stuff
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    const context = useContext(AppStatesContext)
    let lifo = context.lifo
    let fifo = context.fifo

    //LIFO----------------------------
    function addToLIFO(elephant) {
        lifo.push(elephant)
    }

    function removedFromLIFO() {
        lifo.pop()
    }

    //FIFO ----------------------------

    function addToFIFO(elephant) {
        fifo.enqueue(elephant)
    }

    function removedFromFIFO() {
        fifo.dequeue()
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
                    LIFOTail={lifo.peek()}
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
                    FIFOHead={fifo.peek()}
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