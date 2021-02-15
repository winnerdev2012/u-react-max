import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = props => {

  // componentDidMount and componentDidUpdate combined into 1 effect
  // doesn't include getDerivedStateFromProps
  // because you would do that using:  useState({ props })
  // executes on every render cycle
  // allows side effects ex: Http request
  
  // PROBLEM: what if only want the first update? not every render?
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    setTimeout(() => {
      alert('Saved data to cloud!')
    }, 1000)
  // }, [props.persons]) // 1 field that triggers rerender
  }, []) // empty list of fields to trigger render, ONLY RUNS ONCE as a result


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