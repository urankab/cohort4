import React, { useContext } from 'react'

import ThemeContext from '../../../contexts/ThemeContext'
import AppTheme from '../../../contexts/Colors'

function FIFO(props) {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    let FIFOList
    if (props.FIFOelephants) {
        FIFOList = Object.keys(props.FIFOelephants).map(k => {
            const a = props.FIFOelephants[k]
            return (
                <li key={a.key} className='liz'>
                    <b>{a.name}</b> - {a.species} - {a.gender} <br></br> {a.about}
                </li>
            )
        })
    }

    function onTakeOut() {
        if (props.FIFOSize >= 1) {
            props.remove()
            props.userMsg('')
            props.FIFOMsg(`Removed ${props.FIFOHead}`)
        } else {
            props.userMsg('')
            props.FIFOMsg('Nothing to remove')
        }
    }

    return (
        <div id='fifoBox'
            style={{
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.color}`,
                boxShadow: `${currentTheme.boxShadow}`
            }}>
            <h2>FIFO</h2>
            <p>Head: {props.FIFOHead}</p>
            <p>{props.FIFOMessage}</p>
            <button className='boxBtns' onClick={onTakeOut}>Take Out FIFO</button>
            <ol className='olz'>
                {FIFOList}
            </ol>
        </div>
    )
}

export default FIFO