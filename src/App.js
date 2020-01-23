import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors';
import { auth, initProfile } from './firebase/firebase.utils';
import { setUser } from './redux/user/user.actions';
import Header from '../src/components/Header/header.component';
import Homepage from './pages/Homepage/homepage.component';
import Shop from './pages/Shop/shop.component';
import Checkout from './pages/Checkout/checkout.component'
import Authentication from './pages/Authentication/authentication.component';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    
    this.authHandler = this.authHandler.bind(this)
  }
  

  unsubscribeFromAuth = null

  componentDidMount(){
    const {setUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const user      = await initProfile(userAuth)
                
        user.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  authHandler(){
    return this.props.user ? <Redirect to="/" /> : <Authentication />
  }

  render(){
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/sign-in' render={this.authHandler} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
