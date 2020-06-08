import React, { useState } from 'react'

function FIFO() {
    const [first, setFirst] = useState()
    const [last, setLast] = useState()



    function onTakeOut() {
        
    }

    return (
        <div id='fifoBox'>
            <h2>FIFO</h2>
            <ol>

            </ol>
            <button onClick={onTakeOut}>Take Out</button>
        </div>
    )
}

export default FIFO