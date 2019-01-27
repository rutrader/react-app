import React, { Component } from 'react';
import UsersContainer from "./UsersContainer";

class UsersComponent extends Component {
	
	constructor(props) {
		super();
		
		this.state = {
			peoples: [],
			gender: '',
		};
	}
	
	componentDidMount() {
		this.fetchData();
	}
	
	componentDidUpdate(prevProps) {
		if(prevProps.type !== this.props.type) {
			this.fetchData(this.props.type);
		}
	}
	
	fetchData(gender = '', page = 0) {
		const genderParam = gender.length > 0 ? '&gender='+gender : '',
				pageParam = page > 0 ? '&page='+page : '';
		
		fetch('https://randomuser.me/api/?results=10'+genderParam+pageParam)
			.then(response => response.json())
			.then(data => {
				this.setState({peoples: data.results});
			});
	}
	
	render() {
		return(
			this.state.peoples.map(function(item, key) {
				return (
					<UsersContainer item={item} key={key} id={key}/>
				)
			})
		)
	}
}

export default UsersComponent