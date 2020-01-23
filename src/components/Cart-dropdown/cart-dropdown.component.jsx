import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { withRouter } from 'react-router-dom';
import CustomButton from '../Custom-button/custom-button.component';
import CartItem from '../Cart-item/cart-item.component';
import './cart-dropdown.style.scss';
import { toggleCartList } from '../../redux/cart/cart.actions';



const CartDropdown = ({cartItems, history, dispatch}) => {
  const cartItemList          = cartItems => cartItems.map(item => <CartItem key={item.id} {...item} />);
  const emptyCartList         = <span className="empty-message" > Your cart is empty </span>;

  const openCheckoutPageAndCloseCartDropdown = (history, dispatch) => { 
    history.push(`/checkout`);
    dispatch(toggleCartList());
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ? cartItemList(cartItems) : emptyCartList
        }
      </div>
      <CustomButton type="button" onClick={() => openCheckoutPageAndCloseCartDropdown(history, dispatch)}> Go To Checkout </CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({cartItems: selectCartItems});

export default withRouter(connect(mapStateToProps)(CartDropdown));