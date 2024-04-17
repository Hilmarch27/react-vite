import * as toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

// toolkit reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_LOGIN");

const loginReducer = createReducer({status: false}, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// toolkit store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("oncreate store :", store.getState());


// subscribe
store.subscribe(() => {
  console.log("onchange store :", store.getState());
});

// toolkit dispatch
store.dispatch(
  addToCart({
    id: 1,
    qty: 20,
  })
);

store.dispatch(
  login()
);