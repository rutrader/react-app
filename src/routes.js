import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Info from './components/Users/InfoComponent'
import Main from './components/Main';
import Users from './components/Users/UsersComponent'

const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/by" component={Users} />
            <Route path="/users/:id" component={Info} />
        </Switch>
    </App>
)

export default Routes