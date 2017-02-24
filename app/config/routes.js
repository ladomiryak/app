import React, {Component} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
import Home from '../components/home'


var routes = (
    <Router history={browserHistory}>
        <Route path={'/'} component={Home}></Route>
    </Router>
);

export default routes;