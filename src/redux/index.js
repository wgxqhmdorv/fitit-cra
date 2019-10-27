import { configureStore } from "redux-starter-kit";
import rootReducer from "./reducers";

export const initStore = () => configureStore({ reducer: rootReducer });
