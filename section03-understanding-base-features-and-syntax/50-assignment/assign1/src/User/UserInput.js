import React from 'react';
import './UserInput.css';

const Userinput = (props) => {

  return (
    <div>
      <h2>enter username</h2>
      <input 
        type='text' 
        onChange={props.changer()}
        defaultValue={props.username}
        />
    </div>
  )
}

export default Userinput;
