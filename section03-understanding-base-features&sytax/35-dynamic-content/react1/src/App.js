import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: '28', pet: 'bird', hometown: 'Munich', hobbies: ['racing', 'swimming'], kids: 0 },
      {name: 'Manu', age: '29', pet: 'cat', hometown: 'Munich', hobbies: ['cooking', 'running'], kids: 1 },
      {name: 'Stephanie', age: '36', pet: 'dog', hometown: 'Vienna', hobbies: ['antiques collecting', 'cycling'], kids: 2 },
      {name: 'George', age: '42', pet: 'fish', hometown: 'Vienna', hobbies: ['poker', 'hiking'], kids: 3 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button>Switch Name</button>
        <Person person={this.state.persons[0]}><p>I have {this.state.persons[0].kids} kids.</p></Person>
        <Person person={this.state.persons[1]} />
        <Person person={this.state.persons[2]}>
          <p>child content 1</p>
          <p>child content 2</p>
          <p>child content 3</p>
        </Person>
        <Person person={this.state.persons[3]}>
          <p>child content 4</p>
          <p>child content 5</p>
          <p>child content 6</p>
        </Person>
      </div>
    );
  }
}

export default App;
