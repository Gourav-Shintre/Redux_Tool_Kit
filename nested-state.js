const redux = require("redux");
const produce = require("immer").produce;
const createStore = redux.createStore;

const initialState = {
  name: "gourav",
  address: {
    city: "tasgaon",
    pincode: 416312,
  },
};

const CITY_UPDATE = "CITY_UPDATE";

const updateCity = (city) => ({
  type: CITY_UPDATE,
  payload: city,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CITY_UPDATE:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.city = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});
store.dispatch(updateCity("pune"));

unsubscribe();
