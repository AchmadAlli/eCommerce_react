import React from 'react';
import {connect} from 'react-redux';
import {toggleCartList} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = ({toggleCartList})=> (
  <div className="cart-icon" onClick={toggleCartList}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> 0 </span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartList: ()=> dispatch(toggleCartList())
});

export default connect(null, mapDispatchToProps)(CartIcon);
