import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import './components/forms/index.css';
import Forms from "./components/forms";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">   
          <h1 className="App-title">Welcome to Meal Ticket!</h1>
        </header>
        <Forms />
      </div>
    );
  }
}

export default App;
