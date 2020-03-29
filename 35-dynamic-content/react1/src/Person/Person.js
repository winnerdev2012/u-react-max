import React from 'react';

const person = (props) => {
  const children = props.children
  let secondChild = 'no data here';
  children ? secondChild = props.children[2].props.children.valueOf() : null;
  
  return (
    <div>
      <h3>My name is {props.name} and I am {props.age} years old.</h3>
      <p>{secondChild}</p>
  </div>
  )
}

export default person;
