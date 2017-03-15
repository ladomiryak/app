import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Home from './containers/home';
import Admin from './containers/admin';
import '../public/css/App.css';
import {Provider} from 'react-redux';
import store  from './store';


export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path={'/'} component={Home}></Route>
                    <Route path={'/login'} component={Admin}></Route>
                </Router>
            </Provider>
        );
    }
}

