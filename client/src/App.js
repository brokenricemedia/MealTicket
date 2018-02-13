import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Forms from "./components/forms";
// import WrappedLogin from "./components/customersignin";
// import About from "./components/about";
// import Contact from "./components/contact";
// import WrappedDemo from "./components/food"
import "./components/navbar/navbar.css";
import "./components/home/home.css";
import "./components/forms/forms.css";
// import "./components/customersignin/customersignin.css";
// import "./components/about/about.css";
// import "./components/contact/contact.css";
import "./utils/API.js";
// import './utils/loginAPI.js'

const home = () => <div>Home</div>;
const forms = () => <div>Login</div>;
const navbar = () => <div>Welcome</div>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {<NavBar />}
          
          <header className="App-header">
            <h1 className="App-title">Welcome to Meal Ticket!</h1>
          </header>
        
          {<Forms />}
      
        </div>
      </Router>
    );
  }
}

export default App;
