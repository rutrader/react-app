import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Users from './Users/UsersMain'
import InfoMain from './Users/InfoMain'

class Main extends Component {
		
	render() {
		return(
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/by/:type" component={Users} />
					<Route path="/users/:id" component={InfoMain} />
				</Switch>
			</div>
	
		)
	}
}

export default Main