import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: '28', hometown: 'Munich'},
      {name: 'Manu', age: '29', hometown: 'Munich'},
      {name: 'Stephanie', age: '26', hometown: 'Vienna'}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button>Switch Name</button>
        <Person name='Max' age='28'>
          <p>I am a code teacher</p>
          <p>Hobbies: Hamburger restaurants</p>
          <p>Pets: One small fish</p>
        </Person>

        <Person name='Manu' age='27'>
          <p>I am a climber</p>
          <p>Hobbies: Sushi restaurants</p>
          <p>Pets: Dog</p>
        </Person>

        <Person name='Stephanie' age='26'>
          <p>I am a runner</p>
          <p>Hobbies: Asian restaurants</p>
          <p>Pets: A small frog</p>
        </Person>
      </div>
    );
  }
}

export default App;
