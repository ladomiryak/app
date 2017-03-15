import {DISHESLIST} from '../constants/data';

export default function dishesList(state = DISHESLIST, action) {

    switch (action.type) {
        case 'CHANGE_DISHES_LIST': {
            let {name, ingredients, info} = action.payload;

            DISHESLIST['dishes'][name] = {
                'ingredients': ingredients,
                'info': info
            };
        }

            return {
                ...state,
            };

        case 'ADD_RECIPE' :
            return {
                data: action.payload
            };

        case 'REMOVE_RECIPE_ITEM' : {

            delete  DISHESLIST.dishes[action.payload];
        }

            return {
                ...state,
            };

        default:
            return state;
    }

}