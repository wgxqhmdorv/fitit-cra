import authReducer from "../features/authSlice";
import { combineReducers } from "redux";
import listReducer from "../features/listSlice";

export default combineReducers({
  list: listReducer,
  auth: authReducer
});
