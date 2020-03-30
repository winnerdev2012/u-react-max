import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  })

  const switchNameHandler = (newName) => {
    console.log('personsState: ', personsState)  
    // newName ? newName : newName = 'Bill';
    setPersonsState({
      persons: [
        {name: newName, age: 28, hometown: 'Munich'},
        {name: 'Manu', age: 29, hometown: 'Paris'},
        {name: 'Stephanie', age: 27, hometown: 'Vienna'}
      ]
    })
  }
 
  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        {name: 'Max', age: 28, hometown: 'Munich'},
        {name: event.target.value, age: 29, hometown: 'Paris'},
        {name: 'Stephanie', age: 26, hometown: 'Vienna'}
      ]
    })
  }
  
  const style = {
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
  
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button 
        onClick={switchNameHandler.bind(this, null)}
        style={style}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
        changed={nameChangedHandler}
        />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} 
        changed={nameChangedHandler}
        />
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} 
        changed={nameChangedHandler}
      />
    </div>
  );
}

export default app;
