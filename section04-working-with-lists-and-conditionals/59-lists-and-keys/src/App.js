import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Spinner from './Spinner/Spinner';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf', name: 'Max', age: 28 },
      { id: 'zxcv', name: 'Manu', age: 29 },
      { id: 'qwer', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons] // creates a COPY of this.state.persons
    persons.splice(index, 1);
    this.setState({ persons: persons })
  }

  nameChangeHandler = (data) => {
    const { name, id } = data
    const updatedPerson = [...this.state.persons[id]]


    // debugger;


    const updatedPerson = [...this.state.persons].filter(person => person.id === index)[0]
    updatedPerson.name = newName
    const persons = [...this.state.persons, updatedPerson]
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
                key={person.id}
                onclickdelete={() => this.deletePersonHandler(index)}
                name={person.name}
                // changed={this.nameChangeHandler}
                age={person.age} />
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
          onClick={this.togglePersonsHandler}
          >Toggle Persons</button>
        {persons}
      </div>
    )
  }
}

export default App;
