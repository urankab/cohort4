import React from 'react'

function Summary() {

    function TotalBalance() {
        return 'hi'
    }

    // let total = 0;
    // for (let i = 0; i < this.accArray.length; i++) {
    //     total += Number(this.accArray[i].balance);
    // }
    // return `Total: $${total}`;


    function HighestAccount() {
        return 'highest';
    }
    //     let highestBal = 0;
    //     let highestName;
    //     for (let i = 0; i < this.accArray.length; i++) {
    //         if (this.accArray[i].balance > highestBal) {
    //             let currentName = this.accArray[i].accountName;
    //             highestBal = Number(this.accArray[i].balance);
    //             highestName = currentName;
    //         }
    //     }
    //     return `Highest Acc: ${highestName}: $${highestBal}`
    // }

    function LowestAccount() {
        return 'lowest';
    }
    //     let lowest = Number.POSITIVE_INFINITY;
    //     let lowestName;
    //     for (let i = this.accArray.length - 1; i >= 0; i--) {
    //         let currentName = this.accArray[i].accountName;
    //         let currentBal = Number(this.accArray[i].balance);
    //         if (currentBal < lowest) {
    //             lowestName = currentName;
    //             lowest = currentBal;
    //         }
    //     }
    //     return `Lowest Acc: ${lowestName}: $${lowest}`
    // }

    // console.log(props.accounts[0].name)
    return (
        <div className='box3'>
            <h2 className='boxHeader'>Summary</h2>
            <div className='innerDiv' id='box3'>
                <label htmlFor='total'>Total Balance: </label>
                <TotalBalance />
                <br></br>
                <label htmlFor='highest'>Highest Balance: </label>
                <HighestAccount />
                <br></br>
                <label htmlFor='lowest'>Lowest Balance: </label>
                <LowestAccount />
            </div>
        </div>
    )
}

export default Summary;

