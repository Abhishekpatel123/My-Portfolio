import { useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const globalSlice = createSlice({
  initialState,
  name: "global",
  reducers: {
    setGlobal: (state, { payload }) => {
      console.log(payload, "pa---------------");
      state.global = payload;
    },
    setColor: (state, { payload }) => {
      const { color } = payload;
      state.color = color;
    },
  },
});

export const { setGlobal, setColor } = globalSlice.actions;
export default globalSlice.reducer;
