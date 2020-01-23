import React from 'react';
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions'

import './checkout-item.style.scss';

const CheckoutItem = ({cartItem, dispatch}) => {
  const {name, imageUrl, quantity, price} = cartItem;
  
  return (
    <div className="checkout-item" >
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name"> {name} </span>
      <div className="quantity"> 
        <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}> &#10094; </div>
        <span className="value"> {quantity} </span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}> &#10095; </div>
      </div>
      <span className="price"> {price} </span>
      <div className="remove-button" onClick={()=> dispatch(clearItem(cartItem))}> &#10005; </div>
    </div>
  )
}

export default connect()(CheckoutItem);