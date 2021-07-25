import { STATEMENT_OR_BLOCK_KEYS } from "@babel/types";
import CartActionTypes from "./cart.types";
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem= item=>({
  type:CartActionTypes.ADD_ITEM,
  payload: item
})