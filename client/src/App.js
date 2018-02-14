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
import './utils/API.js';
import './components/Cart/Cart.css';
// import About from "./components/about";
import ContactForm from "./components/contact";
// import Home from "./components/home";
// import './utils/API.js'
// import './utils/loginAPI.js'
import WrappedLogin from './components/customersignin';
import './components/customersignin/customersignin.css';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import NavBar from './components/navbar';
import ProductPage from './components/ProductPage';

class App extends Component {
  render() {
    return (

        <Router>
            <div className="App">
            <NavBar />
            <Route path="/home" component={ProductPage} />
            {/* <Route path="/productpage" component={Cart} /> */}
            {/* <Route path="/productlist" component={ProductList} /> */}
            </div>
        </Router> 

    //     <div className="container">
    //         <div className="App">
    //             <NavBar />
    //         </div>
      

    //   <div className="row">
    //       <div className="col-md-8">
    //           <ProductList />
    //       </div>
    //       <div className="col-md-4">
    //           <Cart />
    //       </div>
    //   </div>
    //   </div>
    );
  }
}

export default App;
