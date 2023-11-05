import React from "react";
import "../stylesheets/Testimony.css";

function Testimony(props) {
  return (
    <div className="testimony-container">
      <img
        className="testimony-img"
        src={require("../img/testimony-emma.png")}
        alt="Emma"
      />
      <div className="testimony-text-container">
        <p className="testimony-name">
          {props.name} in {props.country}
        </p>
        <p className="charge-name">
          {props.charge} at {props.company}
        </p>
        <p className="testimony-text">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;
