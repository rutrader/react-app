import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Info from './InfoComponent'

class InfoMain extends Component {

    render() {
        return(
            <Switch>
                <Route path="/users/:id" component={Info} />
            </Switch>
        )
    }
}

export default InfoMain