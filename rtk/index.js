const store = require("./app/store");
const { cakeActions } = require("../rtk/features/cake/cakeSlice");

const { icecreamActions } = require("../rtk/features/icecream/icecreamslice");

// console.log("inittial state", store.getState());

const unsubscribe = store.subscribe(() => {
//   console.log("updated state", store.getState());
});

store.dispatch(cakeActions.ordered(3));
store.dispatch(cakeActions.restock(10));

store.dispatch(icecreamActions.orderIcecream(15));

unsubscribe();
