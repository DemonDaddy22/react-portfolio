import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../modules/Portfolio/Home';

export default class Routes extends React.Component {

    render = () => {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        );
    }
}
