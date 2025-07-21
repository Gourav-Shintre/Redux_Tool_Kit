import { configureStore } from "@reduxjs/toolkit";
// import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from "../features/icecream/icecreamslice";
// import reduxLogger from "redux-logger";
import userReducer from "../features/user/userSlice";
// import logger from "redux-logger";
const store = configureStore({
  reducer: {
    // cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(logger),
});

export default store;
