import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackApp.module.css';
import Buttons from './button/Buttons';
import Statistics from './statistic/Statistic';

export default class FeedbackApp extends Component {
	static defaultProps = {
		step: 1,
	}

	state = {
		good: 0,
		neutral: 0,
		bad: 0
	}

	goodFeedback = () => {
		this.setState((prevState, props) => {
			return {
				good: prevState.good + props.step,
			}
		})
	}
	neutralFeedback = () => {
		this.setState((prevState, props) => {
			return {
				neutral: prevState.neutral + props.step,
			}
		})
	}
	badFeedback = () => {
		this.setState((prevState, props) => {
			return{
				bad: prevState.bad + props.step
			}
		})
	}
	totalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return (good + neutral + bad);
	
	}
	positiveFeedback = () => {
		const { good } = this.state;
		return (good / this.totalFeedback()) * 100;
	}

	render () {
		const { good, neutral, bad } = this.state;
		const total = this.totalFeedback();
		const persentage = Number(this.positiveFeedback().toFixed(0))

		return (
			<div className={style.box}>
			<h1>Please leave feedback!</h1>
				<Buttons 
					onGood={this.goodFeedback}
					onNeutral={this.neutralFeedback}
					onBad={this.badFeedback} />
				<Statistics 
					good={good}
					neutral={neutral}
					bad={bad}
					total={total}
					positive={persentage}/>
			</div>
		)
	}
}