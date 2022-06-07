import { combineReducers } from "@reduxjs/toolkit";

import results from "./results";
import detail from "./detail";

export default combineReducers({
    results,
    detail,
});