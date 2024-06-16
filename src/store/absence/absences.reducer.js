import { ABSENCE_ACTION_TYPES } from "./absences.types";

export const INITIAL_STATE = {
  absence: [],
};

export const absenceReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ABSENCE_ACTION_TYPES.SET_ABSENCES:
      return { ...state, absence: payload };
      break;
    default:
      return state;
  }
};
