import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";

import AppReducer from "../App/reducers/appReducer";

export default combineReducers({
  AppReducer,
  routing,
});
