import React, {Component} from 'react';
import logo from '../public/img/logo.svg';
import '../public/css/App.css';
// import update from '../node_modules/react-addons-update';

const dishes = {
    'soup': {'ingredients': ['potato', 'carrot', 'onion'], 'info' : 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another liquid. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.'},
    'potato': {'ingredients': ['potato', 'carrot'], 'info' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.'},
    'chicken': {'ingredients': ['chicken', 'carrot', 'cup brown rice', 'tablespoons peanut oil', 'cucumber'], 'info' : 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another liquid. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.'},
    'mexico chicken': {'ingredients': ['potato', 'chicken', 'chili'], 'info' : 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another liquid. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.'},
    'berlin soup': {'ingredients': ['potato', 'cup brown rice', 'carrot'], 'info' : 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another liquid. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.'},
    'vegan salad': {'ingredients': ['potato', 'carrot', '16-ounce cans black-eyed peas, rinsed'], 'info' : 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another liquid. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.'},
    'vegan soup': {'ingredients': ['potato', 'carrot', 'cups vegetable broth', 'teaspoon ground cumin'], 'info' : 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another liquid. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.'}
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
        this.state = {item: 'soup'}
    }

    chooseRecipe = (e) => {
        this.setState({item: e.target.attributes.data.value});
    };


    render() {
        return (
            <div>
                <div className="recipe_list">
                    <h2>List of recipes</h2>
                    <ul className="recipe_item">
                        {Object.keys(dishes).map((key, v) =>
                            <li onClick={this.chooseRecipe} data={key} key={key.toString()}>{key}</li>
                        )}
                    </ul>
                </div>

                <div className="recipe_wrap">
                    <h3>Recipe</h3>

                    <div className="recipe">
                        {dishes[this.state.item]['ingredients'].map((val) => <li key={val.toString()}>{val}</li>)}
                        {dishes[this.state.item]['info']}
                    </div>
                </div>
            </div>
        );
    }
}

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        dishes[this.state.value] = this.state.value;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <RecipeList/>
                <AddItem/>
            </div>
        );
    }
}


export default App;
