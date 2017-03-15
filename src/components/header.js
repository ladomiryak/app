import React, {Component} from 'react';
import {Link} from 'react-router';
import logo from '../../public/img/logo.svg';

export default class Header extends Component {
    render() {
        return (
            <header className="header ">
                {<img src={logo} className="logo" alt="logo"/>}
                <h2>Welcome to my kitchen</h2>
                <ul className="nav nav-tabs">
                    <li className="nav-item"><Link to={'/'}>Home</Link></li>
                    <li className="nav-item"><Link to={'/admin'}>Admin</Link></li>
                </ul>
            </header>
        );
    }
}