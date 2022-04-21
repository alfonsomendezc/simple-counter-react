//import react into the bundle
import { array } from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;


//render your react application
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
