import React from 'react';
import classes from './Spinner.module.css';
import LogoSpin from './LogoSpin.png'

const spinner = () => {
	return (
		<div className={classes.Center}>
			{/* <p className="Loader">Loading...</p> */}
			<img src={LogoSpin} height="200px" className={classes.LogoSpin} alt="app-logo" />
		</div>
	)
}

export default spinner;
