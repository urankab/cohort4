import React from 'react'

class Summary extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div id='box3' >
                <h2 className='boxHeader'>Summary</h2>
                <div className='innerDiv'>
                    <label htmlFor='total'>Total Balance: </label>
                    <br></br>
                    <p id='total' className='sumP'>{this.props.totalStuff}</p>
                    <br></br>
                    <label htmlFor='highest'>Highest Balance: </label>
                    <br></br>
                    <p id='highest' className='sumP'>{this.props.highestStuff}</p>
                    <br></br>
                    <label htmlFor='lowest'>Lowest Balance: </label>
                    <br></br>
                    <p id='lowest' className='sumP'>{this.props.lowestStuff}</p>
                    <br></br>
                    <label id='allAccountsLabel' htmlFor='all'>All Accounts: </label>
                    <br></br>
                    <p id='all' className='sumP'>{this.props.showStuff}</p>
                </div>
            </div>
        )
    }
}

export default Summary;

