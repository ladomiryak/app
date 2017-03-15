import React, {Component} from 'react';
import Header from './header';
import RecipeList  from './recipe-list';
import RecipeDetails  from './recipe-details';

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

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {current : Object.keys(dishes)[0]};

        this.chooseItem = this.chooseItem.bind(this);
    }

    chooseItem(item){
        this.setState({current: item});
    }

    render(){
        return (
            <div className="container">
                <Header/>
                <RecipeList dishes={dishes} current={this.state.current} chooseItem={this.chooseItem}/>
                <RecipeDetails dish={dishes[this.state.current]} dishName={this.state.current}/>
            </div>
        )
    }
}

export default Home;