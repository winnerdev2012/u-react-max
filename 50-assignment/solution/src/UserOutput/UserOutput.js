import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="userOutput">
      <h3>Username: {props.username}</h3>
      <div className="buttonrow">
        <button className="buttonstyle reverser" onClick={props.reverser}>ReverseCase</button>
        <button className="buttonstyle upcaser" onClick={props.upcaser}>UpCase</button>
        <button className="buttonstyle titlecaser" onClick={props.titlecaser}>TitleCase</button>
      </div>
      <p>Now is the time for all good men to come to the aid of their country.</p>
    </div>
  )
}

export default UserOutput;
