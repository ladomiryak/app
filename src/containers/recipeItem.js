import React, {Component} from 'react';
import {connect} from 'react-redux';

class RecipeItem extends Component {


    render() {

        return (
            <span>{this.props.value}</span>
        )
    }
}


function dispatchStateToProps(dispatch) {
    return {
        dispatch,
    };
}
export default connect(dispatchStateToProps)(RecipeItem);