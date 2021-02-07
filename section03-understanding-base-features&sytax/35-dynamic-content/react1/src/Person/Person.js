import React from 'react';
import './Person.css';

const person = (props) => {

  const children = props.children
  let secondChild = 'no data here';
  children ? secondChild = props.children[1] : null;
  
  // const getRandomAge = (ageMin, ageMax) => {
  //  return Math.floor(Math.random() * (ageMax - ageMin) + ageMin)
  //  return Math.floor(Math.random() * ageMin)
  // }

  return (
    <div className="person">
      {/* <h3>My name is {props.name}  and I am {Math.floor(Math.random() * 30)} years old.</h3> */}
      {/* <h3>My name is {props.name} and I am {props.age} years old.</h3> */}
      {/* <h3>My name is {props.name} and I am {getRandomAge(50, 100)} years old.</h3> */}
      <h3>My name is {props.person.name} and I am {props.person.age} years old.</h3>
      <p>I have a pet {props.person.pet}</p>
      <p>My hobbies include: {props.person.hobbies.map(h => h).join(' ')}</p>
      <p>My hometown: <span className="hometown">{props.person.hometown}</span></p>
      {secondChild}
  </div>
  )
}

export default person;
