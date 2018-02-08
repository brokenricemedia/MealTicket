import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import './components/forms/forms.css';
import Forms from "./components/forms";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <header className="App-header">   
          <h1 className="App-title">Welcome to Meal Ticket!</h1>

        </header>
        <Forms />
      </div>
     </Router> 
    );
  }
}

export default App;
