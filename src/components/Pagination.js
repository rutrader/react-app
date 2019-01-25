import React, { Component } from 'react';

class Pagination extends Component {
	
	constructor(props) {
		super();
		
		this.state = {
			pages: [2, 3, 4, 5, 6]
		};
		
		this.pageClicked = this.pageClicked.bind(this);
	}
	
	pageClicked(event) {
		
		let clickedLinkText = parseInt(event.target.text);
		
		this.setState(prevState => {
			return {
				pages: clickedLinkText === 1 ?
					[2, 3, 4, 5, 6] :
					prevState.pages.map(item => item + 1)
			}
		});
		
		this.props.pageChanged(clickedLinkText)
	}
	
	render() {
		return(
			<div className={"pagination jcc margin-top-20 margin-bottom-20"}>
				<div className={"page-item first"}>
					<a onClick={this.pageClicked}>1</a>
				</div>
				<div className={"page-item divider"}>...</div>
				<div className={"page-item pages"}>
					
						{this.state.pages.map(item => {
							return (
								<a onClick={this.pageClicked}>
									{item}
								</a>
							)
						})}
					
				</div>
			</div>
		)
	}
}

export default Pagination