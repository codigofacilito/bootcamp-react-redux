import apiCall from "../../api";

export const FETCH_MEAL_DETAIL_START = 'FETCH_MEAL_DETAIL_START';
export const FETCH_MEAL_DETAIL_COMPLETE = 'FETCH_MEAL_DETAIL_COMPLETE';
export const FETCH_MEAL_DETAIL_ERROR = 'FETCH_MEAL_DETAIL_ERROR';

const fetchMealDetailStart = () => ({
    type: FETCH_MEAL_DETAIL_START,
});

const fetchMealDetailComplete = (payload) => ({
    type: FETCH_MEAL_DETAIL_COMPLETE,
    payload,
});

const fetchMealDetailError = (error) => ({
    type: FETCH_MEAL_DETAIL_ERROR,
    error
});

export const fetchMealDetail = (mealId) => async dispatch => {
    try {
        dispatch(fetchMealDetailStart());
        const response = await apiCall(`/lookup.php?i=${mealId}`);
        dispatch(fetchMealDetailComplete(response?.meals?.[0]));
    } catch (error) {
        dispatch(fetchMealDetailError(error));
    }
}