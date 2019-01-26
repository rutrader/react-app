import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import PeopleItems from "./PeopleItems";
import Pagination from "./Pagination";

library.add(faSpinner);

class Main extends Component {
	
	constructor(props) {
		super();
		
		console.log(props.match.params.type);
		
		this.state = {
			isLoading: true,
			peoples: [],
			page: 1,
		};
		
		this.pageChanged = this.pageChanged.bind(this)
	}
	
	fetchData(page = 0) {
		fetch('https://randomuser.me/api/?results=10&page='+page)
			.then(response => response.json())
			.then(data => {
				this.setState({peoples: data.results});
				this.setState({isLoading: false})
			});
	}
	
	componentDidMount() {
		this.fetchData();
	}
	
	pageChanged(page) {
		this.fetchData(page);
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