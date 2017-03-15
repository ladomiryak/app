import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';


class Logout extends Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }

    logOut(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch({type: 'LOG_OUT', payload: ''});
    }


    render() {
        return(
            <div>
                <Header/>
                <div>
                    Hi Admin!
                    <p onClick={this.logOut}>Log out</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        status : state.admin
    }
}
function dispatchStateToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, dispatchStateToProps)(Logout);