export const addRecipe = (recipe) =>{
    return {
        type: 'ADD_RECIPE',
        payload: recipe
    };
};

export const changeDishList = (dish) =>{
    return {
        type: 'CHANGE_DISHES_LIST',
        payload: dish
    };
};

export const removeItem = (dish) =>{
    return {
        type: 'REMOVE_RECIPE_ITEM',
        payload: dish
    };
};