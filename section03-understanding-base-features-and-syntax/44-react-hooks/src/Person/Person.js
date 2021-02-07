import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.person.onClick}>My name is {props.person.name} and I am {props.person.age} years old.</p>
    </div>
  )
}

export default person;
