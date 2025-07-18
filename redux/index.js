const redux = require("redux");

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const applyMiddleware = redux.applyMiddleware;

console.log("runned index.js");

const CAKE_ORDER = "CAKE_ORDER";
const CAKE_RESTOCK = "CAKE_RESTOCK";

const ICECREAM_ORDER = "ICECREAM_ORDER";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

function orderCake() {
  return {
    type: CAKE_ORDER,
    qty: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCK,
    qty: qty,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDER,
    payload: qty,
  };
}

function restockIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCK,
    payload: qty,
  };
}

const initialCakeState = {
  noOfCakes: 10,
  anotherproperty: 0,
};

const initialIcecreamState = {
  noOfIcecreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    case CAKE_RESTOCK:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.qty,
      };
    default:
      return state;
  }
};

const IcecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDER:
      return {
        ...initialIcecreamState,
        noOfIcecreams: state.noOfIcecreams - action.payload,
      };
    case ICECREAM_RESTOCK:
      return {
        ...initialIcecreamState,
        noOfIcecreams: state.noOfIcecreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: IcecreamReducer,
});

const store = createStore(rootReducers, applyMiddleware(logger));
console.log("initial state ", store.getState());

const unsubscribe = store.subscribe(
  () => {}
  //   console.log("updated state", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

actions.orderIcecream(4);
actions.restockIcecream(10);

unsubscribe();

//after unsubscribing we cant update state
store.dispatch(orderCake());
