import React from 'react';
import CustomButton from '../Custom-button/custom-button.component';
import './cart-dropdown.style.scss';


export default function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton type="button"> Go To Checkout </CustomButton>
    </div>
  )
}
