import { configureStore } from "@reduxjs/toolkit";
import globalReducers from "./global";
import portfolio2021Reducers from "./portfolio2021";

const store = configureStore({
  reducer: { global: globalReducers, portfolio2021: portfolio2021Reducers },
});

export default store;
