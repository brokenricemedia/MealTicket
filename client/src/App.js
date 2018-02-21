import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import WrappedDemo from "./components/food"
import './components/forms/forms.css';
import './components/about/about.css';
import './components/home/home.css';
import './components/contact/index.css';
import Forms from "./components/forms";
import './utils/API.js';
import './components/Cart/cart.css';
import ContactForm from "./components/contact";
import WrappedLogin from './components/customersignin';
import './components/customersignin/customersignin.css';
import Cart from './containers/Cart.js';
import ProductList from './containers/ProductList';
import NavBar from './components/navbar';
import ProductPage from './components/ProductPage';
import BackgroundImage from './components/backgroundimage'
import AboutPage from './components/about'


class App extends Component {
  render() {
    return (

        <Router>  
            <div className="App">
            <BackgroundImage />
            <NavBar />
            <Route path="/" exact component={Forms} />
            <Route path="/home" component={ProductPage} />
            <Route path="/login" component={WrappedLogin} />
            <Route path="/about" component={AboutPage} />
            

            </div>
        </Router> 

    );
  }
}

export default App;
