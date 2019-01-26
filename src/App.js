import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'


import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	render() {
		return(
			<div className={"container"}>
				<Header/>
				<Switch>
					<Route exact path={'/'} component={Main} />
					<Route path={'/:type'} component={Main} />
				</Switch>
				<Footer />
			</div>
		)
	}
}

export default App;
