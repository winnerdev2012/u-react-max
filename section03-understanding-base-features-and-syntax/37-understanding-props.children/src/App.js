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

  state = { persons: People };

  render() {

    const renderedPersons = this.state.persons.map((person, index) => {
      return <Person person={person} key={index} />
    })

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button>Switch Name</button>
        {renderedPersons}
      </div>
    );
  }
}

export default App;
