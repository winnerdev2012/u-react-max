import React from 'react';

const person = (props) => {
  return (
  <div>
    <h3>My name is {props.name} and I am {props.age} years old.</h3>
  </div>
  )
}

export default person;
