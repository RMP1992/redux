import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

import { rootReducer } from "./root-reducer";
import { INITIAL_STATE } from "./absence/absences.reducer";

//middleware

const middleware = [logger, thunk];
const composedEnhancers = compose(applyMiddleware(...middleware));
//root-reducer

export const store = createStore(rootReducer, INITIAL_STATE, composedEnhancers);
