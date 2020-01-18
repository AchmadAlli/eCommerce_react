import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../src/components/Header/header.component';
import Homepage from './pages/Homepage/homepage.component';
import Shop from './pages/Shop/shop.component';
import Authentication from './pages/Authentication/authentication.component';
import {auth, initProfile} from './firebase/firebase.utils'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       user: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const user      = await initProfile(userAuth)
                
        user.onSnapshot(snapShot => {
          this.setState({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

      } 
      this.setState({user: userAuth})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <BrowserRouter>
        <Header user={this.state.user} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/sign-in' component={Authentication} />
        </Switch>
      </BrowserRouter>
    )
  }
  

}

export default App;
