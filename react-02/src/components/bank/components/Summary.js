import React from 'react'

function Summary(props) {
    let listOfStuff
    if (props.accounts) {
        listOfStuff = Object.keys(props.accounts).map(k => {
            const p = props.accounts[k];
            return (
                <li id='item' key={p.key} mykey={p.key}>
                    {p.accountName} - ${p.balance}
                </li>
            )
        });
    }

    return (
        <div id='box3' >
            <h2 className='boxHeader'>Summary</h2>
            <div className='innerDiv'>
                <label htmlFor='total'>Total Balance: </label>
                <br></br>
                <p id='total' className='sumP'>{props.totalStuff}</p>
                <br></br>
                <label htmlFor='highest'>Highest Balance: </label>
                <br></br>
                <p id='highest' className='sumP'>{props.highestStuff}</p>
                <br></br>
                <label htmlFor='lowest'>Lowest Balance: </label>
                <br></br>
                <p id='lowest' className='sumP'>{props.lowestStuff}</p>
                <br></br>
                <label id='allAccountsLabel' htmlFor='all'>All Accounts: </label>
                <ul id='all' className='showAllUl'>
                    {listOfStuff}
                </ul>
            </div>
        </div>
    )
}

export default Summary;

