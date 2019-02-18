import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Users from './UsersComponent'

class UsersMain extends Component {

    render() {
        
        return(
            <div>
                <Switch>
                    <Route path="/by/:type/:page?" component={Users} />
                </Switch>
            </div>
        )
    }
}

export default UsersMain