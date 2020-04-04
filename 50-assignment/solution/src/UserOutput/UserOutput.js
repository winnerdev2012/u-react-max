import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="userOutput">
      <h3>Username: {props.username}</h3>
      <button className="buttonstyle reverser" onClick={props.reverser}>Reverse UserName</button>
      <button className="buttonstyle upcaser" onClick={props.upcaser}>Upcase UserName</button>
      <button className="buttonstyle titlecaser" onClick={props.titlecaser}>TitleCaser UserName</button>
      <p>Now is the time for all good men to come to the aid of their country.</p>
    </div>
  )
}

export default UserOutput;
