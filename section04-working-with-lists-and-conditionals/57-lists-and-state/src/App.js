import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Spinner from './Spinner/Spinner';

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

  // 1st way
  // nothing passed in props, line 69  deleteclick={this.deletePersonHandler} />
  // using the index passed via dataset in html
  // finds the person in the array, starting at 'id' (the index where that person is ), and counting 1 from there
  // filtering a copy of this.state.persons, (ie. all persons who DO NOT match the deletedPerson we just found)
  // overwrite state with the filtered persons array
  // deletePersonHandler = (event) => {
  //   const id = event.currentTarget.dataset.id
  //   console.log('id: ', event.currentTarget.dataset.id)

  //   const deletedPerson = this.state.persons.splice(id, 1 )
  //   const persons = this.state.persons.filter(person => person !== deletedPerson)
  //   this.setState({
  //     persons: persons
  //   })
  // }

  // 2nd way 
  // passing the index marker in the props passed to Person, line: 68  deleteclick={() => this.deletePersonHandler(index)} />
  deletePersonHandler = (index) => {
    // 1st way WRONG because it directly mutates state
      // directly references this.state.persons
      // directly mutates this.state.persons
      // still 'works' but is bad practice to mutuate state directly
    // const deletedPerson = this.state.persons.splice(index, 1 )
    // const persons = this.state.persons.filter(person => person !== deletedPerson)

    // 2nd way WRONG because it directly mutates state
      // directly references this.state.persons
      // directly mutates this.state.persons
      // still 'works' but is bad practice to mutuate state directly
    // const persons = this.state.persons; 
    // persons.splice(index, 1) 
    // this.setState({ persons: persons }) 

    // 3rd way using SLICE not SPLICE
    // const persons = this.state.persons.slice(); // creates a COPY of this.state.persons
    // persons.splice(index, 1);
    // this.setState({ persons: persons })

    // 4th way using spread operator
    const persons = [...this.state.persons] // creates a COPY of this.state.persons
    persons.splice(index, 1);
    this.setState({ persons: persons })
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

    let persons = <Spinner />;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                key={index}
                name={person.name}
                age={person.age}
                id={index}
                deleteclick={() => this.deletePersonHandler(index)} />
                // deleteclick={this.deletePersonHandler} />
          })}
        </div>
      )
    }

    console.log('this.state.persons: ', this.state.persons)

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
  }
}

export default App;
