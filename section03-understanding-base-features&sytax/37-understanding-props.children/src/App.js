import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import People from './people';

class App extends Component {
  // state = {
  //   persons: [
  //     {name: 'Max', age: '28', pet: 'bird', hometown: 'Munich', hobbies: ['racing', 'swimming'], kids: 0 },
  //     {name: 'Manu', age: '29', pet: 'cat', hometown: 'Munich', hobbies: ['cooking', 'running'], kids: 1 },
  //     {name: 'Stephanie', age: '36', pet: 'dog', hometown: 'Vienna', hobbies: ['antiques collecting', 'cycling'], kids: 2 }
  //   ]
  // }

  state = {persons: People};



  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button>Switch Name</button>
        
        <Person person={this.state.persons[0]}>
          <p>I have {this.state.persons[0].kids} kids.</p>
        </Person>
        
        <Person person={this.state.persons[1]} />
        
        <Person person={this.state.persons[2]}>
          <p>1st child content</p>
          <p>2nd child content</p>
          <p>3rd child content</p>
          <p>4th child content</p>
          <p>5th child content</p>
          <p>6th child content</p>
        </Person>
      </div>
    );
  }
}

export default App;
