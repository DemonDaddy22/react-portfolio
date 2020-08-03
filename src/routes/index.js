import React from 'react';

import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../modules/Portfolio/Home';
import Projects from '../modules/Portfolio/Projects';
import Gallery from '../modules/Portfolio/Gallery';

export default class Routes extends React.Component {

    render = () => {
        return (
            <Switch>
                <Route exact path='/' component={Home} />

                <Route exact path='/projects' component={Projects} />

                <Route exact path='/gallery' component={Gallery} />

                <Redirect to='/' from='*' />
            </Switch>
        );
    }
}
