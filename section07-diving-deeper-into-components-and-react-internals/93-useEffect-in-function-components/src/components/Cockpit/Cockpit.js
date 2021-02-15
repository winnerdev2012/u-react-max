import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = props => {

  useEffect(() => {
    // componentDidMount and componentDidUpdate combined into 1 effect
    // doesn't include getDerivedStateFromProps
        // because you would do that using:  useState({ props })
    // executes on every render cycle
    // allows side effects ex: Http request

    console.log('[Cockpit.js] useEffect')
  })


  let btnClass = '';
  const assignedClasses = [];
  
  if(props.showPersons){
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        onClick={props.clicked}
        className={btnClass}>Toggle Persons</button>
    </div>
  );
}

export default Cockpit;