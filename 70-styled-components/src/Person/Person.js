import React from 'react';
import styled from 'styled-components'
// import './Person.css';

const StyledDiv = styled.div`
    width: 65%;
    margin: 16px auto;
    border: 4px solid #222;
    box-shadow: 0 2px 3px #ccc;
    padding: 18px;
    text-align: center;

    @media (min-width: 600px) {
        border: 4px solid #e90f1d;
    }`

const person = (props) => {
    // const style1 = {
    //     '@media (min-width: 500px)': {
    //         border: '3px solid orange',
    //         width: '350px'
    //     }
    // }
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name} />
            <input type="submit" onSubmit={props.submit}></input>
        </StyledDiv>
    )
};

export default person;
