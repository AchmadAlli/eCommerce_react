import cartActionTypes from './cart.types';
import { updateAndReturnCarts, clearCartItem } from './cart.utils';

const INITIAL_STATE = {
  isHidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_LIST:
      return {
        ...state,
        isHidden: !state.isHidden
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: updateAndReturnCarts(state.cartItems, action)
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: updateAndReturnCarts(state.cartItems, action)
      } 
    case cartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearCartItem(state.cartItems, action.payload)
      } 
    default:
      return state;
  }
}

export default cartReducer;