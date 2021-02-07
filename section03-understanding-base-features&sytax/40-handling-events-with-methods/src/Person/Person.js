import React from 'react';

const person = (props) => {
  return (
    <div onCopy={props.onCopy}>
      <h3>My name is {props.name} and I am {props.age} years old.</h3>
      <p>My hometown is: {props.hometown}</p>
      {props.children}
    </div>
  )
}

export default person;
