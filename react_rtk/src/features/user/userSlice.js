import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  user: [],
  error: "",
};

//first is action name  and second argument call back function which creates payload
//createasynchthunk will return dispatch
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((user) => user.id));
});

//promise is pending , fullfilled and rejected
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.loading = false),
        (state.user = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loading = false),
        (state.user = []),
        (state.error = action.payload);
    });
  },
});

export default userSlice.reducer;
