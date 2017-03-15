import React, {Component} from 'react';
import Header from '../components/header';
import RecipeList from './recipeList';
import AddRecipe from './addRecipe';


export default  class Home extends Component {

    render() {

        return (
            <div>
                <Header/>
                <div className="row">
                    <RecipeList />
                    <AddRecipe/>
                </div>
            </div>
        );
    }
}

