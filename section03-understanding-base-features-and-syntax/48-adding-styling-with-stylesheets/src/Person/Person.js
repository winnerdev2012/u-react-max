import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className='Person'>
      <p>My name is {props.name} and I am {props.age} years old.</p>
      <p>{props.children}</p>

      {/* this is two-way binding */}
      <input type='text' onChange={props.changed} defaultValue={props.name} />
    </div>
  )
}

export default person;
