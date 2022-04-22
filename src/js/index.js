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
				<div className="one">{props.prop}</div>
			</div>
		</>
	);
};

let counter = 0;

setInterval(function () {
	ReactDOM.render(
		<SecondsCounter prop={counter} />,
		document.querySelector("#app")
	);
	counter++;
}, 1000);

SecondsCounter.propTypes = {
	prop: PropTypes.number,
};

export default SecondsCounter;
