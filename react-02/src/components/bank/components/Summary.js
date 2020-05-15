import React from 'react'
import funcs from '../business/functions'

let acc = new funcs.AccountController();

class Summary extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            total: '',
            highest: '',
            lowest: '',
            all: ''
        }
    }

    showTotal = (props) => {
        if (props.accounts) {
            console.log(props.accounts)
            this.setState({
                total: props.accounts.acc.totalBalance()
            })
        }
    }

    showHighest = (accounts) => {
        this.setState({
            highest: accounts.acc.highestAccount()
        })
    }

    showLowest = (accounts) => {
        this.setState({
            lowest: accounts.acc.lowestAccount()
        })
    }

    showAll = (accounts) => {
        this.setState({
            all: accounts.acc.showAll()
        })
    }

    render() {
        return (
            <div className='box3' >
                <h2 className='boxHeader'>Summary</h2>
                <div className='innerDiv' id='box3'>
                    <label htmlFor='total'>Total Balance: </label>
                    <p className='sumP'>{this.state.total}</p>
                    <br></br>
                    <label htmlFor='highest'>Highest Balance: </label>
                    <p className='sumP'>{this.state.highest}</p>
                    <br></br>
                    <label htmlFor='lowest'>Lowest Balance: </label>
                    <p className='sumP'>{this.state.lowest}</p>
                    <br></br>
                    <label htmlFor='all'>All Accounts: </label>
                    <p className='sumP'>{this.state.all}</p>
                </div>
            </div>
        )
    }
}

export default Summary;

