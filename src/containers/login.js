import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';


class Login extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });

    }

    logIn(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch({type: 'LOG_IN', payload: this.state['password']});
    }


    render() {
        return(
            <div>
                <Header/>
                <h2>Log In</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={this.logIn}>
                                <input type="text" name="password" placeholder="Password is 12345" onChange={this.handleChange}/>
                                <button type="submit">Log In</button>
                            </form>
                        </div>
                    </div>
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

export default connect(mapStateToProps, dispatchStateToProps)(Login);