import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Users from './Users/UsersMain'
import InfoMain from './Users/InfoMain'

class Main extends Component {
		
	render() {
		return(
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/by/:type" component={Users} />
					<Route path="/users/:id" component={InfoMain} />
				</Switch>
			</main>
	
		)
	}
}

export default Main