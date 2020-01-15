import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/homepage.component';
import Shop from './pages/Shop/shop.component';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
