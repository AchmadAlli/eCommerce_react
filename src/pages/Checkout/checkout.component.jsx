import React from 'react';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItems, selectTotalCartPrice } from '../../redux/cart/cart.selectors';
import { addItem } from '../../redux/cart/cart.actions'
import CheckoutItem from '../../components/Checkout-item/checkout-item.component';

import './checkout.style.scss';

const Checkout = ({cartItems, total, history}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header"> 
        <div className="header-block">
          <span> Product </span>
        </div>
        <div className="header-block">
          <span> Description </span>
        </div>
        <div className="header-block">
          <span> Quantity </span>
        </div>
        <div className="header-block">
          <span> Price </span>
        </div>
        <div className="header-block">
          <span> Remove </span>
        </div>
      </div>

      {
        cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)
      }

      <div className="total">
        <span> Total : ${total}</span>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotalCartPrice
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout));