import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Forms from "./components/Forms";
// import WrappedLogin from "./components/customersignin";
// import About from "./components/about";
// import Contact from "./components/contact";
// import WrappedDemo from "./components/food"
import "./components/NavBar/navbar.css";
import "./components/Home/home.css";
import "./components/Forms/forms.css";
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
          <NavBar />
          <Home />
          <header className="App-header">
            <h1 className="App-title"></h1>
          </header>
        
          <Forms />
      
        </div>
      </Router>
    );
  }
}

export default App;
