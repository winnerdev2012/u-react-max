import React from 'react';

import classes from './Person.module.css';

const person = (props) => {
  console.log('[Person.js] rendering ...')

  return (
    <div className={classes.Person}>
      <p onClick={props.clicked}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
    </div>
  )
};

export default person;