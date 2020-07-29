import React from 'react';
import PropTypes from 'prop-types';
import style from './Notification.module.css';

function Notification({ message }) {
	return (
		<>
		<h2 className={style.title}>{message}</h2>
		</>
	)
}

Notification.propTypes = {
	message: PropTypes.string.isRequired
}
export default Notification;