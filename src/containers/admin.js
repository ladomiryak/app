import React, {Component} from 'react';
import Login from './login';
import Logout from './logout';
import {connect} from 'react-redux';


class Admin extends Component {

    render() {

        let status = this.props.status;

        return(
            status === 'LOCKED' ? <Login/> : <Logout/>
        )
    }
}

function mapStateToProps(state) {
    return {
       status : state.admin

    }
}

export default connect(mapStateToProps)(Admin);