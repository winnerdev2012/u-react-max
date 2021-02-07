// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css'
import Person from './Person/Person';

const App = props => {

  const [theState, setTheState] = useState({
    persons: [
      { name: 'Max', age: 29 },
      { name: 'Manu', age: 27 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'something else'
  })
  
  console.log('theState: ', theState)

  const addCharlieBrown = () => {
    setTheState({ persons: [...theState.persons, { name: 'Charlie Brown', age: 8 }] })
  }

  const renderedPersons = theState.persons.map((person, index) => {
    return <Person person={person} key={index} />
  })

  const switchNameHandler = () => {
    console.log('was clicked')

    const stateOriginal = [
      { name: 'Max', age: 29 },
      { name: 'Manu', age: 27 },
      { name: 'Stephanie', age: 26 }
    ]

    const stateUpdated = [
      { ...theState.persons[0], name: 'MAXIMUM', age: 44 },
      { ...theState.persons[1], name: 'MANUMUM', age: 65 },
      { ...theState.persons[2], name: 'STEPHIEMUM', age: 33 }
    ]

    if (theState.persons[0].name === 'Max') {
      setTheState({ persons: stateUpdated, otherState: theState.otherState })
    } else {
      setTheState({ persons: stateOriginal, otherState: theState.otherState  })
    }
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={addCharlieBrown}>Add Charlie Brown</button>
      <button onClick={switchNameHandler}>Switch Names</button>
      {renderedPersons}
    </div>
  )
}

export default App;