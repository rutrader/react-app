import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import UsersContainer from "./UsersContainer";
import PaginationComponent from "../Pagination/PaginationComponent";

library.add(faSpinner);

class UsersComponent extends Component {
	
	constructor() {
		super();
		
		this.state = {
			peoples: [],
			isLoading: true,
			showPagination: true
		};
		
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentDidMount() {
		this.fetchData(this.props.match ? this.props.match.params.type : '');
	}
	
	componentDidUpdate(prevProps) {
		if(prevProps.match) {
			if (prevProps.match.params.type !== this.props.match.params.type || prevProps.match.params.page !== this.props.match.params.page) {
				this.fetchData(this.props.match.params.type, this.props.match.params.page);
			}
		}
		
	}
	
	handleClick(page) {
		this.setState({page: page});
	}
	
	fetchData(gender = '', page = 0) {
		this.setState({
			isLoading: true
		});
		
		const genderParam = gender.length > 0 ? '&gender='+gender : '',
				pageParam = page > 0 ? '&page='+page : '';
		
		fetch('https://randomuser.me/api/?results=10'+genderParam+pageParam)
			.then(response => response.json())
			.then(data => {
				this.setState({
					peoples: data.results,
					isLoading: false
				});
			});
	}
	
	render() {
		let showPagination = typeof this.props.pagination !== 'undefined' ? this.props.showPagination : true;
		
		return(
			<div>
				<div className={"people-items margin-top-20 margin-bottom-20"}>
					{	!this.state.isLoading ?
							this.state.peoples.map(function(item, key) {
								return (
									<UsersContainer item={item} key={key} id={key}/>
								)
							})
							:
							<FontAwesomeIcon icon="spinner" spin />}
				</div>
				{
					showPagination &&
						<PaginationComponent type={this.props.match && this.props.match.params.type}
						                     page={this.props.match && this.props.match.params.page}
						                     handleClick={this.handleClick}/>
				}
				
			</div>
			
		)
	}
}

export default UsersComponent