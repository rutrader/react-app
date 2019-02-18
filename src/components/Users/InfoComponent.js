import React, { Component } from 'react'
import InfoContainer from './InfoContainer';

class InfoComponent extends Component {

    constructor() {
        super();

        this.state = {
        	isFalse: true,
	        posts: [],
        }
    }

    componentDidMount() {
	    this.fetchData();
    }
    
    fetchData() {
    	fetch('https://jsonplaceholder.typicode.com/posts?userId='+this.props.match.params.id)
		    .then(response => response.json())
		    .then(data => {
		    	this.setState({
				    isLoading: false,
				    posts: data
			    })
		    });
    }
    
    render() {
        return(
            <InfoContainer posts={this.state.posts} />
        )
    }
}

export default InfoComponent