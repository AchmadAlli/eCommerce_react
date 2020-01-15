import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/homepage.component';

const HatsPage = () => (
  <h1> Its Hats Page</h1>
);
const JacketsPage = () => (
  <h1> Its Jackets Page</h1>
);
const SneakersPage = () => (
  <h1> Its Sneakers Page</h1>
);
const WomensPage = () => (
  <h1> Its Womens Page</h1>
);

const MensPage = () => (
  <h1> Its Mens Page</h1>
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/shop/jackets' component={JacketsPage} />
        <Route path='/shop/sneakers' component={SneakersPage} />
        <Route path='/shop/womens' component={WomensPage} />
        <Route path='/shop/mens' component={MensPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
