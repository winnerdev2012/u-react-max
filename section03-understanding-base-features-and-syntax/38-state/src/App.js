import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import People from './people';

class App extends Component {
  state = {
    people: People
  }

  switchNameHandler = () => {
    console.log('was clicked')
    const updatedNames = (
      [{ ...this.state.people[0], name: 'MAXIMUM' },
      { ...this.state.people[1], name: 'MANUMUM' },
      { ...this.state.people[2], name: 'STEPHIEMUM' }]
    )
    this.state.people === People ? this.setState({ people: updatedNames }) : this.setState({ people: People})
  }

  render() {

    const renderedPersons = this.state.people.map(person => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          hometown={person.hometown}
        />
      )
    })

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {/* <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          hometown={this.state.persons[0].hometown}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          hometown={this.state.persons[1].hometown}
        />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          hometown={this.state.persons[2].hometown}
        /> */}
        {renderedPersons}
      </div>
    );
  }
}

export default App;
