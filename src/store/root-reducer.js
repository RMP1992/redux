import { combineReducers } from "redux";

import { absenceReducer } from "./absence/absences.reducer";

export const rootReducer = combineReducers({
  absence: absenceReducer,
});
