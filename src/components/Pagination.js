import React, { Component } from 'react';

class Pagination extends Component {
	
	constructor(props) {
		super();
		
		this.state = {
			pages: Array.apply(null, {length: 5}).map(Number.call, Number).map(item => {
				return item+1;
			}),
			page: 1
		};
		
		
		this.pageClicked = this.pageClicked.bind(this);
		this.prevClicked = this.prevClicked.bind(this);
	}
	
	pageClicked(event) {
		
		let clickedLinkText = parseInt(event.target.text);
		
		this.setState({page: clickedLinkText});
		
		this.setState(prevState => {
			return {
				pages: clickedLinkText === 1 ?
					[2, 3, 4, 5, 6] :
					prevState.pages.map(item => item + 1)
			}
		});
		
		this.props.pageChanged(clickedLinkText)
	}
	
	prevClicked(event) {
		const { text } = event.target;

		this.state.page > 1 &&
		this.setState(prevState => {
			return {
				pages: prevState.pages.map(item => {
					return item-1;
				}),
				page: this.state.page-1
			}
		})
	}
	
	render() {
		return(
			<div className={"pagination jcc margin-top-20 margin-bottom-20"}>
				<div className={"page-item first"}>
					<a onClick={this.prevClicked}>Prev</a>
				</div>
				<div className={"page-item pages"}>
					
						{this.state.pages.map(function(item, key) {
							return (
								<a key={key} onClick={this.pageClicked}>
									{item}
								</a>
							)
						}, this)}
					
				</div>
			</div>
		)
	}
}

export default Pagination