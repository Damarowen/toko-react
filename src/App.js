import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";



function App() {
  
  return (
    <Router>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Router>

  );
}



export default App;
