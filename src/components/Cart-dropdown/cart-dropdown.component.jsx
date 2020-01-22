import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import CustomButton from '../Custom-button/custom-button.component';
import CartItem from '../Cart-item/cart-item.component';
import './cart-dropdown.style.scss';


const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(item => <CartItem key={item.id} {...item} />)
        }
      </div>
      <CustomButton type="button"> Go To Checkout </CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({cartItems: selectCartItems});

export default connect(mapStateToProps)(CartDropdown);