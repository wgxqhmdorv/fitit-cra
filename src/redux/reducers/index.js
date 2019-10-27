import { combineReducers } from "redux";
import listReducer from "../features/listSlice";
import authReducer from "../features/authSlice"

export default combineReducers({
  list: listReducer,
  auth: authReducer
});
