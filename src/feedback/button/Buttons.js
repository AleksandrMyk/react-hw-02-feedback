import React from 'react'
import style from './Button.module.css';
import PropTypes from 'prop-types';

function Buttons({ onGood, onNeutral, onBad }) {
	return (
		<div>
			<button 
			className={style.btn} 
				onClick={onGood} 
			type='button'>Good
			</button>
			<button 
			className={style.btn} 
				onClick={onNeutral}
			type='button'>Neutral
			</button>
			<button 
			className={style.btn} 
				onClick={onBad}
			type='button'>bad
			</button>
		</div>
	)
}

Buttons.propTypes = {
	onGood: PropTypes.number.isRequired,
	onNeutral: PropTypes.number.isRequired,
	onBad: PropTypes.number.isRequired,
}
export default Buttons;