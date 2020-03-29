import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    hometowns: [
      {name: 'Munich'}, 
      {name: 'Boston'}, 
      {name: 'New York'}
    ]
  })

  const [hometowns, setHometowns] = useState(personsState.hometowns)
  const switchNameHandler = () => {
    console.log('personsState: ', personsState)  
    console.log('hometowns: ', hometowns)  
    setPersonsState({
      persons: [
        {name: 'Maximillian', age: 28, hometown: 'Munich'},
        {name: 'Manu', age: 29, hometown: 'Paris'},
        {name: 'Stephanie', age: 27, hometown: 'Vienna'}
      ],
      hometowns: [
        {name: 'Brussels'}, 
        {name: 'San Paolo'}, 
        {name: 'Miami'}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} 
        hometown={personsState.hometowns[0].name} 
        />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} 
        hometown={hometowns[1].name} 
        />
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} 
        hometown={personsState.hometowns[2].name} 
      />
    </div>
  );
}

export default app;
