import {DISHESLIST} from '../constants/data';

export default function dishesList(state = DISHESLIST, action) {

    switch (action.type) {
        case 'CHANGE_DISHES_LIST':

            return {
                ...state,
            };

        case 'ADD_RECIPE' :
            return {
                data: action.payload
            };

        default:
            return state;
    }

}