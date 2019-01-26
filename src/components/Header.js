import React, { Component } from 'react';

class Header extends Component {
	render() {
		return(
			<div className={"row header-row margin-left-off margin-right-off"}>
				<div className={"menu"}>
					<div className={"menu-items"}>
						<a href={'/man'} onClick={console.log('Man')}>Man</a>
					</div>
					<div className={"menu-items"}>
						<a href={'/female'} onClick={console.log('Female')}>Female</a>
					</div>
					<div className={"menu-items"}>
						<a href={'/'} onClick={console.log('Random')}>Random</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;