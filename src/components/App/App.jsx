import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import Home from '../Home/Home';
import Info from '../Info/Info';
import Admin from '../Admin/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/info">Customer Info</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/info" component={Info} />
        {/* 
        <Route path="/checkout" component={Checkout} />
        <Route path="/admin" component={Admin} /> */}
      </div>
    </Router>
  );
}

export default App;
