import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div>
      <h3 onClick={props.click} className="name">My name is {props.name} and I am {props.age} years old.</h3>
      <p>My hometown is: {props.hometown}</p>

{/* personSwitchData={this.personSwitchDataHandler}
personId={index}
nameChange={this.nameChangeHandler} */}
{/* 
      <button 
        onClick={props.personSwitchData}
        personswitchdata={props.personSwitchData}
        id={props.personId}
        changename={props.changeName}
        >person switch data</button> */}
      {props.children}
    </div>
  )
}

export default person;
