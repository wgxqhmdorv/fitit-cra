import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

export const initStore = () => configureStore({ reducer: rootReducer });
