import React, {Component} from 'react';
import {Link} from 'react-router';
import logo from '../../public/img/logo.svg';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        let status = this.props.status;
        return (
            <header className="header ">
                {<img src={logo} className="logo" alt="logo"/>}
                <h2>Welcome to my kitchen {status === 'LOCKED' ? 'Dude' : 'Admin'}</h2>
                <ul className="nav nav-tabs">
                    <li className="nav-item"><Link to={'/'}>Home</Link></li>
                    <li className="nav-item"><Link to={'/login'}>Login</Link></li>
                </ul>
            </header>
        );
    }
}


function mapStateToProps(state) {
    return {
        status : state.admin
    }
}


export default connect(mapStateToProps)(Header);