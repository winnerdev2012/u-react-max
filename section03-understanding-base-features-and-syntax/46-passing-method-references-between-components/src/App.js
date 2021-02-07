import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import People from './people';

class App extends Component {
  state = {
    people: People
  }

  // switchNameHandler = () => {
  //   console.log('was clicked')
  //   const updatedNames = [{ ...this.state.people[0], name: 'MAXIMUM' },
  //   { ...this.state.people[1], name: 'MANUMUM' },
  //   { ...this.state.people[2], name: 'STEPHIEMUM' }]
  //   this.state.people === People ? this.setState({ people: updatedNames }) : this.setState({ people: People })
  // }

  switchNameHandler = (name) => {
    console.log('was clicked')
    const updatedNames = [{ ...this.state.people[0], name: name },
    { ...this.state.people[1], name: 'MANUMUM' },
    { ...this.state.people[2], name: 'STEPHIEMUM' }]
    this.state.people === People ? this.setState({ people: updatedNames }) : this.setState({ people: People })
  }

  // personSwitchDataHandler = (event) => {
  //   let id = event.target.id
  //   let updatedPerson = this.state.people[id]
  //   updatedPerson.name = 'FRANK'
  //   console.log('updatedPerson: ', updatedPerson)

  //   this.setState({
  //     persons: [...this.state.people, updatedPerson]
  //   })
  // }


  render() {
    const renderedPersons = this.state.people.map((person, index) => {
      // recommended to use .bind
      // const specialChange = this.switchNameHandler.bind(this, 'Max name bound to props.click')

      // can use this, but can be inefficient, React might start rendering things too often in a large app
      const specialChange = () => this.switchNameHandler('Passed to anonymous function')
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          hometown={person.hometown}
          personswitchdata={this.personSwitchDataHandler}
          personId={index}
          // click={this.switchNameHandler.bind(this, 'Max name bound to props.click')}
          click={index === 0 ? specialChange : null}
        />
      )
    })

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maximillian')}>Switch Data</button> */}
        <button onClick={() => this.switchNameHandler('Thanks A Million!')}>Switch Data</button>

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
