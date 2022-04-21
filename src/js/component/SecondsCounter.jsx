import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
	return (
		<>
			<div className="bigCounter">
				<div className="clock">
					<i className="fa-solid fa-clock"></i>
				</div>
				<div className="six">{props.prop6}</div>
				<div className="five">{props.prop5}</div>
				<div className="four">{props.prop4}</div>
				<div className="three">{props.prop3}</div>
				<div className="two">{props.prop2}</div>
				<div className="one">{props.prop1}</div>
			</div>
		</>
	);
};

let counter = 0

setInterval(function() {
	const one = counter % 10;
	const two = Math.floor(counter / 10) % 10;
	const three = Math.floor(counter / 100) % 10;
	const four = Math.floor(counter / 1000) % 10;
	const five = Math.floor(counter / 10000) % 10;
	const six = Math.floor(counter / 100000) % 10;
	counter++;
}, 1000);

SecondsCounter.propTypes = {
	prop1: PropTypes.number,
	prop2: PropTypes.number,
	prop3: PropTypes.number,
	prop4: PropTypes.number,
	prop5: PropTypes.number,
	prop6: PropTypes.number,
};


export default SecondsCounter;
