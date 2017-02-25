import React, {Component} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
import Home from '../components/home';
import Header  from '../components/header';
import About from '../components/about';


var routes = (

    <Router history={browserHistory}>
        <Header/>
        <Route path={'/'} component={Home}></Route>
        <Route path={'/about'} component={About}></Route>
    </Router>
);

export default routes;