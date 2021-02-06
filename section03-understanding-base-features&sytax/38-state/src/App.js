import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28, hometown: 'Munich'},
      {name: 'Manu', age: 29, hometown: 'Paris'},
      {name: 'Stephanie', age: 26, hometown: 'Vienna'}
    ],
    hometowns: [
      {name: 'Munich'}, 
      {name: 'Boston'}, 
      {name: 'New York'}
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked')
    this.setState({
      persons: [
        {name: 'Maximillian', age: 28, hometown: 'Munich'},
        {name: 'Manu', age: 29, hometown: 'Paris'},
        {name: 'Stephanie', age: 27, hometown: 'Vienna'}
      ]
    })
  }
 
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          hometown={this.state.hometowns[0].name}>
          </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          hometown={this.state.persons[1].hometown}
        />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          hometown={this.state.persons[2].hometown}
        />
      </div>
    );
  }
}

export default App;
