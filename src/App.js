import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../src/components/Header/header.component';
import Homepage from './pages/Homepage/homepage.component';
import Shop from './pages/Shop/shop.component';
import Authentication from './pages/Authentication/authentication.component';
import {auth, initProfile} from './firebase/firebase.utils';
import {setUser} from './redux/user/user.actions';
import './App.css';

class App extends Component {

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

  render(){
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/sign-in' component={Authentication} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps= dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(App);
