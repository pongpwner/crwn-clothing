import { addItem } from "./cart.actions";
import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";
const INITIAL_STATE = {
  cartItems: [],
  hidden: true,
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return { cartItems: addItemToCart(state.cartItems, action.payload) };

    default:
      return state;
  }
};
export default cartReducer;
