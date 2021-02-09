import React from 'react';
import './Char.css';

const Char = props => {

  const style = {
    border: '1px solid black',
    color: 'red',
    display: 'inline-block',
    margin: '16px',
    padding: '16px',
    textAlign: 'center'
  }

  return (
    <div style={style} onClick={props.clicked}> 
      <p>{props.character}</p>
    </div>
  )
}

export default Char;