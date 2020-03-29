import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name='Max' age='28'/>
        <Person name='Manu' age='27'>My hobbies:  Racing</Person>
        <Person name='Stephanie' age='26'/>
      </div>
    );
  }
}

export default App;
