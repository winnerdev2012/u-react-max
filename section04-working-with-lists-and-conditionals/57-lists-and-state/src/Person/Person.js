import React from 'react';

import './Person.css';

const person = (props) => {
	console.log('props: ', props)
	return (
		<div className="Person">
			<p
				onClick={props.deleteclick} 
				className="PersonTitle"
				data-id={props.id}>I'm {props.name} and I am {props.age} years old!</p>
			<input type="text" onChange={props.changed} defaultValue={props.name} />
		</div>
	)
};

export default person;
