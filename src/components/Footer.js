import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return(
			<div className={"row footer"}>
				Copyright {new Date().getFullYear()}
			</div>
		)
	}
}

export default Footer;