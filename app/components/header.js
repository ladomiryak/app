import React, {Component} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

class Header extends React.Component{

    render() {
        return (
            <header className="header ">
                <h2>Welcome to my kitchen</h2>
                <ul className="nav nav-tabs">
                   <li className="nav-item"><Link to={'/'}>Home</Link></li>
                    <li className="nav-item"><Link to={'/admin'}>Admin</Link></li>
                    <li className="nav-item"><Link to={'/form'}>Form</Link></li>

                </ul>
            </header>
        );
    }
}

export default Header;
