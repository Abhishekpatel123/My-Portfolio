import { configureStore } from "@reduxjs/toolkit";
import globalReducers from "./global";

const store = configureStore({ reducer: globalReducers });
export default store;
