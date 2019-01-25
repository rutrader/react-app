import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import PeopleItems from "./PeopleItems";
import Pagination from "./Pagination";

library.add(faSpinner);

class Main extends Component {
	
	constructor() {
		super();
		
		this.state = {
			isLoading: true,
			peoples: [],
			page: 1,
		};
		
		this.pageChanged = this.pageChanged.bind(this)
	}
	
	
	componentDidMount() {
		fetch('https://randomuser.me/api/?results=10&page='+this.state.page)
			.then(response => response.json())
			.then(data => {
				this.setState({peoples: data.results});
				this.setState({isLoading: false})
			});
	}
	
	pageChanged(page) {
		this.setState({page: page+1});
	}
	
	render() {
		return(
			<div className={"margin-top-20 margin-bottom-20"}>
				<div className={"people-items margin-top-20 margin-bottom-20"}>
					{
						this.state.isLoading ?
							<FontAwesomeIcon icon="spinner" spin /> :
							<PeopleItems items={this.state.peoples} />
					}
				</div>
				<Pagination pageChanged={this.pageChanged} page={this.state.page}/>
			</div>
		)
	}
}

export default Main