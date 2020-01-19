import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils'
import './header.style.scss';

const signIn = (<Link to="/sign-in" className="option"> SIGN IN </Link>)
const logout = (<div className="option" onClick={()=> auth.signOut()} > LOGOUT </div>)

const Header = ({user})=> (
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
    </div>
  </nav>
);

const mapStateToProps = state => ({
  user: state.user.currentUser
})

export default connect(mapStateToProps)(Header);