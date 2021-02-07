import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import People from './people';

class App extends Component {
  state = {
    people: People,
    isLoading: false
  }

  switchNameHandler = () => {
    console.log('was clicked')
    const updatedNames = (
      [{ ...this.state.people[0], name: 'MAXIMUM' },
      { ...this.state.people[1], name: 'MANUMUM' },
      { ...this.state.people[2], name: 'STEPHIEMUM' }]
    )
    this.state.people === People ? this.setState({ people: updatedNames }) : this.setState({ people: People })
  }


  // spinnner = () => {
  //   if(this.state.isLoading){

  //   } 
  // }

  addRandomUser = () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {

        let person = {
          id: this.state.people.length + 1,
          name: data.results[0].name.first,
          age: data.results[0].dob.age,
          hometown: data.results[0].location.city
        }

        if (person) {
          this.setState({
            people: [...this.state.people, person]
          })
        }
      }).catch(error => console.log("error in addRandomUser: ", error))
  }

  copyHandler = (event) => {
    console.log('you copied this: ', event.currentTarget.innerText)
    console.log('clipboardData: ', event.target.clipboardData)
  }

  render() {

    const renderedPersons = this.state.people.map(person => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          hometown={person.hometown}
          onCopy={this.copyHandler}
        />
      )
    })

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <ul>
          <li>
            <button onClick={this.switchNameHandler}>Switch Name</button>
          </li>
          <li>
            <button onClick={this.addRandomUser}>Add Random User</button>
          </li>
          <li>
            <button onCopy={this.copyHandler}>Right click and copy this text.</button>
          </li>
        </ul>

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
