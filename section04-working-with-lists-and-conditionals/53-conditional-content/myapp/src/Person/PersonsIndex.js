import React from 'react';
import Person from './Person';

const PersonsIndex = (props) => {

  const renderedPersons = props.persons.map((person, index) => {
    return (
      <Person
        key={index}
        id={index}
        name={person.name}
        age={person.age}
        click={props.switch}
        change={props.change} >My Hobbies: Racing</Person>
    )
  })


  return (
    <div>
      {/* <Person
        name={props.persons[0].name}
        age={props.persons[0].age} />
      <Person
        name={props.persons[1].name}
        age={props.persons[1].age}
        // click={this.switchNameHandler.bind(this, 'Max!')}
        click={props.switch}
        //NOTE: this is the only one with this method, passed in props
        change={props.change} >My Hobbies: Racing</Person>
      <Person
        name={props.persons[2].name}
        age={props.persons[2].age} /> */}

      {renderedPersons}

    </div>
  )
}

export default PersonsIndex;