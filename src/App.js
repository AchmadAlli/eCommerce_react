import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../src/components/Header/header.component';
import Homepage from './pages/Homepage/homepage.component';
import Shop from './pages/Shop/shop.component';
import Authentication from './pages/Authentication/authentication.component';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/sign-in' component={Authentication} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
