import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    cleaCrart: (state) => {
      state.items.length = 0;
    },
  },
});

export const{addItem,removeItem,cleaCrart} = cartSlice.actions;
export default cartSlice.reducer;