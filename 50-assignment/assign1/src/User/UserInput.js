import React from 'react';

const Userinput = (props) => {

  return (
    <input 
      type='text' 
      value={props.username} 
      onChange={props.namechanger.bind(this) }/>
  )
}

export default Userinput;
