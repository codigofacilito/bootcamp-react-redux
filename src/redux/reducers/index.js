import { combineReducers } from "@reduxjs/toolkit";

// Reducers

import results from "./results";
import detail from "./detail";

// Slices
import detailSlice from "../slices/detail";

export default combineReducers({
    results,
    detail,
    detailSlice,
});