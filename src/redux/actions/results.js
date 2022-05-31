export const FETCH_RECIPES_START = 'FETCH_RECIPES_START';
export const FETCH_RECIPES_COMPLETE = 'FETCH_RECIPES_COMPLETE';
export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';

const fetchRecipesStart = () => ({
    type: FETCH_RECIPES_START
});

const fetchRecipesComplete = (payload) => ({
    type: FETCH_RECIPES_COMPLETE,
    payload,
});

const fetchRecipesError = (error) => ({
    type: FETCH_RECIPES_ERROR,
    error,
});