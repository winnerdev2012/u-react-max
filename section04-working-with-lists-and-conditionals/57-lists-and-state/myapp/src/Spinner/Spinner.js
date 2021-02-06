import React from 'react';
import './Spinner.css';
import LogoSpin from './LogoSpin.png'

const spinner = () => {
	return (
		<div className="Center">
			{/* <p className="Loader">Loading...</p> */}
			<img src={LogoSpin} height="200px" className="LogoSpin" alt="app-logo" />
		</div>
	)
}

export default spinner;
