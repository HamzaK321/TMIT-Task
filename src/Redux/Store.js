import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authReducers.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

