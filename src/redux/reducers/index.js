import { combineReducers } from "redux";
import authReducer from "../features/authSlice";
import listReducer from "../features/listSlice";

export default combineReducers({
  list: listReducer,
  auth: authReducer
});
