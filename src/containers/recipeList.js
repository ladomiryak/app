import React, {Component} from 'react';
import {connect} from 'react-redux';

class RecipeList extends Component {

    render() {

        const dishesItem = Object.keys(this.props.list.dishes).map((key, v) =>
            <li key={key.toString()} data={key}>{key}</li>);

        return (
            <div className="col-md-9">
                <h1>Recipe list</h1>
                <ul>
                    {dishesItem}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.dishesList

    }
}

export default connect(mapStateToProps)(RecipeList);