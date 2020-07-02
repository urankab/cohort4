import React from 'react'

class OddComponent extends React.Component {
	render() {
		if (this.props.showCounter % 2 !== 0) {
			return (
				<div>
					<h1>Odd</h1>
				</div>
			)
		}else{
			return(
				null
			)
		}
	}
}


export default OddComponent;