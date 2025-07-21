import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  noOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderIcecream: (state, action) => {
      state.noOfIcecreams -= action.payload;
    },
    restockIcecream: (state, action) => {
      state.noOfIcecreams += action.payload;
    },
  },
});

export default icecreamSlice.reducer;
export const { orderIcecream, restockIcecream } = icecreamSlice.actions;
