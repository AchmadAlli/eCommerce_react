import {createSelector} from 'reselect';

const selectCart        = state => state.cart
const totalCartReducer = (quntityAcc, currentValue) => (quntityAcc + currentValue.quantity)

export const selectCartStatus = createSelector(
  [selectCart],
  (cart) => cart.isHidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems 
);

export const selectTotalCartItem = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(totalCartReducer, 0)
);

