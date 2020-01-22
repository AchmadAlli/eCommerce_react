import React from 'react';
import {connect} from 'react-redux';
import {toggleCartList} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = ({toggleCartList, cartItems})=> (
  <div className="cart-icon" onClick={toggleCartList}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {getTotalItems(cartItems)} </span>
  </div>
);

function getTotalItems(items) {
  return items.reduce((accumulator, currentValue) => (accumulator + currentValue.quantity), 0)
}

const mapDispatchToProps = dispatch => ({
  toggleCartList: ()=> dispatch(toggleCartList())
});

const mapStateToProps = ({cart}) => ({
  cartItems : cart.cartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
