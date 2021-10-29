import {} from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const globalSlice = createSlice({
  initialState,
  name: "global",
  reducers: {
    setGlobal: (state, { payload }) => {
      console.log(payload , 'pa---------------');
      state.global = payload;
    },
  },
});

export const { setGlobal } = globalSlice.actions;
export default globalSlice.reducer;
