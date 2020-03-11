import React, { Component } from 'react';
import './App.css';
import Task from './Task';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Task title="Shopping"/>
      </div>
    );
  }
}

export default App;
