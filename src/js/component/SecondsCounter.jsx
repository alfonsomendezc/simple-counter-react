import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
	const [counter, setCounter] = useState(0);
	const [timerOn, setTimerOn] = useState(true);

	useEffect(() => {
		let interval = 0;
		if (timerOn) {
			interval = setInterval(() => {
				setCounter((prevCounter) => prevCounter + 1);
			}, 10);
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [timerOn]);

	return (
		<>
			<div className="bigCounter">
				<div className="clock">
					<i className="fa-solid fa-clock"></i>
				</div>
				<div className="four">{Math.floor(counter / 100000) % 10}</div>
				<div className="three">{Math.floor(counter / 10000) % 10}</div>
				<div className="two">{Math.floor(counter / 1000) % 10}</div>
				<div className="one">{Math.floor(counter / 100) % 10}</div>

				<button onClick={() => setTimerOn(false)}>Stop</button>
				<button onClick={() => setTimerOn(true)}>Resume</button>
				<button onClick={() => setCounter(0)}>Reset</button>
			</div>
		</>
	);
};

export default SecondsCounter;
