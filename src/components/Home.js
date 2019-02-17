import React, {Component} from 'react'
import UsersComponent from "./Users/UsersComponent";
import PaginationComponent from "./Pagination/PaginationComponent";


class Home extends Component {
    constructor() {
		super();
		
		this.state = {
			page: 1,
		};
		
		this.handleClick = this.handleClick.bind(this);
		
	}

	handleClick(page) {
		this.setState({page: page});
	}
	
	render() {
		return(
				<UsersComponent type={this.props.match.params.type} page={this.state.page} />
				// <PaginationComponent handleClick={this.handleClick} />
		)
	}
}

export default Home