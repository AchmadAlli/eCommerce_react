export const updateAndReturnCarts = (cartItems, newItem) => {
  const isExist = cartItems.find(item => item.id === newItem.id)

  if(isExist){
    return cartItems.map(item => (item.id === newItem.id) ? {...item, quantity: ++item.quantity} : item);
  }

  return [...cartItems, {...newItem, quantity: 1}];
}