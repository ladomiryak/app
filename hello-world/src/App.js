import React, {Component} from 'react';
import logo from '../public/img/logo.svg';
import '../public/css/App.css';



var dishes = {
     'soup' : {'engridients' : ['potato', 'carrot']},
     'potato' : {'engridients' : ['potato', 'carrot']},
     'chicken': {'engridients' : ['potato', 'carrot']},
     'mexico chicken': {'engridients' : ['potato', 'carrot']},
     'berlin soup': {'engridients' : ['potato', 'carrot']},
     'vegan salad': {'engridients' : ['potato', 'carrot']},
     'vegan soup': {'engridients' : ['potato', 'carrot']}
};



class Header extends React.Component {
    render() {
        return (
            <header className="header ">
                <img src={logo} className="logo" alt="logo"/>
                <h2>Welcome to my kitchen</h2>
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a href="#">Home</a></li>
                    <li className="nav-item"><a href="#">Contact</a></li>
                </ul>
            </header>
        );
    }
}



class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item : 0
        }
    }



    showRecipe = (e) => {
        this.setState({
            item : e.target.attributes.data.value
        });
    };

    render() {
        return (

        <div>
            <div className="recipe_list">
                <h2>List of recipes</h2>
                <ul className="recipe_item">
                    {Object.keys(dishes).map((key, v) =>
                        <li onClick={this.showRecipe} data={key} key={key.toString()}>{key}</li>
                    )}
                </ul>
            </div>

            <div className="recipe_wrap">
                <h3>Recipe</h3>

                <div className="recipe">
                    {this.state.item}
                </div>

            </div>
        </div>
        );
    }
}



class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <RecipeList/>
            </div>
        );
    }
}


export default App;
