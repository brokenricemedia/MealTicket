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
import './components/contact/contact.css';
import Forms from "./components/forms";
// import About from "./components/about";
// import Contact from "./components/contact";
// import Home from "./components/home";
// import './utils/API.js'
// import './utils/loginAPI.js'
import WrappedLogin from './components/customersignin';
import './components/customersignin/customersignin.css';


const home =() => <div>Home</div>
const forms = () => <div>Login</div>
const navbar = () => <div>Welcome</div>


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      {/* <Navbar /> */}
        <header className="App-header">   
          <h1 className="App-title">Welcome to Meal Ticket!</h1>

        </header>

      <Forms /> 

<<<<<<< HEAD
<<<<<<< HEAD
       
=======
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      
>>>>>>> 566f3c5e95d563d8924fe7056c13f39c6b7dba00
        <WrappedDemo />
        <Forms />
=======
      <WrappedLogin />
>>>>>>> 649586efb19fd5e56e9c1fe8dcce35bd5f0ac67e

      </div>
     </Router> 
    );
  }
}

export default App;
