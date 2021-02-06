import React, { Component } from 'react';
import './App.css';
import Task from './Task/Task';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>I'm a Person</p>
        <Task title="Shopping" subtasks="Eggs, Bacon, Cheese, Milk, OJ" />
        <Person />
      </div>
    );
  }
}

export default App;
