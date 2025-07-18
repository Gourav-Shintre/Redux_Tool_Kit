const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamslice");
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(logger),
});

module.exports = store;
