import React from 'react'

function LIFO(props) {

    let LIFOList
    if (props.LIFOelephants) {
        LIFOList = Object.keys(props.LIFOelephants).map(k => {
            const a = props.LIFOelephants[k]
            return (
                <li key={a.key}>
                    <b>{a.name}</b> - {a.species} - {a.gender} <br></br> {a.about}
                </li>
            )
        })
    }

    function onTakeOut() {
        props.remove()
    }

    return (
        <div id='lifoBox'>
            <h2>LIFO</h2>
            <p>Tail: {props.LIFOTail}</p>
            <p>{props.LIFOMessage.text}</p>
            <ol>
                {LIFOList}
            </ol>
            <button onClick={onTakeOut}>Take Out</button>
        </div>
    )
}

export default LIFO