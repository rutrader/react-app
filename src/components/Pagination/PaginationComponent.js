import React, { Component } from 'react';
import PaginationContainer from "./PaginationContainer";

class PaginationComponent extends Component {
	
	constructor() {
		super();
		
		this.state = {
			pages: Array.apply(null, {length: 5}).map(Number.call, Number).map(item => {
				return item+1;
			}),
		};
		
		this.onClick = this.onClick.bind(this);
	}
	
	onClick(event) {
		this.props.handleClick(event.target.text);
	}
	
	render() {
		return(
			<div className={"pagination jcc margin-top-20 margin-bottom-20"}>
				<div className={"page-item pages"}>
						{this.state.pages.map(function(item, key) {
							return (
								<PaginationContainer onClick={this.onClick} item={item} key={key} id={key}/>
							)
						}, this)}
					
				</div>
			</div>
		)
	}
}

export default PaginationComponent