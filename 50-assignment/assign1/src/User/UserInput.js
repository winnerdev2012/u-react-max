import React from 'react';

const Userinput = (props) => {

  return (
    <input 
      type='text' 
      placeholder='enter username here' 
      onChange={props.namechanger}/>
  )
}

export default Userinput;
