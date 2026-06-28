import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible; // this actually creates a new state object behind the scenes
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
