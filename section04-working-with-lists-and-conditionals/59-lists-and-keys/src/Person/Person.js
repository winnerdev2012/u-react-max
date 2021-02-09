import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name} />
            {/* <button onClick={props.onchangename(props.id, props.name)}>update name</button> */}
            <button onClick={props.onclickdelete(props.id, props.name)}>delete (X)</button>
        </div>
    )
};

export default person;
