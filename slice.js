import * as toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

// action and reducer
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
    },
});

//  store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
console.log("oncreate store :", store.getState());

// subscribe
store.subscribe(() => {
  console.log("onchange store :", store.getState());
});

// dispatch
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 20 }));
