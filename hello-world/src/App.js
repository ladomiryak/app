import React, {Component} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
import logo from '../public/img/logo.svg';
import '../public/css/App.css';

const dishes = {
    'soup': {
        'ingredients': ['potato', 'carrot', 'onion'],
        'info': 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another liquid. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.'
    },
    'potato': {
        'ingredients': ['potato', 'carrot'],
        'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.'
    },
    'chicken': {
        'ingredients': ['chicken', 'carrot', 'cup brown rice', 'tablespoons peanut oil', 'cucumber'],
        'info': 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another liquid. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.'
    },
    'mexico chicken': {
        'ingredients': ['potato', 'chicken', 'chili'],
        'info': 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another liquid. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.'
    },
    'berlin soup': {
        'ingredients': ['potato', 'cup brown rice', 'carrot'],
        'info': 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another liquid. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.'
    },
    'vegan salad': {
        'ingredients': ['potato', 'carrot', '16-ounce cans black-eyed peas, rinsed'],
        'info': 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another liquid. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.'
    },
    'vegan soup': {
        'ingredients': ['potato', 'carrot', 'cups vegetable broth', 'teaspoon ground cumin'],
        'info': 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another liquid. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.'
    }
};

class Header extends React.Component {
    render() {
        return (
            <header className="header ">
                {<img src={logo} className="logo" alt="logo"/>}
                <h2>Welcome to my kitchen</h2>
                <ul className="nav nav-tabs">
                    <li className="nav-item"><Link to={'/'}>Home</Link></li>
                    <li className="nav-item"><Link to={'/admin'}>Admin</Link></li>
                </ul>
            </header>
        );
    }
}

class RecipeList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: (Object.keys(dishes)[0]),
            recipes: dishes
        }
    }

    removeItem = (e) => {
        this.props.removeItem(e.target.attributes.data.value);
        this.setState({item: (Object.keys(dishes)[0])});
    };

    chooseRecipe = (e) => {
        this.setState({item: e.target.attributes.data.value});
    };

    render() {


        if(Object.keys(this.state.recipes).map(key => this.state.recipes.hasOwnProperty(key)).length > 0){
            return (

                <div className="col-xs-12 col-md-8">
                    <div className="recipe_list">
                        <h2>List of recipes:</h2>
                        <ul className="recipe_item">
                            {Object.keys(this.props.recipes).map((key, v) =>
                                <li key={key.toString()}><span onClick={this.chooseRecipe} data={key}>{key}</span> <span onClick={this.removeItem} data={key} className="remove">X</span></li>
                            )}
                        </ul>
                    </div>

                    <div className="recipe_wrap">
                        <h3>Recipe:</h3>

                        <ul className="recipe">
                            {this.props.recipes[this.state.item]['ingredients'].map((val) => <li
                                key={val.toString()}>{val}</li>)}
                        </ul>
                        <div>{this.props.recipes[this.state.item]['info']}</div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="col-xs-12 col-md-8">
                    <h3>List is empty :(</h3>
                </div>
            )
        }



    }
}

class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="col col-md-4">
                <h4>Add new recipe</h4>
                <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control" type="text" name="name" required onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Ingredients:</label>
                    <input className="form-control" type="text" name="ingredients" required
                           onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea className="form-control" type="text" name="info" required
                              onChange={this.handleChange}> </textarea>
                </div>

                <input type="submit" className="btn btn-default" value="Submit"/>
            </form>
        );
    }

}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: dishes
        };
    }

    removeItem = (value) => {
        delete dishes[value];
        this.setState({dishes: dishes});
    };

    onAdd = (values) => {
        dishes[values.name] = {'ingredients': [values.ingredients], 'info': values.info};
        console.log(dishes);
        this.setState({dishes: dishes});
    };

    render() {
        return (
            <div>
                <Header/>
                <div className="row">
                    <RecipeList recipes={this.state.dishes} removeItem={this.removeItem} />
                    <AddItem onAdd={this.onAdd}/>
                </div>
            </div>
        );
    }
}

class Admin extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h2>Hi admin!</h2>
            </div>
        );
    }
}

class App extends Component {

    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={Home}></Route>
                <Route path={'/admin'} component={Admin}></Route>
            </Router>
        );
    }
}

export default App;
