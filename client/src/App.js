import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
<<<<<<< HEAD
import WrappedApp from "./components/food"
import WrappedDemo from "./components/food"
=======
import './components/forms/forms.css';
import Forms from "./components/forms";
import './utils/API.js'
>>>>>>> 1cfeee7b3ab112a171f2a124be1e11b7267ccfc4

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <header className="App-header">   
          <h1 className="App-title">Welcome to Meal Ticket!</h1>

        </header>
<<<<<<< HEAD
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <WrappedDemo />
=======
        <Forms />
>>>>>>> 1cfeee7b3ab112a171f2a124be1e11b7267ccfc4
      </div>
     </Router> 
    );
  }
}

export default App;
