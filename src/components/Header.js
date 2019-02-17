import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import logo from '../logo.svg'

class Header extends Component {

	constructor() {
		super();

		this.state = {}

		this.handleItemClick = this.handleItemClick.bind(this)
	}

	handleItemClick(event, { name }) {
		this.setState({
			activeItem: name
		})
	}

	render() {
		const { activeItem } = this.state;

		return(
			<Menu stackable>
				<Menu.Item
					href="/"
					name="home"
					onClick={this.handleItemClick}
					active={activeItem === "home"}
				>
					<img src={logo} alt="Logo" />
				</Menu.Item>
				<Menu.Item
					name="male"
					active={activeItem === "male"}
					onClick={this.handleItemClick}
					href="/by/male">
					Male
				</Menu.Item>
				<Menu.Item
					name="female"
					active={activeItem === "female"}
					onClick={this.handleItemClick}
					href="/by/female"
				>
					Female
				</Menu.Item>
			</Menu>
		)
	}
}

export default Header;