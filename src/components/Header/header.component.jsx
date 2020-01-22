import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {createStructuredSelector} from 'reselect'
import {selectCartStatus} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors'
import CartIcon from '../Cart-icon/cart-icon.component';
import CartDropdown from '../Cart-dropdown/cart-dropdown.component';
import './header.style.scss';

const signIn = (<Link to="/sign-in" className="option"> SIGN IN </Link>)
const logout = (<div className="option" onClick={()=> auth.signOut()} > LOGOUT </div>)

const Header = ({user, isHidden})=> (
  <nav className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {user ? logout : signIn}
      <CartIcon />
    </div>
    {isHidden ? null : <CartDropdown />}
  </nav>
);

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  isHidden: selectCartStatus
})

export default connect(mapStateToProps)(Header);