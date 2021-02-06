import React, { Component, useImperativeHandle } from 'react';
import './App.css';
import Person from './Person/Person';
import Spinner from './Spinner/Spinner';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons.slice(0, index), ...this.state.persons.slice(index + 1, this.state.persons.length)]
    // const persons = [...this.state.persons.splice(index + 1)]
    // const persons = this.state.persons.splice(index + 1) // mutates reference object directly
    // const persons = this.state.persons.slice() // creates a copy
    // let persons = [...this.state.persons] // another copy method
    // persons = persons.splice(index + 1) // another copy method
    // always update state via a copy, mutating the copy and then using setState()
    // const persons = [...this.state.persons.slice(index + 1)]
    this.setState({
      persons: persons
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'yellowgreen',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // let persons = <p>No persons showing</p>;
    let persons = <Spinner />;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            )
          })}
        </div>
      )
    }

    return (
      <div className="App" >
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
