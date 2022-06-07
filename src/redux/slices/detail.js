import { createSlice } from "@reduxjs/toolkit";

import apiCall from "../../api";

const initialState = {
    isLoading: false,
    error: {},
    data: {},
};

const detailSlice = createSlice({
    name: 'mealDetail',
    initialState,
    reducers: {
        fetchMealStart(state) {
            state.isLoading = true;
        },
        fetchMealError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        fetchMealComplete(state, action) {
            state.isLoading = false;
            state.data = action.payload;
        },
    }
});

export const { fetchMealStart, fetchMealComplete, fetchMealError } = detailSlice.actions;

export const fetchMealDetail = (mealId) => async dispatch => {
    try {
        dispatch(fetchMealStart());
        const response = await apiCall(`/lookup.php?i=${mealId}`);
        dispatch(fetchMealComplete(response?.meals?.[0]));
    } catch (error) {
        dispatch(fetchMealError(error));
    }
}

export const isLoadingMealDetail = (state) => state.detailSlice.isLoading;
export const mealDetailData = (state) => state.detailSlice.data;
export const mealDetailError = (state) => state.detailSlice.error;

export default detailSlice.reducer;

