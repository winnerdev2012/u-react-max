import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    const style1 = {
        '@media (min-width: 450px)': {
            border: '3px solid orange',
            width: '500px'
        }
    }
    return (
        <div className="Person" style={style1} >
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name} />
            <input type="submit" onSubmit={props.submit}></input>
        </div >
    )
};

export default Radium(person);
