import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamslice";
// const reduxLogger = require("redux-logger");
import userReducer from "../features/user/userSlice";
const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(logger),
});

export default store;
