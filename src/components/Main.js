import React, { Component } from 'react';

import UsersComponent from "./Users/UsersComponent";
import PaginationComponent from "./Pagination/PaginationComponent";


class Main extends Component {
	
	constructor() {
		super();
		
		this.state = {
			isLoading: true,
			peoples: [],
			page: 1,
		};
		
		this.handleClick = this.handleClick.bind(this);
		
	}

	handleClick(page) {
		this.setState({page: page});
	}
	
	render() {
		return(
			<div className={"margin-top-20 margin-bottom-20"}>
				<div className={"people-items margin-top-20 margin-bottom-20"}>
					<UsersComponent type={this.props.match.params.type} page={this.state.page} />
				</div>
				<PaginationComponent handleClick={this.handleClick} />
			</div>
		)
	}
}

export default Main