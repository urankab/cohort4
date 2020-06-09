import React from 'react'

function LIFO(props) {

    let LIFOList
    if (props.LIFOelephants) {
        LIFOList = Object.keys(props.LIFOelephants).map(k => {
            const a = props.LIFOelephants[k]
            return (
                <li key={a.key} className='liz'>
                    <b>{a.name}</b> - {a.species} - {a.gender} <br></br> {a.about}
                </li>
            )
        })
    }

    function onTakeOut() {
        if (props.LIFOSize >= 1) {
            props.remove()
            props.userMsg('')
            props.LIFOMsg(`Removed ${props.LIFOTail}`)
        } else {
            props.userMsg('')
            props.LIFOMsg('Nothing to remove')
        }
    }

    return (
        <div id='lifoBox'>
            <h2>LIFO</h2>
            <p>Tail: {props.LIFOTail}</p>
            <p>{props.LIFOMessage}</p>
            <button className='boxBtns' onClick={onTakeOut}>Take Out LIFO</button>
            <ol className='olz'>
                {LIFOList}
            </ol>
        </div>
    )
}

export default LIFO