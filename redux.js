import { createStore } from "redux";

// reducer

const cartReducer = (
    state = {
        cart: [{
            id: 1,
            qty: 20
        }],
    },
    action
) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default:
            return state;
    }
}

// store
const store = createStore(cartReducer);
console.log("oncreate store :", store.getState());

// subscribe
store.subscribe(() => {
    console.log("onchange store :", store.getState());
})

// dispatch
const action1 = {
    type: "ADD_TO_CART",
    payload: {
        id: 2,
        qty: 20
    }
}
store.dispatch(action1);