import {createSelector} from 'reselect';

const selectCart              = state => state.cart
const totalCartReducer        = (quantityAcc, currentValue) => (quantityAcc + currentValue.quantity)
const totalCartPriceReducer   = (quantityAcc, currentValue) => (quantityAcc + currentValue.quantity * currentValue.price)

export const selectCartStatus = createSelector(
  [selectCart],
  cart => cart.isHidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems 
);

export const selectTotalCartItem = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(totalCartReducer, 0)
);

export const selectTotalCartPrice = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(totalCartPriceReducer, 0)
);