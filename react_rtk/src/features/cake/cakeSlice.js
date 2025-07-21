import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  noOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state, action) => {
      state.noOfCakes -= action.payload;
    },
    restock: (state, action) => {
      state.noOfCakes += action.payload;
    },
  },
});

export const { ordered, restock } = cakeSlice.actions;
export default cakeSlice.reducer;
