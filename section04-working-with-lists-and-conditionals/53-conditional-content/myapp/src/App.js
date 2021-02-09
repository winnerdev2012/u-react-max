import React, { Component } from 'react';
import './App.css';
import PersonsIndex from './Person/PersonsIndex';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    console.log('event.target.value: ', event.target.value)
    const updatedPerson =  this.state.persons[event.dataset.id]
    updatedPerson.name = event.target.value

    this.setState({
      // persons: [
      //   { name: 'Maximilian', age: 28 },
      //   { name: event.target.value, age: 29 },
      //   { name: 'Stephanie', age: 27 }
      // ]
      persons: [...this.state.persons, updatedPerson ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = <p>No persons showing</p>;

    if (this.state.showPersons) {
      persons = <PersonsIndex
        persons={this.state.persons}
        switch={this.switchNameHandler}
        change={this.nameChangedHandler} />
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
