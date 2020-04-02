import React from 'react';
import './UserInput.css';

const Userinput = (props) => {

  return (
    <input 
      type='text' 
      onChange={props.changer()}/>
  )
}

export default Userinput;
