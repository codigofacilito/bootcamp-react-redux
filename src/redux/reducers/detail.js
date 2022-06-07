import {
    FETCH_MEAL_DETAIL_START,
    FETCH_MEAL_DETAIL_COMPLETE,
    FETCH_MEAL_DETAIL_ERROR,
} from '../actions/detail';

const initialState = {
    isLoading: false,
    error: {},
    data: {},
};

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEAL_DETAIL_START:
            return {
                ...state,
                isLoading: true,
                data: {},
            };
        case FETCH_MEAL_DETAIL_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        case FETCH_MEAL_DETAIL_COMPLETE:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        default:
            return state;
    }
};

export default detailReducer;