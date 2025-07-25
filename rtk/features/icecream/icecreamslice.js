const createSlice = require("@reduxjs/toolkit").createSlice;
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

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
