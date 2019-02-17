import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Users from './UsersComponent'

class UsersMain extends Component {

    render() {
        return(
            <Switch>
                <Route path="/by/:type" component={Users} />
            </Switch>
        )
    }
}

export default UsersMain