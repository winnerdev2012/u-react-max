import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.onClick}>My name is {props.name} and I am {props.age} years old.</p>
      <p>My hometown is: {props.hometown}</p>
      {props.children}
    </div>
  )
}

export default person;
