import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
  let rnd = Math.random()

  if(rnd > .7){
    throw new Error('Somthing went wrong, (this msg in Person component). It renders in development. But in Production, you would see the ErrorBoundary state msg.')
  }

  return (
    <div className={classes.Person} >
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
      <input type="submit" onSubmit={props.submit}></input>
      <button>Fake Button</button>
    </div>
  )
}

export default person;
