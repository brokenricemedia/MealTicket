import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
//import NavBar from "./components/navbar"
import WrappedDemo from "./components/food"
import './components/forms/forms.css';
import Forms from "./components/forms";
import './utils/API.js'
import Navbar from "./components/navbar"

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar />
        <header className="App-header">   
          <h1 className="App-title">Welcome to Meal Ticket!</h1>

        </header>
        <WrappedDemo />
        <Forms />
      </div>
     </Router> 
    );
  }
}

export default App;
