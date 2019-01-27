import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Pagination from "./Pagination";
import UsersComponent from "./Users/UsersComponent";

library.add(faSpinner);

class Main extends Component {
	
	constructor(props) {
		super();
		
		this.state = {
			isLoading: true,
			peoples: [],
			page: 1,
		};
		
	}

	render() {
		return(
			<div className={"margin-top-20 margin-bottom-20"}>
				<div className={"people-items margin-top-20 margin-bottom-20"}>
					<UsersComponent type={this.props.match.params.type} />
					{/*{
						this.state.isLoading ?
							<FontAwesomeIcon icon="spinner" spin /> :
							<PeopleItemsComponent />
					}*/}
				</div>
				<Pagination page={this.state.page}/>
			</div>
		)
	}
}

export default Main