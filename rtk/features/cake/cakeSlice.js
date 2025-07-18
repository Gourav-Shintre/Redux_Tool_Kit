const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  noOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state, action) => {
      state.noOfCakes -= action.payload
    },
    restock: (state, action) => {
      state.noOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
