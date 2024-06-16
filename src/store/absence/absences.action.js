import { createAction } from "@reduxjs/toolkit";

import { ABSENCE_ACTION_TYPES } from "./absences.types";

export const setAbsences = (absences) => ({
  type: ABSENCE_ACTION_TYPES.SET_ABSENCES,
  payload: absences,
});
