import {
    FETCH_RECIPES_COMPLETE,
    FETCH_RECIPES_ERROR,
    FETCH_RECIPES_START,
    ADD_SEARCH_ITEM,
} from '../actions/results';

const initialState = {
    isLoading: false,
    data: [],
    error: {},
    searchItems: [],
};

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECIPES_START:
            return { ...state, isLoading: true, data: [] };
        case FETCH_RECIPES_COMPLETE:
            return { ...state, isLoading: false, data: action.payload };
        case FETCH_RECIPES_ERROR:
            return { ...state, isLoading: false, error: action.error };
        case ADD_SEARCH_ITEM:
            return { ...state, searchItems: [...state.searchItems, action.payload] };
        default:
            return state;
    }
};

export default resultsReducer;