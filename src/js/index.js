//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include your index.scss file into the bundle
import "../styles/index.css";

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

let counter = 0;

setInterval(function () {
	const one = Math.floor(counter / 1);
	const two = Math.floor(counter / 10);
	const three = Math.floor(counter / 100);
	const four = Math.floor(counter / 1000);
	const five = Math.floor(counter / 10000);
	const six = Math.floor(counter / 100000);
	counter++;
	ReactDOM.render(
		<SecondsCounter
			prop1={one}
			prop2={two}
			prop3={three}
			prop4={four}
			prop5={five}
			prop6={six}
		/>,
		document.querySelector("#app")
	);
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
