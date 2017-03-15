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