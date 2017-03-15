import React, {Component} from 'react';
import {connect} from 'react-redux';
import RecipeItem from './recipeItem';

class RecipeList extends Component {

    constructor(props) {
        super(props);
        this.removeRecipe = this.removeRecipe.bind(this);
    }

    removeRecipe(e){
       const { dispatch } = this.props;
        dispatch({type: 'REMOVE_RECIPE_ITEM', payload: e.target.getAttribute('data-name')});
    }

    render() {

        const dishesItem = Object.keys(this.props.list.dishes).map((key, v) =>
            <li key={key.toString()} data={key}>{key}
            <span data-name={key} className="remove" onClick={this.removeRecipe}>X</span>
            </li>);

        return (
            <div className="col-md-9">
                <h1>Recipe list</h1>
                <ul>
                    <RecipeItem value={dishesItem} />
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
function dispatchStateToProps(dispatch) {
    return {
        dispatch,
    };
}
export default connect(mapStateToProps,dispatchStateToProps)(RecipeList);