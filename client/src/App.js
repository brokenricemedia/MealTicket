import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
//import NavBar from "./components/navbar"
import WrappedDemo from "./components/food"
import './components/forms/forms.css';
import './components/about/about.css';
import './components/home/home.css';
import './components/contact/index.css';
import Forms from "./components/forms";
import Cart from './components/cart';
import './components/cart/cart.css';
// import About from "./components/about";
import ContactForm from "./components/contact";
// import Home from "./components/home";
// import './utils/API.js'
// import './utils/loginAPI.js'
import WrappedLogin from './components/customersignin';
import './components/customersignin/customersignin.css';
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          <Route path="/cart" component={Cart} />
        </div>
     </Router> 
    );
  }
}

export default App;
