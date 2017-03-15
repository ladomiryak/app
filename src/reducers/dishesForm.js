import {dishesList} from '../constants/data';

export default function dishes(state = dishesList, action) {

    switch (action.type) {
        case 'CHANGE_DISHES_LIST':
            return {data: action.payload }
        default:
            return state;
    }

}