import React from 'react';

class MyComponent extends React.Component {

	render() {
			return (
				<div>
					<h1>Hello World from MyComp {this.props.whatToSay}</h1>
					<button onClick={this.props.onPushMe}>Push Me PLZ</button>
				</div>
			)
		}
}

export default MyComponent;