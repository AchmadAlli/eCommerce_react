import React from 'react';
import {connect} from 'react-redux';
import {toggleCartList} from '../../redux/cart/cart.actions';
import {selectTotalCartItem} from '../../redux/cart/cart.reselect';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = ({toggleCartList, totalItem})=> (
  <div className="cart-icon" onClick={toggleCartList}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {totalItem} </span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartList: ()=> dispatch(toggleCartList())
});

const mapStateToProps = state => ({
  totalItem : selectTotalCartItem(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
