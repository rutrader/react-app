import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return(
			<div className={"row header-row margin-left-off margin-right-off"}>
				<div className={"menu"}>
					<div className={"menu-items"}>
						<Link to={`/man`}>Man</Link>
					</div>
					<div className={"menu-items"}>
						<Link to={`/female`}>Female</Link>
					</div>
					<div className={"menu-items"}>
						<Link to={`/`}>Random</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;