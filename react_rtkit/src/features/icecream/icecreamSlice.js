import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  nooficecream: 2,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderIcecream: (state, action) => {
      state.nooficecream -= action.payload;
    },
    restockIcecream: (state, action) => {
      state.nooficecream += action.payload;
    },
  },
});

export const { orderIcecream, restockIcecream } = icecreamSlice.actions;
export default icecreamSlice.reducer;
