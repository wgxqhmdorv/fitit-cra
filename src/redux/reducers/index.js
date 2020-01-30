import { combineReducers } from "redux";
import authReducer from "../features/authSlice";
import dateReducer from "../features/dateSlice";
import listReducer from "../features/listSlice";

export default combineReducers({
  auth: authReducer,
  date: dateReducer,
  list: listReducer
});
