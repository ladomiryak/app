import React, {Component} from 'react';

class RecipeDetails extends React.Component {


    render() {

        var dish = this.props.dish;

        var ingredients = dish['ingredients'].map((key) =>
            <li key={key.toString()}>{key}</li>);

        return(
            <section>
                <h2>Recipe details</h2>
                <section>
                    <h5>{this.props.dishName}</h5>
                    <ul>{ingredients}</ul>
                    <p className="description">{dish['info']}</p>
                </section>
            </section>
        )
    }
}


export default RecipeDetails;