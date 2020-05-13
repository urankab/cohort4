import React from 'react'
import funcs from '../business/functions'

let acc = new funcs.AccountController();

class Summary extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            highest: 0,
            lowest: 0
        }
    }

    showTotal = () => {
        this.setState({
            total: acc.TotalBalance()
        })
    }

    showHighest = () => {
        this.setState({
            highest: acc.HighestAccount()
        })
    }

    showLowest = () => {
        this.setState({
            lowest: acc.LowestAccount()
        })
    }

    render() {
        return (
            <div className='box3' >
                <h2 className='boxHeader'>Summary</h2>
                <div className='innerDiv' id='box3'>
                    <label htmlFor='total'>Total Balance: </label>
                    <p></p>
                    <br></br>
                    <label htmlFor='highest'>Highest Balance: </label>
                    <p></p>
                    <br></br>
                    <label htmlFor='lowest'>Lowest Balance: </label>
                    <p></p>
                </div>
            </div>
        )
    }
}

export default Summary;

