import React, { Component } from 'react';
import './App.css';
import Task from './Task';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Task title="Shopping" subtasks="Eggs, Bacon, Cheese, Milk, OJ" />
        <Person />
      </div>
    );
  }
}

export default App;
