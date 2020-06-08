import React, { useState } from 'react'

function FIFO() {


    function onTakeOut() {

    }

    return (
        <div id='fifoBox'>
            <h2>FIFO</h2>
            <ol className='olz'>

            </ol>
            <button className='buttonz' onClick={onTakeOut}>Take Out</button>
        </div>
    )
}

export default FIFO