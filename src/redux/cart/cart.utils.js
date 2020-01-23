import ActionTypes from './cart.types';

const updateItem = (type, item) => type === ActionTypes.ADD_ITEM ? {...item, quantity: ++item.quantity} : {...item, quantity: --item.quantity};

export const updateAndReturnCarts = (cartItems, action) => {
  const {type, payload} = action;
  const isExist   = cartItems.find(item => item.id === payload.id)

  if(payload.quantity === 1 && type === ActionTypes.REMOVE_ITEM){
    console.log("removed");
    return clearCartItem(cartItems, payload);
  }

  if(isExist){
    return cartItems.map(item => (item.id === payload.id) ? updateItem(type, item) : item);
  }

  return [...cartItems, {...payload, quantity: 1}];
}

export const clearCartItem = (cartItems, item) => cartItems.filter(cartItem => cartItem.id !== item.id)