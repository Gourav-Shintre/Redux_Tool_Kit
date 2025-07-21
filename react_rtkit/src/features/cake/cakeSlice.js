import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfCakes: 20,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    orderedcake: (state, action) => {
      state.noOfCakes -= action.payload;
    },
    restockCake: (state, action) => {
      state.noOfCakes += action.payload;
    },
  },
});

export const { orderedcake, restockCake } = cakeSlice.actions;
export default cakeSlice.reducer;
