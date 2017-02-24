import React, {Component} from 'react';

class RecipeList extends React.Component {

    constructor(props) {
        super(props);
        this.chooseRecipe = this.chooseRecipe.bind(this);
    }

    chooseRecipe(e) {
        console.log(this.props);
        this.props.chooseItem(e.target.attributes.data.value);
    }

    render() {

        //list of recipes
        var list = Object.keys(this.props.dishes).map((key, v) =>
            <li key={key.toString()} onClick={this.chooseRecipe} data={key}>{key}</li>);

      return(
          <div>
              <h1>Hello world!</h1>
              <ul>{list}</ul>
          </div>
      )
    }
}


export default RecipeList;