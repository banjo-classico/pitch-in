import { difference } from "lodash/fp";

import { actionTypes } from "../actions/actions";

const INITIAL_STATE = {
  classNames: [],
};

const appStylesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.addAppStyles:
      return {
        classNames: [...state.classNames, ...action.payload.classNames],
      };
    case actionTypes.clearAppStyles:
      return INITIAL_STATE;
    case actionTypes.removeAppStyles:
      return {
        classNames: difference(state.classNames, action.payload.classNames),
      };
    default:
      return state;
  }
};

export default appStylesReducer;
