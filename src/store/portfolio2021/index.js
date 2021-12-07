import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const globalSlice = createSlice({
  initialState,
  name: "portfolio2021",
  reducers: {
    setProjects: (state, { payload }) => {
      const { projects } = payload;
      state.projects = projects;
    },
  },
});

export const { setProjects } = globalSlice.actions;
export default globalSlice.reducer;
